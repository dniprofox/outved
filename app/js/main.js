$(function(){

  $('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });
  // sticky-header
  $(".head-navbar").removeClass("default");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $(".head-navbar").addClass("default").fadeIn('fast');
    } else {
      $(".head-navbar").removeClass("default").fadeIn('fast');
    };
  });    

  ////header__slider////////
  $('.header__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true   
  });
  ////country-slider////////
  $('.country-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="icon-angle-left"></span>',
    nextArrow: '<span class="icon-angle-right"></span>',
    asNavFor: '.country__nav',
    dots: false
   
  });
  $('.country__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.country-slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  
  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });
  /////////////////input//////////////
  $('input, button, select').styler();

  // sticky-header
  $(".head-navbar").removeClass("default");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $(".head-navbar").addClass("default").fadeIn('fast');
    } else {
      $(".head-navbar").removeClass("default").fadeIn('fast');
    };
  });    

  
});