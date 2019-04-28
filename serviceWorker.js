const VERSION = '0320';


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => {
      return cache.addAll([
        './',
        `dist/app.css?v=${VERSION}`,
        `dist/app.min.js?v=${VERSION}`,
        'dist/codeAndComments.min.js',
        'dist/repositories.min.js',
        'dist/arrow-forward.svg'
      ])
    })
  )
})


self.addEventListener('fetch', (event) => {
  const task = caches.match(event.request).then((response) => {
    return response || fetch(event.request)
  })
  event.respondWith(task)
})


self.addEventListener('activate', (event) => {
  const task = (async function () {
    const promises = (await caches.keys()).map((cacheName) => {
      if (cacheName !== VERSION) {
        return caches.delete(cacheName)
      }
    })
    await Promise.all(promises)
  })()
  event.waitUntil(task)
})
