const root = document.documentElement;
let fontSize = 100; // percent

document.getElementById('font-increase').addEventListener('click', () => {
  if (fontSize < 200) fontSize += 10;
  root.style.fontSize = fontSize + '%';
});

document.getElementById('font-decrease').addEventListener('click', () => {
  if (fontSize > 70) fontSize -= 10;
  root.style.fontSize = fontSize + '%';
});

// Img popup effect
document.querySelectorAll('.enlargeable').forEach(img => {
  img.addEventListener('click', () => showImagePopup(img.src, img.alt));
  img.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.key === ' ') showImagePopup(img.src, img.alt);
  });
});

function showImagePopup(src, alt) {
  const overlay = document.createElement('div');
  overlay.className = 'image-popup-overlay';
  overlay.tabIndex = 0;
  overlay.innerHTML = `<img src="${src}" alt="${alt}">`;
  document.body.appendChild(overlay);
  overlay.focus();

  // close on click, esc, or blur
  overlay.addEventListener('click', () => overlay.remove());
  overlay.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.remove();
  });
}