$(document).ready(function() {

	// check if the user is on mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		//$("#img_banner").css("height", "200px");
 		alert("hey");
	}	


	$(window).resize(function() {
		//$("#banner_wrapper span").html($(window).width());
	});
});