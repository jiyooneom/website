$(function() { 
	$(window).scroll(function() { 
		var yoffset = $('html, body').scrollTop();
		var infoOffsetTop = $('.page.info').offset().top;
		if(yoffset > infoOffsetTop) { 
			$('.hashset .copy').addClass("on");
		} else { 
			$('.hashset .copy').removeClass("on");
		}
	});
	
	$(".menu > li > a").on("click", function() { 
		var _this = $(this);
		var _thispt	= _this.parent();
		var _thisptIndex = _thispt.index();
		
		var _targetOffset = $(".page").eq(_thisptIndex).offset().top;
		console.log(_targetOffset);
		
		$("html, body").animate({"scrollTop" : _targetOffset});
		
		
		for(var i = 1; i <= $(".menu > li").length; i++) { 
			$("header").removeClass("ty" + i);
		}
		
		
		switch(_thisptIndex) { 
			case 0 :
				$("header").addClass("ty1");
				break;
			case 1 :
				$("header").addClass("ty2");
				break;
			case 2 :
				$("header").addClass("ty3");
				break;	
			case 3 :
				$("header").addClass("ty4");
				break;	
				
		}
		
	});
	
	$(".logo .hd1 > a").on("click", function() { 
		for(var i = 1; i <= $(".menu > li").length; i++) { 
			$("header").removeClass("ty" + i);
		}		
		$("header").addClass("ty1");
		$("html, body").animate({"scrollTop" : 0});
	})

});
