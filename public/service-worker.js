const CACHE_NAME = 'CACHE-01';
const toCache = [
  '/index.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/static/js/vendors~main.chunk.js',
  '/static/css/main.chunk.css',
  '/favicon.ico',
  '/dashboard',
  '/redux',
  '/greeting',
  '/selector',
  '/register',
  '/auth',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(toCache)
        })
        .then(self.skipWaiting())
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match(event.request)
            })
        })
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('Hapus cache lama', key)
                    return caches.delete(key)
                }
            }))
        })
        .then(() => self.clients.claim())
    )
})


// self.addEventListener('install', event => {
//     console.log('Service worker installed');
//     event.waitUntil(
//       caches.open('v1').then(cache => {
//         return cache.addAll([
//           '/index.html',
//           '/static/js/main.chunk.js',
//           '/static/js/0.chunk.js',
//           '/static/js/bundle.js',
//           '/static/js/vendors~main.chunk.js',
//           '/static/css/main.chunk.css',
//           '/favicon.ico',
//           '/dashboard',
//           '/redux',
//           '/greeting',
//           '/selector',
//           '/register',
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', event => {
//     console.log('Service worker fetching');
//     event.respondWith(
//       caches.match(event.request).then(response => {
//         if (response) {
//           console.log('Found ', event.request.url, ' in cache');
//           return response;
//         }
//         console.log('Network request for ', event.request.url);
//         return fetch(event.request).then(response => {
//           return caches.open('v1').then(cache => {
//             cache.put(event.request.url, response.clone());
//             return response;
//           });
//         });
//       })
//     );
//   });
  