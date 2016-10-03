// $(document).ready(function(){
// 	$(".hid").hide();
// 	$('#id').hover(
// 		function(){$(this).show();}
// 	);
//
// });
$(document).ready(function() {
	var scroll_start = 0;
	var startChange = $("#startChange");
	var offset = startChange.offset();
	$(document).scroll(function(){
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top){
			$("#navbar").css("background-color", "#ffff00");
		}else{
			$("#navbar").css("background-color", "transparent");
		}
	});
	$(".spoiler span").hide();
	$(".spoiler").append("<button>Answer</button>");
	$("button").click(function() {
		$(this).prev().show();
		$(this).remove();
	});
	});
