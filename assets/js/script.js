$(function(){

  $('.dropdown').mouseenter(function(){
		$(this).find('.dropdown-menu').addClass('active');
	});

  $('.dropdown').mouseleave(function(){
    $(this).find('.dropdown-menu').removeClass('active');
  })

  

})



