const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// External links open in a new tab so this company profile stays open as-is.
document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach(link => {
  link.target = '_blank'; link.rel = 'noopener noreferrer';
});

let installEvent;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); installEvent = event; installBtn.hidden = false;
});
installBtn.addEventListener('click', async () => {
  if (!installEvent) return;
  installEvent.prompt(); await installEvent.userChoice;
  installEvent = null; installBtn.hidden = true;
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(console.error));
}
