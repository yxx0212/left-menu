
$(document).ready(function(){
	//一级菜单的点击事件
	$(".nav-a").on("click",function(){
		/*$(this).next().slideToggle();*/
		$(this).parents("ul.nav-ul").find('li.active').removeClass('active');
		$(this).parent("li").addClass('active');
		$(this).parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec');
	});

	//二级菜单点击事件
	$(".item>a").on("click",function(){
		/*$(this).prev("span").addClass('doc').parents("li").siblings().find("span").removeClass('doc');*/
		$(this).parents("ul.nav-ul").find('li.active').removeClass('active');
		$(this).parents("ul").prev("li").addClass('active');
		
		$(this).parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec');
		$(this).parent("li.item").addClass('active-sec');

	});

	$(".sec").on("click",function(){
		$(this).parent('li').next().slideToggle();
		$(this).toggleClass('click-span');
	});

})