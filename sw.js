self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('app-cache').then(function(cache) {
			return cache.addAll([
				'/',
				'/nimble-page/'
			]);
		})
	);
});