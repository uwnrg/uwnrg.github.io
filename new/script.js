$(document).ready(function() {

	// when the navigation button is pressed in mobile view
	$("#dd_button").click(function() {
		if ($("#ddnav").css("top") == "-200px") {
			$("#ddnav").css("top", "70px");
		}
		else {
			$("#ddnav").css("top", "-200px");
		}
	});

	$("footer").css("top", $("#img_banner").height() + $("main").height() - 96 + "px");

	$(window).resize(function() {
		$("footer").css("top", $("header").height() + $("#img_banner").height() + $("main").height() + "px");
		//$("#logo a").html($("main").height() + ", " +$("#img_banner").height() + ", " + $("header").height());	
	})
});