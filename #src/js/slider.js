/* Function for Slick Slider */
$(document).ready(function(){
  $(document).ready(function(){
    $('.slider__blocks').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: true
          }
        }
      ]
    });
    });
  });

  
  