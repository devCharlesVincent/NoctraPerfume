(() => {
  'use strict';

  /* ============================================================
     Product data — from Noctra's price list (₱300 / 50ml / 30% oil concentrate)
     `image` is set only where an actual Noctra product photo exists.
     `desc` + `tags` are short character/mood descriptors (not literal
     fragrance-note claims) shown in the hover/click detail panel.
     ============================================================ */
  const PRODUCTS = [
    // Men
    { name: 'Bvlgari Man', category: 'men', desc: 'Rich and refined, with old-world elegance.', tags: ['Warm', 'Amber', 'Classic'] },
    { name: 'Creed Aventus', category: 'men', image: 'assets/images/collection-boxes.jpg', imageAlt: 'Noctra Creed Aventus, boxed', desc: 'Bold, fruity-smoky signature scent for the modern gentleman.', tags: ['Smoky', 'Fruity', 'Confident'] },
    { name: 'Bleu de Chanel', category: 'men', image: 'assets/images/product-ariana-bleu.jpg', imageAlt: 'Noctra Bleu de Chanel bottle', desc: 'Clean, woody-aromatic freshness that layers day to night.', tags: ['Fresh', 'Woody', 'Versatile'] },
    { name: 'Dior Sauvage', category: 'men', desc: 'Sharp citrus over a warm, mineral-fresh base — an everyday favorite.', tags: ['Fresh', 'Spicy', 'Bold'] },
    { name: 'Ralph Lauren Polo Black', category: 'men', image: 'assets/images/hero-main.jpg', imageAlt: 'Noctra Ralph Lauren Polo Black bottle', desc: 'Deep, mysterious, and intensely masculine.', tags: ['Woody', 'Intense', 'Evening'] },
    { name: 'Lacoste Black', category: 'men', image: 'assets/images/product-lacoste-black.jpg', imageAlt: 'Noctra Lacoste Black bottle with citrus and mint', desc: 'Crisp citrus and mint over a smooth woody finish.', tags: ['Fresh', 'Citrus', 'Sporty'] },
    { name: 'Versace Eros', category: 'men', desc: 'Vibrant and seductive, built to turn heads.', tags: ['Sweet', 'Mint', 'Magnetic'] },
    { name: 'Versace Eros Flame', category: 'men', image: 'assets/images/story-fire.jpg', imageAlt: 'Noctra Versace Eros Flame bottle styled with fire and smoke', desc: 'A warmer, spicier take on Eros with a fiery edge.', tags: ['Spicy', 'Warm', 'Bold'] },
    { name: 'Le Labo Santal 33', category: 'men', desc: 'Smoky sandalwood with a cult-favorite, unisex edge.', tags: ['Woody', 'Smoky', 'Cult'] },
    { name: 'Giorgio Armani Stronger With You', category: 'men', image: 'assets/images/product-armani-dior.jpg', imageAlt: 'Noctra Giorgio Armani Stronger With You bottle', desc: 'Sweet, spicy, and undeniably charming.', tags: ['Sweet', 'Spicy', 'Charming'] },
    { name: 'Issey Miyake', category: 'men', desc: 'Clean aquatic freshness inspired by sea and sky.', tags: ['Aquatic', 'Fresh', 'Light'] },
    { name: 'Jo Malone Nectarine Blossom & Honey', category: 'men', desc: 'Juicy stone-fruit sweetness balanced with soft honey.', tags: ['Fruity', 'Sweet', 'Light'] },
    { name: 'Dolce & Gabbana Light Blue Pour Homme', category: 'men', image: 'assets/images/flatlay-noctra-cards.jpg', imageAlt: 'Noctra Dolce & Gabbana Light Blue Pour Homme among other bottles', desc: 'Sun-soaked Mediterranean freshness for effortless everyday wear.', tags: ['Citrus', 'Fresh', 'Breezy'] },
    // Women
    { name: 'Ariana Grande Cloud', category: 'women', image: 'assets/images/product-ariana-bleu.jpg', imageAlt: 'Noctra Ariana Grande Cloud bottle', desc: 'Soft, sweet, and dreamy — like your favorite cozy sweater.', tags: ['Sweet', 'Creamy', 'Cozy'] },
    { name: 'Baccarat Rouge 540', category: 'women', desc: 'Warm amber-saffron glow that lingers for hours — a modern icon.', tags: ['Amber', 'Warm', 'Iconic'] },
    { name: 'Miss Dior Blooming Bouquet', category: 'women', image: 'assets/images/product-armani-dior.jpg', imageAlt: 'Noctra Miss Dior Blooming Bouquet bottle', desc: 'Bright floral bouquet that feels fresh and feminine.', tags: ['Floral', 'Fresh', 'Feminine'] },
    { name: 'Dolce & Gabbana Light Blue', category: 'women', desc: 'Crisp citrus and apple over a musky base — a summer staple.', tags: ['Citrus', 'Fresh', 'Summery'] },
    { name: 'Jo Malone English Pear & Freesia', category: 'women', image: 'assets/images/story-diffuser.jpg', imageAlt: 'Noctra Jo Malone English Pear and Freesia bottles with a reed diffuser', desc: 'Juicy pear and soft floral freesia, effortlessly elegant.', tags: ['Fruity', 'Floral', 'Elegant'] },
    { name: 'Katy Perry', category: 'women', desc: 'Playful, sweet, and fun — a fragrance with personality.', tags: ['Sweet', 'Fruity', 'Playful'] },
    { name: 'Vanilla Lace', category: 'women', desc: 'Warm vanilla wrapped in soft, sensual musk.', tags: ['Vanilla', 'Musky', 'Sensual'] },
    { name: 'YSL Libre', category: 'women', desc: 'Lavender and orange blossom with a bold, free-spirited edge.', tags: ['Floral', 'Bold', 'Free'] },
    { name: 'Versace Bright Crystal', category: 'women', desc: 'Delicate florals and fruit for a light, feminine everyday scent.', tags: ['Floral', 'Light', 'Delicate'] },
    // Unisex
    { name: 'Jo Malone', category: 'unisex', desc: 'Understated, layerable, and effortlessly refined.', tags: ['Subtle', 'Refined', 'Layerable'] },
    { name: 'Dolce & Gabbana Light Blue', category: 'unisex', desc: 'Fresh citrus that works beautifully on anyone.', tags: ['Citrus', 'Fresh', 'Unisex'] },
    { name: 'Baccarat Rouge 540', category: 'unisex', desc: 'The warm-amber icon everyone loves, in a shareable scent.', tags: ['Amber', 'Warm', 'Iconic'] },
  ];

  const CATEGORY_LABEL = { men: 'Men', women: 'Women', unisex: 'Unisex' };

  const BOTTLE_GRAPHIC = `
    <svg class="bottle-graphic" viewBox="0 0 120 180" aria-hidden="true">
      <rect x="42" y="6" width="36" height="22" rx="3" fill="#2b2b2e"/>
      <rect x="50" y="0" width="20" height="10" rx="2" fill="#1a1a1c"/>
      <path d="M46 28h28c5 0 9 3.6 9 9.2v10c0 2-.8 3.9-2.2 5.4l-4.4 4.6c-1.4 1.5-2.2 3.4-2.2 5.4V152a10 10 0 0 1-10 10H56a10 10 0 0 1-10-10V62.6c0-2-.8-3.9-2.2-5.4l-4.4-4.6A7.8 7.8 0 0 1 37 47.2v-10c0-5.6 4-9.2 9-9.2z"
        fill="#f4f3f1" stroke="#c9c9cc" stroke-width="1.2"/>
      <rect x="38" y="78" width="44" height="52" rx="1" fill="#ffffff" stroke="#dcdbd8" stroke-width="1"/>
      <ellipse cx="60" cy="98" rx="15" ry="17" fill="none" stroke="#16161a" stroke-width="1.3"/>
      <text x="60" y="103" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="19" fill="#16161a" text-anchor="middle">N</text>
      <path d="M60 112 l7 6 -7 6 -7-6z" fill="#16161a" opacity="0.85"/>
    </svg>`;

  const INFO_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 8v.01"/></svg>`;

  function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    const frag = document.createDocumentFragment();
    PRODUCTS.forEach((p, i) => {
      const card = document.createElement('article');
      card.className = 'cat-card reveal';
      card.dataset.category = p.category;
      card.style.setProperty('--stagger', (i % 8) * 60 + 'ms');

      const media = p.image
        ? `<img src="${p.image}" alt="${p.imageAlt}" loading="lazy">`
        : BOTTLE_GRAPHIC;

      const tagsHtml = p.tags.map((t) => `<li>${t}</li>`).join('');
      const detailId = `detail-${i}`;

      card.innerHTML = `
        <div class="cat-media">
          ${media}
          <button class="cat-info-btn" type="button" aria-expanded="false" aria-controls="${detailId}" aria-label="View scent details for ${p.name}">${INFO_ICON}</button>
          <div class="cat-detail" id="${detailId}">
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <ul class="cat-detail-tags">${tagsHtml}</ul>
            <a class="cat-detail-cta" href="#order">Message to Order</a>
          </div>
        </div>
        <div class="cat-body">
          <span class="cat-tag">${CATEGORY_LABEL[p.category]}</span>
          <h3>${p.name}</h3>
          <div class="cat-meta">
            <span>50ml</span>
            <span class="cat-price">₱300</span>
          </div>
        </div>
      `;
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  function initFilters() {
    const tabs = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('catalogGrid');
    if (!tabs.length || !grid) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;

        tabs.forEach((t) => {
          t.classList.toggle('is-active', t === tab);
          t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
        });

        let visibleIndex = 0;
        grid.querySelectorAll('.cat-card').forEach((card) => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.hidden = !match;
          if (match) {
            card.style.setProperty('--stagger', (visibleIndex % 8) * 60 + 'ms');
            card.classList.remove('in-view');
            // eslint-disable-next-line no-unused-expressions
            card.offsetHeight; // force reflow so the animation replays
            card.classList.add('in-view');
            visibleIndex++;
          }
        });
      });
    });
  }

  // Click/tap-to-toggle scent detail panel (works alongside the CSS :hover
  // reveal for mouse users). Closes other open panels and supports Escape /
  // outside-click to dismiss, per accessibility guidance for hover-only info.
  function initScentDetails() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    function closeAll(except) {
      grid.querySelectorAll('.cat-card.is-active').forEach((card) => {
        if (card === except) return;
        card.classList.remove('is-active');
        card.querySelector('.cat-info-btn')?.setAttribute('aria-expanded', 'false');
      });
    }

    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-info-btn');
      if (!btn) return;
      const card = btn.closest('.cat-card');
      const isOpen = card.classList.toggle('is-active');
      btn.setAttribute('aria-expanded', String(isOpen));
      closeAll(isOpen ? card : null);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.cat-card')) closeAll(null);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAll(null);
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((el) => io.observe(el));
  }

  function initGridStagger() {
    document.querySelectorAll('.favorites-grid .fav-card, .insta-grid .insta-tile').forEach((el, i) => {
      el.style.setProperty('--stagger', (i % 8) * 60 + 'ms');
    });
  }

  function initCardTilt() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReduced || isTouch) return;

    document.querySelectorAll('.fav-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Hero video: slow-motion playback, a robust autoplay fallback (some
  // browsers need an explicit JS play() rather than just the attribute),
  // and a quick crossfade at the loop seam so it doesn't visibly jump.
  // Paused entirely (poster only) for reduced-motion users.
  const HERO_SLOWMO_RATE = 0.5;

  function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      video.removeAttribute('autoplay');
      return;
    }

    video.muted = true; // belt-and-suspenders: some browsers require the JS property, not just the attribute
    video.playbackRate = HERO_SLOWMO_RATE;

    const tryPlay = () => video.play().catch(() => {
      // Autoplay blocked (e.g. low-power mode) — retry on first user interaction.
      const resume = () => { video.play().catch(() => {}); };
      ['click', 'touchstart', 'scroll'].forEach((evt) =>
        window.addEventListener(evt, resume, { once: true, passive: true })
      );
    });

    video.addEventListener('loadedmetadata', () => {
      video.playbackRate = HERO_SLOWMO_RATE;
      tryPlay();
    });
    video.addEventListener('play', () => {
      video.playbackRate = HERO_SLOWMO_RATE;
    });
    tryPlay();

    // Smooth the loop seam: fade out just before it restarts, fade back in
    // right after — reads as an intentional crossfade instead of a jump cut.
    video.addEventListener('timeupdate', () => {
      if (!video.duration) return;
      if (video.duration - video.currentTime < 0.3) {
        video.style.opacity = '0';
      } else if (video.currentTime < 0.3) {
        video.style.opacity = '1';
      }
    });
  }

  function initFooterYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    initFilters();
    initScentDetails();
    initHeaderScroll();
    initMobileNav();
    initGridStagger();
    initReveal();
    initCardTilt();
    initHeroVideo();
    initFooterYear();
  });
})();
