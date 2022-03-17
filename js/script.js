let bars_ = document.querySelector(".bars_");
let searsh_ = document.querySelector(".search_");
let nav_ = document.querySelector("nav");
let close_ = document.querySelector(".close_");
let toggle_ = document.querySelector(".toggle_");


bars_.addEventListener("click", function(){
    nav_.classList.add("open_");
});
close_.addEventListener("click", function(){
  nav_.classList.remove("open_");
});

$(document).ready(function(){
  searsh_.addEventListener("click", function(){
    $(".searsh_parant").slideToggle("500");
    toggle_.classList.toggle("la-times")
  })
  // ~~~~~~~~~~start slider~~~~~~~~
$('.slider .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

// ~~~~~~~~~~start testimonials~~~~~~~~
$('.testimonials .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
// ~~~~~~~~~~start products~~~~~~~~~~

})

new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.8s');