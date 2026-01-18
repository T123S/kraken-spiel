const CACHE_NAME = 'kraken-game-v1';
// HIER BITTE PRÜFEN: Heißen deine Dateien genau so?
// Wenn du z.B. noch Bilder wie 'krake.png' hast, füge sie hier hinzu!
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',  
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installation: Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Dateien werden gecacht...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Abruf: Erst im Cache schauen, dann im Netzwerk
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});