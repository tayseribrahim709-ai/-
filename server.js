var h = require('http');
var fs = require('fs');
var p = require('path');
var wp = require('web-push');
var d = __dirname;
var m = {
  '': 'text/html;charset=utf-8',
  '.html': 'text/html;charset=utf-8',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};
// VAPID keys — set VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY env vars or use defaults
var VAPID_PUBLIC = process.env.VAPID_PUBLIC_KEY || 'BO_CwyBBysYW6EoKVDhuq-GsgJ6oeLnlEL8HOi0wgzm1H1BNIFf6BStJS1cwlU5Nc7VVwGsMa-j1kq1NuJa8AWI';
var VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY || 'y71xv7qz4m_MEOO4prMoiLEdWTtMfx6OE7nUa91sodg';
wp.setVapidDetails('mailto:admin@example.com', VAPID_PUBLIC, VAPID_PRIVATE);
var dbPath = p.join(d, 'sync_db.json');
function readDB(){try{return JSON.parse(fs.readFileSync(dbPath,'utf8'))}catch(e){return{users:{},pushSubs:[]}}}
function writeDB(db){fs.writeFileSync(dbPath,JSON.stringify(db,null,2))}
function json(res,data){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify(data))}
function body(req,cb){var b='';req.on('data',function(c){b+=c});req.on('end',function(){try{cb(JSON.parse(b))}catch(e){cb(null)}})}
h.createServer(function(q, r) {
  var u = q.url.split('?')[0];
  if (u === '/api/sync/signup' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.email||!d.password){json(r,{ok:false,error:'Email and password required'});return}
      var db=readDB();
      if(db.users[d.email]){json(r,{ok:false,error:'Email already registered'});return}
      db.users[d.email]={password:d.password,data:{},created:Date.now()};
      writeDB(db);
      json(r,{ok:true,user:{email:d.email}});
    });
  } else if (u === '/api/sync/login' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.email||!d.password){json(r,{ok:false,error:'Email and password required'});return}
      var db=readDB();
      var u2=db.users[d.email];
      if(!u2||u2.password!==d.password){json(r,{ok:false,error:'Invalid email or password'});return}
      json(r,{ok:true,user:{email:d.email}});
    });
  } else if (u === '/api/sync/upload' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.user||!d.user.email||!d.data){json(r,{ok:false,error:'Missing data'});return}
      var db=readDB();
      if(!db.users[d.user.email]){json(r,{ok:false,error:'User not found'});return}
      db.users[d.user.email].data=d.data;
      db.users[d.user.email].updated=Date.now();
      writeDB(db);
      json(r,{ok:true});
    });
  } else if (u === '/api/sync/download' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.user||!d.user.email){json(r,{ok:false,error:'Missing user'});return}
      var db=readDB();
      var u2=db.users[d.user.email];
      if(!u2){json(r,{ok:false,error:'User not found'});return}
      json(r,{ok:true,data:u2.data||{}});
    });
  } else if (u === '/api/sync/delete' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.user||!d.user.email){json(r,{ok:false,error:'Missing user'});return}
      var db=readDB();
      delete db.users[d.user.email];
      writeDB(db);
      json(r,{ok:true});
    });
  } else if (u === '/api/push/subscribe' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.subscription){json(r,{ok:false,error:'Missing subscription'});return}
      var db=readDB();
      if(!db.pushSubs)db.pushSubs=[];
      var exists=db.pushSubs.findIndex(function(s){return JSON.stringify(s)===JSON.stringify(d.subscription)});
      if(exists===-1)db.pushSubs.push(d.subscription);
      writeDB(db);
      json(r,{ok:true,count:db.pushSubs.length});
    });
  } else if (u === '/api/push/unsubscribe' && q.method==='POST') {
    body(q,function(d){
      if(!d||!d.subscription){json(r,{ok:false,error:'Missing subscription'});return}
      var db=readDB();
      if(!db.pushSubs)db.pushSubs=[];
      db.pushSubs=db.pushSubs.filter(function(s){return JSON.stringify(s)!==JSON.stringify(d.subscription)});
      writeDB(db);
      json(r,{ok:true,count:db.pushSubs.length});
    });
  } else if (u === '/api/push/send' && q.method==='POST') {
    body(q,function(d){
      var db=readDB();
      var subs=db.pushSubs||[];
      if(!subs.length){json(r,{ok:false,error:'No subscribers'});return}
      var title=(d&&d.title)||'📚 استاذ ياسر ابراهيم';
      var body=(d&&d.body)||'حان وقت التعلم!';
      var results={sent:0,failed:0};
      subs.forEach(function(sub){
        wp.sendNotification(sub,JSON.stringify({title:title,body:body})).then(function(){
          results.sent++;
        }).catch(function(){
          results.failed++;
          db.pushSubs=db.pushSubs.filter(function(s){return JSON.stringify(s)!==JSON.stringify(sub)});
        });
      });
      writeDB(db);
      setTimeout(function(){json(r,{ok:true,sent:results.sent,failed:results.failed})},1000);
    });
  } else if (u === '/api/push/publickey' && q.method==='GET') {
    json(r,{ok:true,publicKey:VAPID_PUBLIC});
  } else {
    if (u === '/') u = '/index.html';
    fs.readFile(p.join(d, u), function(e, b) {
      if (e) { r.writeHead(404); r.end('404'); return; }
      var x = p.extname(u).toLowerCase();
      r.writeHead(200, { 'Content-Type': m[x] || 'text/plain', 'Cache-Control': 'no-store, no-cache, must-revalidate' });
      r.end(b);
    });
  }
}).listen(process.env.PORT || 8080, function() { console.log('Server running on http://localhost:' + (process.env.PORT || 8080)); });
