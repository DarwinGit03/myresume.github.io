
//slidesPerView: 2, slidesPerGroup: 2, if you want to less the column change the number here
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3, 
//     spaceBetween: 25, //This code is the space between the div
//     // slidesPerGroup: 3, ----- removing this will make the slides per div
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     gragcursor: 'true',
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination", //pagination can change depending on the element you input
//       clickable: true,
//       dynamicBullets: true, //it made the bullets much better than before.
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // This line of code can make the div responsive once it open to phone
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });







// Code was expand
// .slide-content is element (name) found in html 
var swiper = new Swiper(".slide-content", { 
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // it use to divide the div in the slider or how many division in the slider
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });



// This code below is copied to swiperjs.com (built in code)
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });