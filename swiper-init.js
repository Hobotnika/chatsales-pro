document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.elementor-invisible').forEach(function(el) {
    el.classList.remove('elementor-invisible');
  });

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
});
