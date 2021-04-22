$(function(){

  $('.dropdown').mouseenter(function(){
		$(this).find('.dropdown-menu').addClass('active');
	});

  $('.dropdown').mouseleave(function(){
    $(this).find('.dropdown-menu').removeClass('active');
  });

  

  $('.btn.btn-gray').mouseenter(function(){
    $('.sign-in').addClass('overlay');
  })

  
  $('.btn.btn-gray').mouseleave(function(){
    $('.sign-in').removeClass('overlay');
  })

  

  

})



