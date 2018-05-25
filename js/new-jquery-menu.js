;(function($){
	var Menu=function(options){

	}

	Menu.DEFAULT={
		toggleTemplate:'<i class="list-toggle fas fa-chevron-right"></i>'
	};

/*	Menu.prototype.getOptions=function(options){
		this.options=$.extend({},Menu.DEFAULT,options);
	};
*/
	Menu.prototype._init=function(){
		
	}

	$.fn.menu=function(options){
		return this.each(function(){
			var _this=$(this);
			var $li=_this.find(">li");
			for(let i=0;i<$li.length;i++){
				if($li.eq(i).find("ul").length>0){
					$li.eq(i).addClass('has-list');
					$li.eq(i).prepend(Menu.DEFAULT.toggleTemplate);
				}
			}

			_this.on("click",".has-list>a",function(e){
				e.preventDefault();
				$(this).next().toggle();
				$(this).parent('.has-list').toggleClass('open');
			});

			_this.on("click",".has-list>ul>li>a",function(e){
				e.preventDefault();
				$("li.active").removeClass('active');
				$(this).closest('li.has-list').addClass('active');

				$("li.second-active").removeClass('second-active');
				$(this).closest("li").addClass('second-active');
			});

			_this.on("click",">li>a",function(){
				$("li.second-active").removeClass('second-active');
			});
			
		});
	};

	$(function(){
		$(".menu-list").menu();
	});
})(jQuery);