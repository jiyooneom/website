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
	});
	
		
	
	

	

	
	

});

	var lypop = function(e, _this) { 
   e.preventDefault();
   var _this = $(_this);
   var _thisDataNum = _this.attr("data-num");
   
   var _origin = $(document).find(".lypop");
	 _origin.removeClass("horzn");	
	_origin.removeClass("small");
   console.log(_thisDataNum);		

		
   if(_thisDataNum == 5 || _thisDataNum == 6) { 
   		_origin.addClass("small");
   } else if(_thisDataNum == 7) { 
   		_origin.addClass("horzn");
   } 
  
   		
   
   
   
   _origin.addClass("on");
   $('body').css('overflow','hidden');
   
   _origin.find(".lypopcont .simg img").attr("src", "img/detailview0" + _thisDataNum +".jpg");
   
   
};

var lypopClose = function(e, _this) { 
   e.preventDefault();
   var _this = $(_this);
   var _origin = $(document).find(".lypop");      
   _origin.removeClass("on");
   $('body').removeAttr('style');      
};
//pop-up
