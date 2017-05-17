$(function(){
	var liveContent = $(".live-content-total"),
	indexContent = $(".index-content-total"),
	vedioContent = $(".vedio-content"),
	searchContent = $(".search-content");
	$(".index-main").load("indexC.html .live-content-total");
	$.getScript('../js/main.js');
	liveLi = $(".top-ul").find("li").eq(0);
	liveLi.find("em").css("display","inline-block").end().find("a").css("color","#fdd000");
	
	indexContent.remove(); 
	vedioContent.remove();
	searchContent.remove();
	$('.top-ul').find("li").bind("click",function(){
			liveContent.remove();
			indexContent.remove();
			vedioContent.remove();
			searchContent.remove();
		if ($(this).index() == 0) {
			$(".index-main").load("indexC.html .live-content-total");
			$.getScript('../js/main.js');

		}else if($(this).index() == 1){
			$(".index-main").load("indexC.html .index-content-total");
			$.getScript('../js/main.js');

		}else if($(this).index() == 2){
			$(".index-main").load("indexC.html .vedio-content-total");
			$.getScript('../js/main.js');

		}else if($(this).index() == 3){
			$(".index-main").load("indexC.html .search-content-total");
			$.getScript('../js/main.js');
	}
		
		
		
	})
})