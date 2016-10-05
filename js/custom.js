// $(document).ready(function(){
// 	$(".hid").hide();
// 	$('#id').hover(
// 		function(){$(this).show();}
// 	);
//
// });

//jquery to change the navbar on scroll

// function checkScroll(){
// 	//The point where the navbar changes in px
// 	var startY = $('.navbar').height() * 2;
//
// 	if($(window).scrollTop() > startY){
// 		$('.navbar').addClass("scrolled");
// 	}else{
// 		$('.navbar').removeclass("scrolled");
// 	}
// }
// if($('.navbar').length > 0){
// 	$(window).on("scroll load resize", function(){
// 		checkScroll();
// 	});
// }
$(document).ready(function() {
	$("#navbar").hide();
	var scroll_start = 0;
	var startChange = $("#startChange");
	var offset = startChange.offset();
	$(document).scroll(function(){
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top){
			$("#navbar").css("background-color", "#ffff00").fadeIn("slow");
		}else{
			$("#navbar").css("background-color", "transparent").fadeOut("slow");
		}
	});
	$(".spoiler span").hide();
	$(".spoiler").append("<button>Answer</button>");
	$("button").click(function() {
		$(this).prev().show();
		$(this).remove();
	});
	});
