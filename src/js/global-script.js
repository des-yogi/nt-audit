// Если на проекте jQuery
$( document ).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    // autoHeight: true,
    autoWidth: true,
    center: false,
    responsive:{
      480:{
        items: 2
      },
      768:{
        items: 3,
        margin: 20
      },
      962:{
        items: 4,
        margin: 30,
        autoWidth: false,
        center: false
      },
      1200:{
        items: 6,
        autoWidth: false,
        margin: 30,
        center: false
      }
    }
  })

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

