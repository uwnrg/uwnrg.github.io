$(document).ready(function() {

	// animation for the loading screen
	
	$("#loading_bar").animate({
		'width' : '100%'
	}, 2500);

	//$("#loading_screen").delay(2500).animate({'height':'0px'});
	$("#loading_screen").delay(2500).fadeOut();


	//$("main").css("height", $("#all_posts").height() + $("#posts_banner").height() + "px");
	//$("footer").css("top", $("main").height() + "px");

	//$("#logo a").html($(window).height() + ", " + $("main").height());

	/*var intro_text_left_pos = $(window).width()/2 - $("#who_are_we").width()/2;

	$("#who_are_we").css("top", intro_text_top_pos + "px");
	$("#who_are_we").css("left", intro_text_left_pos + "px");	

	$(window).resize(function() {
		var intro_text_top_pos = $(window).height()/2 - $("#who_are_we").height()/2;
		var intro_text_left_pos = $(window).width()/2 - $("#who_are_we").width()/2;		
		$("#who_are_we").css("top", intro_text_top_pos + "px");
		$("#who_are_we").css("left", intro_text_left_pos + "px");
	});*/

	//var waw_top_pos = $(window).height()/2 - 100;

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


