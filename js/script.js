$(document).ready(function(){
	chart_arrow();
});

function chart_arrow(){
	var percent = parseInt($(".chart_arrow_bar").attr("percent"));
	var deg = percent * 1.8 - 90;
	$(".chart_arrow_bar").css("transform", "rotate(" + deg + "deg)");
}