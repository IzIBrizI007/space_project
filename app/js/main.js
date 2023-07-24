$(function () {

  $('.team__card').on('click', function(){
  $('.team__card').removeClass('team__card--active');
  $(this).addClass('team__card--active');
  });

  $('.questions__item').on('click', function(){
  $('.questions__item').removeClass('questions__item--active'); 
  $(this).addClass('questions__item--active');
  });

  $('.burger').on('click', function(){
  $('.burger__lines').toggleClass('burger__lines--active');
  $('.hero__inner').toggleClass('hero__inner--hidden');
  $('.nav__list').toggleClass('nav__list--hidden');
  $('body').toggleClass('lock');
  });
  
});







