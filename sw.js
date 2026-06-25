const CACHE = 'opencode-v18';
const TS = Date.now();
const FILES = [
  '/', '/index.html?ts='+TS, '/style.css?ts='+TS,   '/app-lang.js?v=7&ts='+TS,
  '/app.js?v=27&ts='+TS,
  '/app_data.json?ts='+TS, '/level_tests.json?ts='+TS, '/placement_test.json?ts='+TS,
  '/manifest.json?ts='+TS, '/icon-192.png', '/icon-512.png',
  '/teacher.jpg', '/USER_GUIDE.html?ts='+TS
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    clients.claim().then(() =>
      caches.keys().then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
    )
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(fetch(e.request).catch(() => new Response(JSON.stringify({ok:false,error:'Offline'}), {status:503})));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => new Response('<h1>🔴 غير متصل</h1><p>افتح التطبيق وأنت متصل أولاً</p>', {headers:{'Content-Type':'text/html; charset=utf-8'}})))
  );
});

// ─── PUSH NOTIFICATIONS ───
self.addEventListener('push', e => {
  if (!e.data) return;
  try {
    const d = e.data.json();
    self.registration.showNotification(d.title || '📚 استاذ ياسر', {
      body: d.body || 'حان وقت التعلم!',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      data: d.data || {}
    });
  } catch(_) {
    self.registration.showNotification('📚 استاذ ياسر', { body: e.data.text(), icon: '/icon-192.png' });
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(cl => {
    if (cl.length > 0) { cl[0].focus(); return; }
    clients.openWindow('/');
  }));
});
