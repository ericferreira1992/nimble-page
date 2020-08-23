self.addEventListener('install', e => {
	console.log(e);
	console.log(caches);
	e.waitUntil(
		caches.open('app-cache').then(cache => {
			console.log(cache);
			return cache.addAll([
				'/nimble-page/'
			]);
		})
	);
});