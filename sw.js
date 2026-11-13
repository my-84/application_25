const CACHE_NAME = "report-tool-v5";
const FILES = ["./test.html"];

// 着任したとき：倉庫にファイルをしまう
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(FILES.map(function (f) {
                return new Request(f, { cache: "reload" });
            }));
        })
    );
});

// 注文が来たとき：倉庫にあればそれを、なければ取りに行く
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(function (cached) {
            return cached || fetch(event.request);
        })
    );
});

// 新しく着任したとき：古い倉庫を捨て、新しい倉庫にファイルをしまう
self.addEventListener("activate", function (event) {
    event.waitUntil(
    caches.keys().then(function (names) {
        return Promise.all(
        names
            .filter(function (name) { return name !== CACHE_NAME; })
            .map(function (name) { return caches.delete(name); })
        );
    })
    );
});
