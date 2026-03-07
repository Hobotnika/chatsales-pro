document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.elementor-invisible').forEach(function(el) {
    el.classList.remove('elementor-invisible');
  });

  // Proof carousel - video testimonials
  var proofCarousel = document.querySelector('.elementor-element-303e837 .e-n-carousel.swiper');
  if (proofCarousel) {
    new Swiper(proofCarousel, {
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 53,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      navigation: {
        nextEl: '.elementor-element-303e837 .e-n-carousel-navigation-next',
        prevEl: '.elementor-element-303e837 .e-n-carousel-navigation-prev',
      }
    });
  }

  // Partners carousel - who we worked with, peek on sides
  var partnersCarousel = document.querySelector('.elementor-element-c42684b .e-n-carousel.swiper');
  if (partnersCarousel) {
    new Swiper(partnersCarousel, {
      slidesPerView: 2.3,
      centeredSlides: true,
      spaceBetween: 47,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false, reverseDirection: true },
      navigation: {
        nextEl: '.elementor-element-c42684b .e-n-carousel-navigation-next',
        prevEl: '.elementor-element-c42684b .e-n-carousel-navigation-prev',
      }
    });
  }
});
