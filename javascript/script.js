$(document).ready(function() {
	$("#loading_bar").animate({
		'width' : '100%'
	}, 4000);
	$("#loading_screen").delay(4000).fadeOut(1000);
	$("#f_o_more_button").click(function() {
		window.location = "../posts.html";
	});
	function close_all() {
		$("#michelle_info").fadeOut();
		$("#sam_info").fadeOut();
		$("#saw_info").fadeOut();
		$("#maya_info").fadeOut();
		$("#dark_page").fadeOut();
	}
	$(".robot_info_close").click(function() {
		close_all();
	});
	$("#dark_page").click(function() { close_all(); });
	$("#michelle").click(function() {
		$("#dark_page").fadeIn();
		$("#michelle_info").fadeIn();
	});
	$("#sam").click(function() {
		$("#dark_page").fadeIn();
		$("#sam_info").fadeIn();
	});
	$("#saw").click(function() {
		$("#dark_page").fadeIn();
		$("#saw_info").fadeIn();
	});
	$("#maya").click(function() {
	$("#dark_page").fadeIn();
	$("#maya_info").fadeIn();
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