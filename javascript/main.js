// menu humburger

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .flex .navbar");

menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});


// swiper js
var swiper = new Swiper(".couse-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
        },
        breakpoints: {
          540: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            
          },
        },
      });

var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
        },
        breakpoints: {
          540: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            
          },
        },
      });

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
        },
        breakpoints: {
          540: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            
          },
        },
      });