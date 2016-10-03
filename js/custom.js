// $(document).ready(function(){
// 	$(".hid").hide();
// 	$('#id').hover(
// 		function(){$(this).show();}
// 	);
//
// });
$(document).ready(function() {
	$(".spoiler span").hide();
	$(".spoiler").append("<button>Answer</button>");
	$("button").click(function() {
		$(this).prev().show();
		$(this).remove();
	});
});