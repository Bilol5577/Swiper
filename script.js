document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = "#F4A764"; 
});

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    on: {
        slideChange: function () {
          let activeSlide = document.querySelector('.swiper-slide-active'); 
          if (activeSlide) { 
            let bgColor = activeSlide.getAttribute('data-bg');
            document.body.style.backgroundColor = bgColor;
          }
        }
      },
});