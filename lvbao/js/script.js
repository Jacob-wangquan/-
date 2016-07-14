$(function(){	
		   
	//设计案例切换
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(800).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.case .title-list .p_x').stop(false,true).animate({'left' : liindex * liWidth + 'px'},800);
		$('.case .title-list b').stop(false,true).animate({'left' : liindex * liWidth + 'px'},800);
	});
});