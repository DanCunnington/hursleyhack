$(document).ready(function() {

	$("button.signup").click(function() {
		window.open('https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=f737c663-974c-4b8d-92ab-51df9c97767b#fullpageWidgetId=W408e59db464d_42d5_9720_790c1e0e5d69&eventInstUuid=6a9a718e-2c40-4c4d-88a3-b604d38c98d4');
	});

	$("ul.nav li").click(function() {
		var id = $(this).attr("rel");
		 $('.content').animate({
	        scrollTop: $("#"+id).offset().top
	    }, 1000);
	});

});





