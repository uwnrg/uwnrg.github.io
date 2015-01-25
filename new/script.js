$(document).ready(function() {
	// animation for the loading screen
	
	/*$("#loading_bar").animate({
		'width' : '15%'
	}, 2500);*/

	//$("#loading_screen").delay(4000).animate({'height':'0px', 'opacity':'0'}, 500);
	$("#loading_screen").delay(4000).fadeOut(1000);
	/*$("#loading_screen").delay(6000).fadeOut();*/

	$("#f_o_more_button").click(function() {
		window.location = "posts.html";
	});








/*

main #robots_section #emma span {
	top: 210px;
	width: 250px;
	color: #FFF;
	font-family: gotham;
	font-size: 25px;
	font-weight: bold;
}

main #robots_section #robots_list ul li:hover span {
	top: 0px;
	height: 250px;
	line-height: 250px;
	color: #2F78B9;
}

*/
	// when the robots are clicked
	$("#michelle").click(function() {
		$("#dark_page").fadeIn("fast");
		$(".hidden_info").fadeIn("fast");
		$("#michelle span").css("z-index", "2001");
		$("#michelle span").css("top", "-100px");
		$("#michelle span").css("width", "550px");
		$("#michelle span").css("height", "350px");
		$("#michelle span").css("background", "white");
		$("#michelle span").css("line-height", "auto");
		$("#michelle span").css("box-shadow", "0px 0px 50px #333");
		$("#michelle span").text("");
		// when clicking on the dark region, the robot info box disappears
		$("#dark_page").click(function() {
			$(".hidden_info").fadeOut("fast");
			$("#dark_page").fadeOut("fast");
			$("#michelle span").css("z-index", "2001");
			$("#michelle span").css("top", "210px");
			$("#michelle span").css("width", "250px");
			$("#michelle span").css("height", "40px");
			$("#michelle span").css("background", "#333");
			$("#michelle span").css("line-height", "40px");
			$("#michelle span").css("box-shadow", "none");
			$("#michelle span").text("Michelle");	
		});
	});

	$(document).scroll(function() {
		if ($(document).scrollTop() - 50 >= 0) {
			$("#front").css("position", "fixed");
			$("#front").css("top", "0px");
			$("#front").css("background", "#222");
		}
		else {
			$("#front").css("position", "absolute");
			$("#front").css("top", "50px");
			$("#front").css("background", "transparent");
		}

		//$("#who_are_we").css("top", ($("#who_are_we").css("top")).replace("px","") + $(document).scrollTop()*1.1 + "px");
		//var intro_text_top_pos = $(window).height()/2 - 100;
		//$("#who_are_we").css("top", intro_text_top_pos + $(document).scrollTop()*0.2 + "px");
		//$("#who_are_we").css("top")

		/*$("#who_are_we").css("top", intro_text_top_pos + $(document).scrollTop()*0.2 + "px");
		$("#who_are_we").css("opacity", ($(window).height()/2 - $("#who_are_we").height()/2) / (($(window).height()/2 - $("#who_are_we").height()/2) + $(document).scrollTop()));
		*/
		//$("main").css("opacity", $(document).scrollTop()/350);
		//$("#main_bg").css("background-size", bg_size);
/*
		var get_intro_height = ($("#intro_text").css("top")).replace("px", "");
		var ST = $(document).scrollTop() * 0.05;
		get_intro_height -= ST;

		$("#intro_text").css("top", get_intro_height + "px");

		$("#logo a").html(get_intro_height + ", " + $(document).scrollTop());
*/
	});

	var post_list = document.getElementById('all_posts').getElementsByTagName("li");
	$(".post_title").click(function(event) {
		var post_id = jQuery(this).attr("id");
		$("#" + post_id + "_view").fadeIn();
		$("#" + post_id + "_view #" + post_id + "_view_title").html($("#" + post_id).text());
		$("#" + post_id + "_view #" + post_id + "_view_date").html($("#" + post_id + "_date").text());
	});

	$(".post_view #close_button").click(function() {
		for (var each_post = 1; each_post < post_list.length; each_post++) {
			if ($("#post" + each_post + "_view").css("display") == "block") {
				$("#post" + each_post + "_view").fadeOut();	
			}
		}
	});

	// closing the post view section when the 'esc' key is pressed
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			for (var each_post = 1; each_post < post_list.length; each_post++) {
				if ($("#post" + each_post + "_view").css("display") == "block") {
					$("#post" + each_post + "_view").fadeOut();	
				}
			}
		}
	});




});


