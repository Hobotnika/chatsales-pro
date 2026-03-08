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

  // --- Scroll-triggered fade-in for buttons ---
  // Find all elementor buttons and wrap their parent containers
  var style = document.createElement('style');
  style.textContent = '.scroll-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; } .scroll-fade.visible { opacity: 1; transform: translateY(0); }';
  document.head.appendChild(style);

  // Target the two CTA buttons by their text content
  var allButtons = document.querySelectorAll('.elementor-button');
  allButtons.forEach(function(btn) {
    var text = btn.textContent.trim();
    if (text === 'Book A Call' || text === 'Full Explainer Guide') {
      btn.closest('.elementor-widget') && btn.closest('.elementor-widget').classList.add('scroll-fade');
    }
  });

  // Intersection Observer to trigger the animation
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.scroll-fade').forEach(function(el) {
    observer.observe(el);
  });

});
