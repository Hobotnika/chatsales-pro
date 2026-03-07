document.addEventListener('DOMContentLoaded', function() {
  // Remove elementor-invisible from all elements
  document.querySelectorAll('.elementor-invisible').forEach(function(el) {
    el.classList.remove('elementor-invisible');
  });

  // Proof carousel (element 303e837) - video testimonials, 1 slide, slide from left
  var proofCarousel = document.querySelector('.elementor-element-303e837 .e-n-carousel.swiper');
  if (proofCarousel) {
    new Swiper(proofCarousel, {
      slidesPerView: 1,
      spaceBetween: 53,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      navigation: {
        nextEl: '.elementor-element-303e837 .e-n-carousel-navigation-next',
        prevEl: '.elementor-element-303e837 .e-n-carousel-navigation-prev',
      }
    });
  }

  // Partners carousel (element c42684b) - who we worked with, 2 per slide, slide from right
  var partnersCarousel = document.querySelector('.elementor-element-c42684b .e-n-carousel.swiper');
  if (partnersCarousel) {
    new Swiper(partnersCarousel, {
      slidesPerView: 2,
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
