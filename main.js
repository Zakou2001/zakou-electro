// ZAKOU Electro — interactions
(function () {
  'use strict';

  // Mobile nav toggle
  const burger = document.querySelector('.nav__burger');
  const links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      links.classList.toggle('is-open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

  // Scroll reveal (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(r => io.observe(r));
  } else {
    reveals.forEach(r => r.classList.add('is-visible'));
  }

  // Product filter pills (visual only — no real filtering since this is static)
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => {
    p.addEventListener('click', () => {
      pills.forEach(o => o.classList.remove('is-active'));
      p.classList.add('is-active');
      const target = p.dataset.cat;
      document.querySelectorAll('.product-card').forEach(card => {
        if (target === 'all' || !target) {
          card.style.display = '';
        } else {
          card.style.display = card.dataset.cat === target ? '' : 'none';
        }
      });
    });
  });

  // Contact form — friendly no-op (static site)
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Merci ! Votre message a été enregistré. Nous vous recontactons rapidement.';
        status.style.color = '#18B5D4';
      }
      form.reset();
    });
  }
})();
