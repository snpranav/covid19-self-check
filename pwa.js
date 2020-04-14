

const staticCacheName = 'v6.0.1';


const assets = [
  '/manifest.json',
  '/index.html',
  '/test.html',
  '/credits.html',
  '/terms.html',
  '/schema.pdf',
  'https://edge.covidselfcheck.app/bootstrap/bootstrap.min.css',
  'https://edge.covidselfcheck.app/nprogress/nprogress.min.js',
  'https://edge.covidselfcheck.app/nprogress/nprogress.min.css',
  'https://edge.covidselfcheck.app/jquery/jquery.js',
  'https://edge.covidselfcheck.app/site/ui.val.min.js',
  '/https://edge.covidselfcheck.app/site/ui.min.js',
  'https://edge.covidselfcheck.app/site/preloader.css',
  'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  'https://s.pageclip.co/v1/pageclip.js',  
  'https://res.cloudinary.com/thesuhailcompany/image/upload/c_scale,w_150/v1586528239/covidselfcheck/do.png',
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
