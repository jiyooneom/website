$(function() { 
	
	$(window).scroll(function() { 
		var winSctop = $(window).scrollTop();
		var distance = $(window).height();
		console.log(distance);
		if(winSctop > distance) { 
			$("header").addClass("fixed");
		} else { 
			$("header").removeClass("fixed");
		}
	})
	
	var _trigger = $('.section_3 .cont_t2 .btn .icons li > a');
	
	_trigger.on("click", function() { 
		var _this = $(this);
		var _thispt = _this.parent();
		var _thisptIndex = _thispt.index();
		$('.section_3 .cont_t2 .btn .icons > li').removeClass("on");
		_thispt.addClass("on");
		
		$('.section_3 .cont_t2 .capsule .cont').hide();
		$('.section_3 .cont_t2 .capsule .cont').eq(_thisptIndex).css('display', 'flex');
		
		switch(_thisptIndex) {
			case 0 :
				$('.section_3 .cont_t2 .btn .icon_bar span').css('left','82px');
				break;
			case 1 :
				$('.section_3 .cont_t2 .btn .icon_bar span').css('left','265px');
				break;				
		}
		
		
		
	});
	
	  $(window).scroll(function(){
        
        var sct = $(window).scrollTop();
        var sec_3 = $('.section_3').height();
        
//        console.log(sct)
//        console.log(sec_3)
//        
        
        if(sct >= sec_3){
            $('.section_3 .icon_box1').delay(800).animate({
                top: '-12%',
                opacity: 1
            })
        }
        
        
    });
});