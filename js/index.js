function first_level(event){
	var obj=$(event.currentTarget);
	obj.parents("ul.nav-ul").find('li.active').removeClass('active');
	obj.parent("li").addClass('active');
	obj.parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec'); //选中一级菜单将二级菜单样式去除
}

function second_level(event){
	var obj=$(event.currentTarget);
	obj.parents("ul.nav-ul").find('li.active').removeClass('active'); //选中二级菜单，将同一级菜单添加选中样式
	obj.parents("ul").prev("li").addClass('active');
	
	obj.parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec');
	obj.parent("li.item").addClass('active-sec');
}

function sec(event){
	var obj=$(event.currentTarget);
	obj.parent('li').next().slideToggle();
	obj.toggleClass('click-span');
}

$(document).ready(function(){
	/*//一级菜单的点击事件
	$(".nav-a").on("click",function(){
		$(this).parents("ul.nav-ul").find('li.active').removeClass('active');
		$(this).parent("li").addClass('active');
		$(this).parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec'); //选中一级菜单将二级菜单样式去除
	});

	//二级菜单点击事件
	$(".item>a").on("click",function(){
		$(this).parents("ul.nav-ul").find('li.active').removeClass('active'); //选中二级菜单，将同一级菜单添加选中样式
		$(this).parents("ul").prev("li").addClass('active');
		
		$(this).parents("ul.nav-ul").find('li.active-sec').removeClass('active-sec');
		$(this).parent("li.item").addClass('active-sec');

	});

	$(".sec").on("click",function(){
		$(this).parent('li').next().slideToggle();
		$(this).toggleClass('click-span');
	});*/

	$(".nav-a").on("click",first_level);
	$(".item>a").on("click",second_level);
	$(".sec").on("click",sec);

})