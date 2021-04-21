$(function(){

 $('.features').mouseenter(function(){
   $('.dropdown-menu').addClass('active');
 })
 $('.features').mouseleave(function(){
  $('.dropdown-menu').removeClass('active');
 })

 $('.plans').mouseenter(function(){
  $('.dropdown-menu-small').addClass('active');
})
$('.plans').mouseleave(function(){
 $('.dropdown-menu-small').removeClass('active');
})


})



