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

  $('.about__circle').on('click', function(){
  $('.about__circle').toggleClass('about__circle--active');
  $('.about__circle2').toggleClass('about__circle2--active');
  $('.about__up-line').toggleClass('about__up-line--active');
  $('.about__up-line2').toggleClass('about__up-line2--active');
  $('.about__text').toggleClass('about__text--active');
  $('.about__chapter-second').toggleClass('about__chapter-second--active');
  });

  $('.about__circle2').on('click', function(){
  $('.about__circle').toggleClass('about__circle--active');
  $('.about__circle2').toggleClass('about__circle2--active');
  $('.about__up-line').toggleClass('about__up-line--active');
  $('.about__up-line2').toggleClass('about__up-line2--active');
  $('.about__text').toggleClass('about__text--active');
  $('.about__chapter-second').toggleClass('about__chapter-second--active');
  });

  $(".nav__list a").on("click", function (event) {
		event.preventDefault() ;
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1100);
	});

  $window = $(window);
  $window.scroll(function () {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 110) {
      $('.header').addClass('sticky');
    }
    if ($scrollPosition >= 6900) {
      $('.team__card').addClass('active-animation');
    }
    else {
      $('.header').removeClass('sticky');
    }
  });

  $('.ressources__game-decor').marquee({
    duration: 12000,
    startVisible: true,
    duplicated: true
  });

  $('.game__metaverse-wrapper').marquee({
    duration: 12000,
    startVisible: true,
    duplicated: true,
    gap: 150
  });
});







