// service-worker.ts

/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

const sw = self as unknown as ServiceWorkerGlobalScope;

const CACHE_NAME = 'your-app-cache-v1';
const urlsToCache: string[] = [
  '/',
  '/index.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/manifest.json',
  'assets/taskIcon1.jpeg',
];

sw.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

sw.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

export {};
