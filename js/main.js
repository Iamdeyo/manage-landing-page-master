const slider = document.getElementById('slider');
const carouselBtn = document.querySelectorAll('.carousel-btn');
const sliderItem = document.querySelector('#slider > div');
let carouselScroll = sliderItem.clientWidth;
// console.log(slider.scrollWidth);
// console.log(slider.offsetWidth);
// slider.addEventListener('click', () => {
//   //   console.log(slider1.getBoundingClientRect().left);
//   console.log(slider.scrollLeft);
//   //   console.log(slider.childElementCount);
// });

// test.addEventListener('click', () => {
//   slider.scrollTo(500, 00);
//   console.log(slider.scrollLeft);

//   console.log('clicked');
// });

const scrollCarousel = () => {
  carouselBtn.forEach((cr, i) => {
    // console.log(i);
    // const removeClass = () => {
    //   cr.classList.remove('bg-brightRed');
    //   cr.classList.add('bg-brightRed');

    //   console.log(1);
    // };

    slider.addEventListener('click', () => {
      //   console.log(slider.scrollLeft);
      //   console.log(carouselScroll * i + 16 + '-----');
      if (slider.scrollLeft === carouselScroll * i) {
        // console.log(cr);
      }
    });

    cr.addEventListener('click', () => {
      slider.scrollTo(carouselScroll * i, 00);
    });
  });
};
scrollCarousel();

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('#mobile-menu > div');
const body = document.querySelector('body');

window.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  body.classList.remove('active');
  mobileMenu.classList.remove('active');
});
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('active');
});
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Email form control
const emailForm = document.getElementById('email-form');

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Email sent successfully');
});
