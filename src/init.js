// vite doesn't define a global field in window
// and some libraries depend on it
window.global ||= window;
