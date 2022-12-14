# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github link](https://github.com/Iamdeyo/manage-landing-page-master)
- Live Site URL: [live site URL](https://genuine-sfogliatella-da1e46.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - CSS library

### What I learned

I learnt tailwindCSS and a Swiper carousel

This is the js code am proud of

```js
carouselBtn.forEach((cr, i) => {
  cr.addEventListener('click', () => {
    slider.scrollTo(carouselScroll * i, 00);
  });
});
```

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - This helped me with tailwind CSS.

## Author

- Website - [https://ademolataiwo.netlify.app/](https://ademolataiwo.netlify.app/)
- Frontend Mentor - [@Iamdeyo](https://www.frontendmentor.io/profile/Iamdeyo)
- Twitter - [@AyomidTaiwo](https://www.twitter.com/ayomidtaiwo)
