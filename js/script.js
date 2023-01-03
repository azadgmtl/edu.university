var navbar = document.querySelector('.header .navbar-nav');

var menu = document.querySelector('#menu_bars');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


var swiper = new Swiper(".home_slider", 
{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: 
    {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});








var swiper = new Swiper(".review_slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });




 window.onscroll = () =>
{
  if(window.scrollY > 70)
  {
    document.querySelector('#top_scroll').classList.add('active');
  }
  else
  {
    document.querySelector('#top_scroll').classList.remove('active');
  }
}