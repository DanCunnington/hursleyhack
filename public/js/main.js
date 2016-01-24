$(document).ready(function() {

	$("button.signup").click(function() {
		window.open('https://docs.google.com/forms/d/1LEo1B0uLuzGq5C3JfFNxtwxZGLIGRFaYbiHUagVCCl8/viewform');
	});

	$("button.team-signup").click(function() {
		window.open('https://docs.google.com/forms/d/1Qlz7KJFmb1WuH-y_Iq5sus0-wJOqPlE_kUyPvhMyVBQ/viewform');
	});

	$("ul.nav li").click(function() {
		var id = $(this).attr("rel");
		 $('.content').animate({
	        scrollTop: $("#"+id).offset().top
	    }, 1000);
	});

});





