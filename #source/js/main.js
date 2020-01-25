$('.header__burger').on('click',function(event) {
   if ($(this).is(event.target)) {
	   $('.header__burger').find('span').removeClass('active');
	   $('.mobile').fadeOut('slow'); 
   } else {
	   $('.header__burger').find('span').addClass('active');
	   $('.mobile').fadeIn('slow');
   }
});