var h = require('http');
var fs = require('fs');
var p = require('path');
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
h.createServer(function(q, r) {
  var u = q.url.split('?')[0];
  if (u === '/') u = '/index.html';
  fs.readFile(p.join(d, u), function(e, b) {
    if (e) { r.writeHead(404); r.end('404'); return; }
    var x = p.extname(u).toLowerCase();
    r.writeHead(200, { 'Content-Type': m[x] || 'text/plain', 'Cache-Control': 'no-store, no-cache, must-revalidate' });
    r.end(b);
  });
}).listen(process.env.PORT || 8080, function() { console.log('Server running on http://localhost:' + (process.env.PORT || 8080)); });
