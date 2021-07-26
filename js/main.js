var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    /* effect: 'cube', */
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-navbar");

var sticky = navbar.offsetTop;

function myFunction(){
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


