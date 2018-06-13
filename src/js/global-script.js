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

  $(".service-item__list-wrapper").accordionjs({

    // The section open on first init.
    activeIndex : 1,

    // Closeable section.
    closeAble: true,

    // Close other sections.
    closeOther: true,

    // the speed of slide animation.
    slideSpeed: 100

  });

});


(function(){
  //
  var menuBox = document.querySelector('.main-nav__list');
  var burger = document.querySelector('.burger');

  var burgerClickHandler = function (e) {
    if (menuBox && !menuBox.classList.contains('main-nav__list--open')) {
      menuBox.classList.add('main-nav__list--open');
      document.body.style.overflow = 'hidden';
    } else {
        menuBox.classList.remove('main-nav__list--open');
        document.body.style.overflow = 'visible';
    }
  };

  burger.addEventListener('click', burgerClickHandler);
}());

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

