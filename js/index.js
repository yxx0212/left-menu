function first_level(event){
	var obj=$(event.currentTarget);
	obj.parents("div.list").siblings().find('div.active').removeClass('active');
	obj.parent("div.first").addClass('active');
	obj.parents("div.menu-list").find("a.active-sec").removeClass('active-sec'); //选中一级菜单将二级菜单样式去除

	obj.parent().next().toggle(100);
	obj.next().toggleClass('click-span');
}

function second_level(event){
	var obj=$(event.currentTarget);
	obj.parents("div.menu-list").find("a.active-sec").removeClass('active-sec');
	obj.addClass('active-sec');
	obj.parents("div.menu-list").find("div.active").removeClass('active');
	obj.parent("div.second").parent("div.list").find("div.first").addClass('active');
}

function sec(event){
	var obj=$(event.currentTarget);
	event.stopPropagation();
	obj.parent().next().slideToggle();
	obj.toggleClass('click-span');
}

$(document).ready(function(){
	$(".item").on("click",first_level);
	$(".second>a").on("click",second_level);

	var flag2=$(".active");
	if(flag2.find(".sec").length>0){
		flag2.next().show();
		$("span.sec").addClass('click-span');
	}

})