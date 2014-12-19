$(document).ready(function() {

	$("#nav_button").click(function() {
		if ($("#topnav").css("top") != "70px") {
			$("#topnav").animate({'top':'70px'});
		}
		else {
			$("#topnav").animate({'top':'-250px'});
		}
	});


/*
	// Loading Animation
	$("#loading_bar").animate({'width':'100%'}, 1500, "easeInExpo");
	$("#loading_bar").animate({'height':'100%', 'top':'0%'});
	$("#loading_bar").fadeOut();
	$("aside").fadeIn();
	$("aside").delay(1500).animate({'left':'0%'});
	$("main").delay(2000).animate({'right':'0%'});

*/


/*
	if ($(document).width() <= 1525) {
		$("aside #title").animate({'left':'20px'});
		$("aside #options ul li").animate({'text-indent':'50px'});
	}

	if ($(document).width() <= 1250) {
		$("aside").fadeOut();
		$("main").animate({'width':'100%'});
		/* bring down navbar 
	}

*/

	$(window).resize(function() {
		$("#wrapper1 span").html($(window).width());
/*
		// PAGE RESIZE HERE ........ ALSO GOTTA DO THIS ON PAGE LOAD

		if ($(document).width() <= 1525) {
			$("aside #title").animate({'left':'20px'});
			$("aside #options ul li").animate({'text-indent':'50px'});
		}

		if ($(document).width() <= 1250) {
			$("aside").fadeOut();
			$("main").animate({'width':'100%'});
			/* bring down navbar 
		}*/

	});

});