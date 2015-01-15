$(document).ready(function() {

	// animation for the loading screen
	
	$("#loading_bar").animate({
		'width' : '100%'
	}, 2500);

	$("#loading_screen").delay(2500).fadeOut();


	// when the navigation button is pressed in mobile view
	$("#dd_button").click(function() {
		if ($("#ddnav").css("top") == "-200px") {
			$("#ddnav").css("top", "70px");
		}
		else {
			$("#ddnav").css("top", "-200px");
		}
	});

	$("footer").css("top", $(window).height()*0.8 + $("main").height() + "px");

	//$("#logo a").html($(window).height() + ", " + $("main").height());

	$(window).resize(function() {
		$("footer").css("top", $("header").height() + $("#img_banner").height() + $("main").height() + "px");
		//$("#logo a").html($("main").height() + ", " +$("#img_banner").height() + ", " + $("header").height());	
	});

	$(document).scroll(function() {
		if ($(document).scrollTop() - 50 >= 0) {
			$("header").css("position", "fixed");
			$("header").css("top", "0px");
			$("header").css("background", "#222");
		}
		else {
			$("header").css("position", "absolute");
			$("header").css("top", "50px");
			$("header").css("background", "transparent");
		}
//		$("#logo a").html($(document).scrollTop());
	});


});

