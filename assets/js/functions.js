// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	// your functions go here

});


$(window).load(function() {

	// Flexslider

	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		useCSS: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});

});

$(window).resize(function() {
	
});