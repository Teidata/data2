/* Activación del slider */
$(document).ready(function() {
  $('.slider').slick(
{
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    pauseOnHover: true,
    fade: true,
  }

  );
  /* Formato del slider */
$('.ba-slider').beforeAfter();
 
});


