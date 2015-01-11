$(document).ready(function() {

	$("#dd_button").click(function() {
		if ($("#ddnav").css("top") == "-200px") {
			$("#ddnav").css("top", "70px");
		}
		else {
			$("#ddnav").css("top", "-200px");
		}
	});


	$(window).resize(function() {
		//$("#banner_wrapper span").html($(window).width());
	});
});