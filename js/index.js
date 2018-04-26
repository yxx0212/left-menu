$(document).ready(function(){
	//一级菜单的点击事件
	$(".nav-a").on("click",function(){
		$(this).next().slideToggle();
		$(this).parent(".nav-li").toggleClass('active-li');
	});

	//二级菜单点击事件
	$(".item>a").on("click",function(){
		/*$(this).prev("span").addClass('doc').parents("li").siblings().find("span").removeClass('doc');*/
		
		$(this).parents("ul.nav").find('li.active').removeClass('active');
		$(this).parent("li.item").addClass('active');
		$(this).parents("ul.nav").find("li.spc").removeClass('spc');
		$(this).parents("li.nav-li").addClass('spc');
	});
})