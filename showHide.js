///////////////////////////////////////////////////
// ShowHide plugin                               
// Author: Ashley Ford - http://papermashup.com
// Demo: Tutorial - http://papermashup.com/jquery-show-hide-plugin
// Built: 19th August 2011                                     
///////////////////////////////////////////////////

(function ($) {
    $.fn.showHide = function (options) {

		//default vars for the plugin
        var defaults = {
            speed: 1000,
			easing: '',
			changeText: 1,
			showText: 'Show',
			hideText: 'Hide'
			
        };
        var options = $.extend(defaults, options);

        $(this).click(function () {	
           
             $('.toggleDiv').fadeOut(options.speed, options.easing);

             var toggleClick = $(this);
		     var toggleDiv = $(this).attr('rel');

			$(toggleDiv).delay(options.speed).fadeIn(options.speed, options.easing, function() {
				// this only fires once the animation is completed
				if(options.changeText==1){
					$(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
				}
			});
		  return false;
        });

    };
})(jQuery);

$(document).ready(function(){
   $('.show_hide').showHide({			 
		speed: 200,
		easing: '',
		changeText: 1,
		showText: 'View',
		hideText: ''
	});
});