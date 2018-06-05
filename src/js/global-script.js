// Если на проекте jQuery
$( document ).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoHeight: true,
    autoWidth: true,
    responsive:{
      0:{
        items: 1,
      },
      480:{
        items: 2
      },
      768:{
        items: 3
      },
      962:{
        items: 4
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

