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
});
  /* Formato del slider */
$(document).ready(function() {
  $('.ba-slider').beforeAfter();
  
  // Configuramos la librería jQuery Accordion
  
  $('.accordion').accordion({
    transitionSpeed: 400,        // velocidad del acordeón
    transitionEasing: 'ease'    // ritmo del acordeón (linear, ease-in…)
  });
});


