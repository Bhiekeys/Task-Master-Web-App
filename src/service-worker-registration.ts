export function register(): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.ts')
        .then((registration) => {
          console.log('ServiceWorker registration successful:', registration);
        })
        .catch((error: Error) => {
          console.error('ServiceWorker registration failed:', error);
        });
    });
  }
}

export function unregister(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error: Error) => {
        console.error(error.message);
      });
  }
}