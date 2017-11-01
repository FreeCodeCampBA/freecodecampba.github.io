$(document).ready(function() {
  // $(".owl-carousel").owlCarousel();

  $(".owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
});
