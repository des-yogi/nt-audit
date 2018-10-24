$( document ).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    // autoHeight: true,
    // autoWidth: true,
    center: true,
    responsive:{
      480:{
        items: 1,
        margin: 30

      },
      768:{
        items: 3
      },
      962:{
        items: 4,
        margin: 30
      },
      1200:{
        items: 4,
        margin: 35
      },
      1366:{
        items: 5,
        margin: 50
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
  var mainNavContainer = document.querySelector('.page-header__nav-wrapper');

  var burgerClickHandler = function (e) {
    if (menuBox && !menuBox.classList.contains('main-nav__list--open')) {
      menuBox.classList.add('main-nav__list--open');
      document.body.style.overflow = 'hidden';
      mainNavContainer.style.backgroundColor = '#333';
    } else {
        menuBox.classList.remove('main-nav__list--open');
        document.body.style.overflow = 'visible';
        mainNavContainer.style.backgroundColor = 'transparent';
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

