// Set the cache name and files to cache
const CACHE_NAME = "my-app-cache";
const FILES_TO_CACHE = ["index.html"];

// Install the service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate the service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Intercept network requests and serve cached files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Serving from cache", event.request.url);
        return response;
      }
      // console.log("Fetching from network", event.request.url);
      return fetch(event.request);
    })
  );
});
