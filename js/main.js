// Carousel Control

const slider = document.getElementById('slider');
const carouselBtn = document.querySelectorAll('.carousel-btn');
const sliderItem = document.querySelector('#slider > div');
let carouselScroll = sliderItem.clientWidth;

const scrollCarousel = (btn) => {
  btn.classList.toggle('bg-brightRed');
};

slider.addEventListener('scroll', () => {
  let sliderItemWidth = sliderItem.clientWidth + 32;

  const itemWidth = (x) => {
    return sliderItemWidth * x;
  };
  carouselBtn.forEach((cr) => {
    cr.classList.remove('bg-brightRed');
  });

  slider.scrollLeft < itemWidth(1) && scrollCarousel(carouselBtn[0]);
  (slider.scrollLeft >= itemWidth(1)) & (slider.scrollLeft < itemWidth(2)) &&
    scrollCarousel(carouselBtn[1]);
  (slider.scrollLeft >= itemWidth(2)) & (slider.scrollLeft < itemWidth(3)) &&
    scrollCarousel(carouselBtn[2]);
  slider.scrollLeft >= itemWidth(3) && scrollCarousel(carouselBtn[3]);
});

carouselBtn.forEach((cr, i) => {
  cr.addEventListener('click', () => {
    slider.scrollTo(carouselScroll * i, 00);
  });
});

//
// Mobile Menu control

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

//
// Email form control
const emailForm = document.getElementById('email-form');

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Email sent successfully');
});
