/*!
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const items = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  let index = 0;

  function updateCarousel() {
    const width = items[0].clientWidth;
    track.style.transform = `translateX(${-index * width}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  });
});

new Splide('#image-carousel', {
    heightRatio: 0.5, // Adjusts height based on width
}).mount();

