// 탭 메뉴
$('.btn a:first-child').click(function(){
  $('.tab1').show();
  $('.tab2').hide();
  $(this).addClass('active'); 
  $(this).siblings().removeClass('active'); 
})
$('.btn a:last-child').click(function(){
  $('.tab2').show();
  $('.tab1').hide();
  $(this).addClass('active'); 
  $(this).siblings().removeClass('active'); 
})

// 네비게이션
$('.menu li').mouseenter(function(){
  $(this).children('.sub-menu').stop().slideDown();
})
$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').stop().slideUp();
})

// 팝업창 
$('.open-modal').click(function(){
  $('.modal').fadeIn();
})
$('.close-modal').click(function(){
  $('.modal').fadeOut();
})