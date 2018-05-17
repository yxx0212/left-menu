(function($){
	$.fn.menuPlugin=function(options){
		var DEFAULTS={
			firstActive:'active',
			secondActive:'active-sec',
			spanClick:'click-span',
		}
		var TEMPLATE=`<div class="list">
						<div class="first">
							<a href="#" class="item"><i class="icon icon-sitemap"></i>课程体系</a>
						</div>
					 </div>
					 <div class="list">
						<div class="first">
							<a href="#" class="item">
								<i class="fa fa-tasks fa-sw"></i>课程
							</a>
							<span class="sec"><i class="fa fa-chevron-right"></i></span>
						</div>
						<div class="second">
							<a href="#">课程类别</a>
							<a href="#">课程类别</a>
						</div>
					</div>
					<div class="list">
						<div class="first">
							<a href="#" class="item"><i class="fa fa-file-text-o fa-sw"></i>习题</a>
						</div>
					</div>
					<div class="list">
						<div class="first">
							<a href="#" class="item"><i class="fa fa-user fa-sw"></i>教师</a>
						</div>
					</div>
					<div class="list">
						<div class="first">
							<a href="#" class="item"><i class="fa fa-bar-chart-o fa-sw"></i>统计</a>
						</div>
					</div>
					<div class="list">
						<div class="first">
							<a href="#" class="item">
								<i class="fa fa-calendar"></i>其他
							</a>
							<span class="sec"><i class="fa fa-chevron-right"></i></span>
						</div>
						<div class="second">
							<a href="#">苹果苹果 </a>
							<a href="#">香蕉香蕉</a>
							<a href="#">香蕉香蕉香蕉香</a>
						</div>
					</div>`;

		var menu={
			firstLevel:function(){
				var obj=$(event.currentTarget);
				obj.parents("div").siblings().find("div."+DEFAULTS.firstActive).removeClass(DEFAULTS.firstActive);
				obj.parent("div.first").addClass(DEFAULTS.firstActive);
				obj.parents("div.menu-list").find("a."+DEFAULTS.secondActive).removeClass(DEFAULTS.secondActive); //选中一级菜单将二级菜单样式去除
			},
			secondLevel:function(){
				var obj=$(event.currentTarget);
				obj.parents("div.menu-list").find("a."+DEFAULTS.secondActive).removeClass(DEFAULTS.secondActive);
				obj.addClass(DEFAULTS.secondActive);
				obj.parents("div.menu-list").find("div."+DEFAULTS.firstActive).removeClass(DEFAULTS.firstActive);
				obj.parent("div.second").parent("div").find("div.first").addClass(DEFAULTS.firstActive);
				
			},
			sec:function(event){
				event.stopPropagation();
				var obj=$(event.currentTarget);
				obj.parent().next().slideToggle();
				obj.toggleClass(DEFAULTS.spanClick);
				
			}
		}


		return this.each(function(){
			var $this=$(this);
			$this.append(TEMPLATE);
			$(".item").on("click",menu.firstLevel);
			$(".second>a").on("click",menu.secondLevel);
			$(".sec").on("click",menu.sec);
		})
	}
})(jQuery)