self.addEventListener('install', e => {
	e.waitUntil(
		caches.open('app-cache').then(cache => {
			return cache.addAll([
				'/'
			]);
		})
	);
});