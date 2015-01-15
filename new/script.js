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

	var bg_size = 110;
	var intro_text_top_pos = $(window).height()/2 - $("#intro_text").height()/2;

	$("#intro_text").css("top", intro_text_top_pos + "px");

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

		$("#intro_text").css("top", intro_text_top_pos + $(document).scrollTop() + "px");
		$("#intro_text").css("opacity", ($(window).height()/2 - $("#intro_text").height()/2) / (($(window).height()/2 - $("#intro_text").height()/2) + $(document).scrollTop()));
		bg_size += 110 + ($(window).height() - 110)/100;
		//$("#main_bg").css("background-size", bg_size);
/*
		var get_intro_height = ($("#intro_text").css("top")).replace("px", "");
		var ST = $(document).scrollTop() * 0.05;
		get_intro_height -= ST;

		$("#intro_text").css("top", get_intro_height + "px");

		$("#logo a").html(get_intro_height + ", " + $(document).scrollTop());
*/
	});


});

