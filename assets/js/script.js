$(function(){

  $('.dropdown').mouseenter(function(){
		$(this).find('.dropdown-menu').addClass('active');
	});

  $('.dropdown').mouseleave(function(){
    $(this).find('.dropdown-menu').removeClass('active');
  });

  $('.btn.btn-gray').mouseenter(function(){
    document.getElementById("overlay").style.display = "block";
  })

  
  $('.btn.btn-gray').mouseleave(function(){
    document.getElementById("overlay").style.display = "none";
  })

  

  

})



