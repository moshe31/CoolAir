// Aos_animation
AOS.init();

// Covid FadeOut
$(".cross").click(function () {
  $(".covid__wrap").fadeOut();
});
// Covide popup
$("#close").click(function () {
  $(".covid__alert").fadeOut();
});
// Banner Slider
$('.single__item').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  pauseOnHover: true,
  fade: true,
  responsive: [{
    breakpoint: 992,
    settings: {}
  }]
});

// Brand Slider

$('.product__slider').slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  pauseOnHover: true,
  fade: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  }],
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
    }
  }]
});

// client__slider

$('.client__slider').slick({
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  pauseOnHover: true,
  fade: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
    }
  }],
  responsive: [{
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
    }
  }],
  responsive: [{
    breakpoint: 414,
    settings: {
      slidesToShow: 1,
    }
  }]
});

// add class on scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 500) {
    //clearHeader, not clearheader - caps H
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
}); //missing );

// Jump to Top
$(document).ready(function () {
  $('.go-top').hide(0)

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(300);
    }
  });
  $('.go-top').click(function () {
    event.preventDefault();

    $('html , body').animate({
      scrollTop: 0
    }, 1000);
  });
});