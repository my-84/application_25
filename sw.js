const CACHE_NAME = "report-tool-v1";
const FILES = [, "./test.html"];

// 着任したとき：倉庫にファイルをしまう
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(FILES);
        })
    );
});

// 注文が来たとき：倉庫にあればそれを、なければ取りに行く
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cached) {
            return cached || fetch(event.request);
        })
    );
});