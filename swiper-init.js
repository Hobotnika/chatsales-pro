document.addEventListener('DOMContentLoaded', function() {
  // Remove elementor-invisible from all elements
  document.querySelectorAll('.elementor-invisible').forEach(function(el) {
    el.classList.remove('elementor-invisible');
  });

  // Init all Swiper carousels
  document.querySelectorAll('.e-n-carousel.swiper').forEach(function(el) {
    new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 53,
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        nextEl: el.parentElement.querySelector('.swiper-button-next, [aria-label="Next slide"]'),
        prevEl: el.parentElement.querySelector('.swiper-button-prev, [aria-label="Previous slide"]'),
      }
    });
  });
});
