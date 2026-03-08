document.addEventListener('DOMContentLoaded', function() {

  // --- Carousel init ---
  var proofCarousel = document.querySelector('.elementor-element-303e837 .e-n-carousel.swiper');
  if (proofCarousel) {
    proofCarousel.classList.add('offset-both');
    new Swiper(proofCarousel, {
      slidesPerView: 1.001,
      spaceBetween: 53,
      loop: true,
      speed: 500,
      autoplay: { delay: 5000, disableOnInteraction: true, reverseDirection: true },
      navigation: {
        nextEl: '.elementor-element-303e837 .elementor-swiper-button-next',
        prevEl: '.elementor-element-303e837 .elementor-swiper-button-prev',
      }
    });
  }

  var partnersCarousel = document.querySelector('.elementor-element-c42684b .e-n-carousel.swiper');
  if (partnersCarousel) {
    partnersCarousel.classList.add('offset-both');
    new Swiper(partnersCarousel, {
      slidesPerView: 2.001,
      spaceBetween: 47,
      loop: true,
      speed: 300,
      autoplay: { delay: 2000, disableOnInteraction: true, reverseDirection: false },
      navigation: {
        nextEl: '.elementor-element-c42684b .elementor-swiper-button-next',
        prevEl: '.elementor-element-c42684b .elementor-swiper-button-prev',
      }
    });
  }

  // --- Scroll fade-in for bottom CTA buttons ---
  var style = document.createElement('style');
  style.textContent = '.scroll-fade { opacity: 0; transition: opacity 0.8s ease; } .scroll-fade.visible { opacity: 1; }';
  document.head.appendChild(style);

  document.querySelectorAll('.elementor-button').forEach(function(btn) {
    var text = btn.textContent.trim();
    if (text === 'Book A Call' || text === 'Full Explainer Guide') {
      var widget = btn.closest('.elementor-widget');
      if (widget) widget.classList.add('scroll-fade');
    }
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-fade').forEach(function(el) {
    observer.observe(el);
  });

  // --- Hero section staggered entrance animations ---
  // headline: fade in immediately, subheadline: 300ms delay, hero buttons: 600ms delay
  var heroStyle = document.createElement('style');
  heroStyle.textContent = [
    '.hero-fade { opacity: 0; transition: opacity 0.8s ease; }',
    '.hero-fade.hero-delay-0 { transition-delay: 0ms; }',
    '.hero-fade.hero-delay-1 { transition-delay: 300ms; }',
    '.hero-fade.hero-delay-2 { transition-delay: 600ms; }',
    '.hero-fade.visible { opacity: 1; }'
  ].join(' ');
  document.head.appendChild(heroStyle);

  // Find hero buttons (top of page) - these are the ones NOT at the bottom
  var allButtons = document.querySelectorAll('.elementor-button');
  var heroButtons = [];
  allButtons.forEach(function(btn) {
    var text = btn.textContent.trim();
    if (text === 'Book A Call' || text === 'Full Explainer Guide') {
      // Check if this is in the hero (top portion of page)
      var rect = btn.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        heroButtons.push(btn.closest('.elementor-widget'));
      }
    }
  });

  // Find headline and subheadline in hero section (first heading + first text widget near top)
  var heroSection = document.querySelector('.elementor-section, .e-con');
  var headings = document.querySelectorAll('h1, h2');
  var mainHeading = headings[0];
  var subHeading = null;

  // Subheadline is typically a text widget right after the main heading
  if (mainHeading) {
    var next = mainHeading.closest('.elementor-widget');
    if (next && next.nextElementSibling) {
      subHeading = next.nextElementSibling;
    }
  }

  if (mainHeading) {
    var hw = mainHeading.closest('.elementor-widget');
    if (hw) { hw.classList.add('hero-fade', 'hero-delay-0'); }
  }
  if (subHeading) {
    subHeading.classList.add('hero-fade', 'hero-delay-1');
  }
  heroButtons.forEach(function(btn) {
    if (btn) btn.classList.add('hero-fade', 'hero-delay-2');
  });

  // Trigger hero animations after a tiny paint delay
  setTimeout(function() {
    document.querySelectorAll('.hero-fade').forEach(function(el) {
      el.classList.add('visible');
    });
  }, 50);

});
