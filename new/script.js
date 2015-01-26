$(document).ready(function() {
	// animation for the loading screen
	
	$("#loading_bar").animate({
		'width' : '100%'
	}, 4000);

	//$("#loading_screen").delay(4000).animate({'height':'0px', 'opacity':'0'}, 500);
	$("#loading_screen").delay(4000).fadeOut(1000);
	/*$("#loading_screen").delay(6000).fadeOut();*/

	$("#f_o_more_button").click(function() {
		window.location = "posts.html";
	});

	function close_all() {
		$("#michelle_info").fadeOut();
		$("#sam_info").fadeOut();
		$("#saw_info").fadeOut();
		$("#maya_info").fadeOut();
		$("#dark_page").fadeOut();
	}

	// when the user clicks on the close button on the robot info popup
	$(".robot_info_close").click(function() {
		close_all();
	})

	$("#dark_page").click(function() { close_all(); });

	$("#michelle").click(function() {
		$("#dark_page").fadeIn();
		$("#michelle_info").fadeIn();
	})

	$("#sam").click(function() {
		$("#dark_page").fadeIn();
		$("#sam_info").fadeIn();
	})

	$("#saw").click(function() {
		$("#dark_page").fadeIn();
		$("#saw_info").fadeIn();
	})

	$("#maya").click(function() {
	$("#dark_page").fadeIn();
	$("#maya_info").fadeIn();
	})







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


