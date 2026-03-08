document.addEventListener('DOMContentLoaded', function() {

  // --- Hero staggered fade-in ---
  // CSS in <head> sets opacity:0 with delays on cbf6d08, 38dbd40, 052846c
  // Adding hero-visible to body triggers all three with their respective delays
  setTimeout(function() {
    document.body.classList.add('hero-visible');
  }, 100);

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

});
