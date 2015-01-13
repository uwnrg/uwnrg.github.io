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

	$(window).resize(function() {
		$("footer").css("top", $("header").height() + $("#img_banner").height() + $("main").height() + "px");
		//$("#logo a").html($("main").height() + ", " +$("#img_banner").height() + ", " + $("header").height());	
	})
});