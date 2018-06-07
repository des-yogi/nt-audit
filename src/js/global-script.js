// Если на проекте jQuery
$( document ).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    // autoHeight: true,
    // autoWidth: true,
    // center: true,
    responsive:{
      480:{
        items: 2
      },
      768:{
        items: 3
      },
      962:{
        items: 4,
        margin: 30
      },
      1200:{
        items: 6,
        margin: 30
      },
      1366:{
        items: 6,
        margin: 30,
        nav: true
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

