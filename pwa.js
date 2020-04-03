
const staticCacheName = 'aplha-v5.5';


const assets = [
  '/index.html',
  '/test.html',
  '/manifest.json',
  '/js/jq.js',
  '/js/bootstrap.min.js',
  '/css/bootstrap.min.css',
  '/css/preloader.css',
  '/credits.html',
  '/terms.html',
  '/schema.pdf',
  'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  'https://unpkg.com/nprogress@0.2.0/nprogress.js',
  'https://unpkg.com/nprogress@0.2.0/nprogress.css'
];


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );

self.skipWaiting();

});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
