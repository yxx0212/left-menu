
$(document).ready(function(){
	//一级菜单的点击事件
	$(".nav-a").on("click",function(){
		/*$(this).next().slideToggle();*/
		$(this).parents("ul.nav-ul").find('li.active').removeClass('active');
		$(this).parent("li").addClass('active');
		$(this).parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec');
		console.log('使用webpack打包');
	});

	//二级菜单点击事件
	$(".item>a").on("click",function(){
		/*$(this).prev("span").addClass('doc').parents("li").siblings().find("span").removeClass('doc');*/
		$(this).parents("ul.nav-ul").find('li.active').removeClass('active');
		$(this).parents("li").addClass('active');
		
		$(this).parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec');
		$(this).parent("li.item").addClass('active-sec');
		console.log('设置运行的快捷键');

	});

	$(".sec").on("click",function(){
		$(this).next().slideToggle();
		$(this).toggleClass('click-span');
	})
})