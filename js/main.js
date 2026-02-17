// slick slider -------------------------------------------------------------------------------->

$(document).ready(function () {
  $('.img_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 500,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  window.addEventListener("load", () => {
    AOS.init({
        duration: 1000,
        offset: 100,
    });
});
  

});




// header responsive toggle class jquery start-------------------------------------------------------------------------------->

$(document).ready(function () {
  $('.hamberger').click(function () {
    $(".menu").toggleClass("active");
  });
});

// header responsive toggle class jquery end-------------------------------------------------------------------------------- >



$(document).ready(function(){
  $('#exampleModal').modal('show');
}); 


// header sticky start------------------------------------------------------------------------>

const header = document.querySelector(".header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});






// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


// popup form start============================

function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('.btnOpenForm').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('.btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  
  
  });


// 

  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 63,
      max: 150,
      values: [ 63, 250 ],
      slide: function( event, ui ) {
      $( "#amount" ).val( "₹" + ui.values[ 0 ] + " - ₹" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "₹" + $( "#slider-range" ).slider( "values", 0 ) +
      " - ₹" + $( "#slider-range" ).slider( "values", 1 ) );
  });



// dropdwon
//dropdown on  click //
$(".dropdown_click .selected").on('click', function() {
  $(".dropdown_click .drop-content ul").slideToggle();
});

$(".dropdown_click .drop-content ul li span").on('click', function() {
  // var bindText = $(this).html();
  $(".dropdown_click .selected  span").html($(this).html());
  $(".dropdown_click .drop-content ul").slideUp();
}); 

//dropdown on  hover //
$(".dropdown_hover ").on({
  mouseenter: function () {
     $(".drop-content .drop-hover").slideDown();
  },
  mouseleave: function () {
     $(".drop-content .drop-hover").slideUp();
  }
});

$(".dropdown_hover .drop-content .drop-hover li span").on('click', function() {
  $(".dropdown_hover .selected  span").html($(this).html());
  $(".dropdown_hover .drop-content .drop-hover").slideUp();
}); 

$(document).bind('click', function(e) {
  var $clickhide = $(e.target);
  if (! $clickhide.parents().hasClass("dropdown_c"))
      $(".dropdown_c .drop-content ul").slideUp();
});




  

// scrool btn start


$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });
  
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});



// header responcive 

  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
 
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  let jsuArrow = document.querySelector(".jsu-arrow");
  jsuArrow.onclick = function() {
   navLinks.classList.toggle("show4");
  }
  



