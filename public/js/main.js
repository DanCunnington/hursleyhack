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

	var deadline = 'February 7 2016 23:59:59 GMT+00:00';
	initializeClock(deadline);



});


function initializeClock(endtime){
  //var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    // clock.innerHTML = t.days + ' Days  ' +
    //                   t.hours + ' Hours  ' +
    //                   t.minutes + ' Minutes  ' +
    //                   t.seconds + ' Seconds  ';


    $("#days").html(t.days);                 
    $("#hours").html(t.hours);                 
    $("#minutes").html(t.minutes);                 
    $("#seconds").html(t.seconds);
    $("h4.clock").show();                

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}


