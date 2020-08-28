$(function (){
    $('.slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        nextArrow:'<button class="slick-arrow slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8V6H12L8 2L9 0L16 7L9 14L8 12L12 8H0Z" fill="#473534"/></svg></button>',
        prevArrow:'<button class="slick-arrow slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#473534"/></svg></button>',
        responsive: [
            {
              breakpoint: 1351,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 981,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 861,
                settings: {
                    arrows:false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
              },
              {
                breakpoint: 651,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                }
              },
          ]
    });

    $('.reviews__items').slick({
        infinite: false,
        nextArrow:'<button class="slick-arrow slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8V6H12L8 2L9 0L16 7L9 14L8 12L12 8H0Z" fill="#473534"/></svg></button>',
        prevArrow:'<button class="slick-arrow slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#473534"/></svg></button>',
        responsive: [
            {
              breakpoint: 525,
              settings: {
                arrows: false,
                autoplay:true,
              }
            },
          ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
});