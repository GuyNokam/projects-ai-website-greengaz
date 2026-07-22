// GreenGaz SA — comportements partagés (nav + année + galerie)
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.getElementById('siteNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  const toggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (toggle && primaryNav) {
    toggle.addEventListener('click', () => {
      const open = primaryNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Lightbox for gallery pages
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add('open');
      });
    });
    const close = () => lightbox.classList.remove('open');
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
});
