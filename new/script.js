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

	//$("#logo a").html($("main").height() + ", " +$("#img_banner").height() + ", " + $("header").height());	


	$("footer").css("top", $("#img_banner").height() + $("main").height() - 96 + "px");

/*
	$("#post_title").html($("#img_banner").css("height"));
	$("footer").css("top", $("main").height() + "px");*/

	$(window).resize(function() {
		$("footer").css("top", $("header").height() + $("#img_banner").height() + $("main").height() + "px");
		$("#logo a").html($("main").height() + ", " +$("#img_banner").height() + ", " + $("header").height());	
	})

/*
	$(window).resize(function() {
		//$("#banner_wrapper span").html($(window).width());
		$("#post_title").html($(window).width());
		$("footer").css("top", 70 + $("#img_banner").height() + $("main").height() + "px");
		if ($(window).width() > 475 && $(window).width() < 840) {
			$("main").css("background-color", "red");
		}
		else {
			$("main").css("background-color", "#CCC");
		}	
	});*/
});