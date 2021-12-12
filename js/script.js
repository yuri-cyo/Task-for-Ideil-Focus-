//searchbar
const icon = document.querySelector('.icon');
const searchbar = document.querySelector('.searchbar');
if(icon){
icon.addEventListener("click", function(e){
  searchbar.classList.toggle('searchbar__active');
  });
}


  //Вертикальний свайпер для текста
const swiper1 = new Swiper('.container__primary-news2-swiper', {
  // Optional parameters
  direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-text-vertical',
  // },
  scrollbar: {
    el: '.swiper-scrollbar2',
  },

  slidesPerView: 2.8,
// slidesPerView: 'auto',
  // autoplay: {
  //   delay: 1500,
  // },

  spaceBetween: 70, 
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  mousewheel:{
    sensivity: 1,
    // eventsTarget: ".image-slider"
  },

//Автовистота
// autoHeight: true,

// height: 104,

// centeredSlides: true,

});





//головний свайпер Pwimary
const swiperPrimary = new Swiper('.swiper__primary', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-primary-news',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-btn-next5',
  //   prevEl: '.swiper-btn-prev5',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // курсор-рука
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  mousewheel:{
    sensivity: 1,
    // eventsTarget: ".image-slider"
  },

//Автовистота
autoHeight: true,

simulateTouch: true,

  //К-сть слайдів для показу
// slidesPerView: 3.387,
slidesPerView: 'auto',

spaceBetween: 24,

  //Кількість прилистуючих слайдів
// slidesPerGroup: 1,

centeredSlides: true,

  //Вільний режим(прокрутка без градації)
// freeMode: true,

autoplay: {
  delay: 1500,
},

speed: 1500,
effect: "fade",

  thumbs: {
    swiper: {
      el: '.container__news-mini-items',
      slidesPerView: 4,
      spaceBetween: 10,

      breakpoints: {
  
        1305: {
          spaceBetween: 24,
          // freeMode: true,
          // loop: true,
          // centeredSlides: true,
        },
      },
    },
  },


});


// new Sviper('.image-slider');

const swiper2 = new Swiper('.image-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.pagination-3',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next3',
    prevEl: '.swiper-btn-prev3',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // курсор-рука
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  mousewheel:{
    sensivity: 1,
    // eventsTarget: ".image-slider"
  },

//Автовистота
autoHeight: true,

  //К-сть слайдів для показу
// slidesPerView: 3.387,
slidesPerView: 'auto',

spaceBetween: 24,

  //Кількість прилистуючих слайдів
// slidesPerGroup: 1,

centeredSlides: true,

  //Вільний режим(прокрутка без градації)
// freeMode: true,

autoplay: {
  delay: 1500,
},

// breakpoints: {
//   // 1450: {
//   //   slidesPerView: 3.387,
//   // }
  
//   900: {
//     slidesPerView: 2,
//     // freeMode: true,
//     // loop: true,
//     // centeredSlides: false,
//   },
//   464: {
//     slidesPerView: 1,
//     // freeMode: true,
//     // loop: true,
//     // centeredSlides: true,
//   },
// },
simulateTouch: true,


});

const swiper3 = new Swiper('.image-slider4', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.pagination-3',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next4',
    prevEl: '.swiper-btn-prev4',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // курсор-рука
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  mousewheel:{
    sensivity: 1,
    // eventsTarget: ".image-slider"
  },

//Автовистота
// autoHeight: true,
// autoHeight: 2,

  //К-сть слайдів для показу
// slidesPerView: 4.1,
slidesPerView: 'auto',
// slidesOffsetBefore: 84,
spaceBetween: 24,
// spaceBetween: 70,



  //Кількість прилистуючих слайдів
// slidesPerGroup: 1,

// centeredSlides: true,

  //Вільний режим(прокрутка без градації)
// freeMode: true,

autoplay: {
  delay: 1500,
},

breakpoints: {
  
  1305: {
    slidesOffsetBefore: 84,
    // freeMode: true,
    // loop: true,
    // centeredSlides: true,
  },
},
simulateTouch: true,


});

const swiper4 = new Swiper('.image-slider5', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.pagination-3',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next5',
    prevEl: '.swiper-btn-prev5',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // курсор-рука
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  mousewheel:{
    sensivity: 1,
    // eventsTarget: ".image-slider"
  },

//Автовистота
autoHeight: true,

simulateTouch: true,

  //К-сть слайдів для показу
// slidesPerView: 3.387,
slidesPerView: 'auto',

spaceBetween: 24,

  //Кількість прилистуючих слайдів
// slidesPerGroup: 1,

centeredSlides: true,

  //Вільний режим(прокрутка без градації)
// freeMode: true,

autoplay: {
  delay: 1500,
},

speed: 1500,
effect: "fade",



});

//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
// const activeBlur = document.querySelector('._active__blur');
// const body = document.querySelector('.body');
if(iconMenu){
  
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    // document.body.classList.toggle('_active__blur');
    menuBody.classList.toggle('_active');
    // menuLink.classList.remove('_active');
    
  });

  menuList.addEventListener("click", function(e){
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  });

  body.addEventListener("click", function(e){
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  });

  if(icon__menu.classList.contains('_active')){
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    // menuLink.classList.remove('_active');
  };

  // menuLink.addEventListener("click", function(e){
  //   iconMenu.classList.remove('_active')
  // })
  // if(icon__menu.classList.contains('_active')){
  //   document.body.classList.remove('_lock');
    
}

