$(function(){
	var liveContent = $(".live-content-total"),
	indexContent = $(".index-content-total"),
	vedioContent = $(".vedio-content"),
	searchContent = $(".search-content"),
	liveLi = $(".top-ul").find("li").eq(0);
	
	liveLi.find("em").css("display","inline-block").end().find("a").css("color","#fdd000");
	
	indexContent.hide();
	vedioContent.hide();
	searchContent.hide();
	$('.top-ul').find("li").bind("click",function(){
			liveContent.hide();
			indexContent.hide();
			vedioContent.hide();
			searchContent.hide();
		if ($(this).index() == 0) {
			liveContent.show();
		}else if($(this).index() == 1){
			indexContent.show();
		}else if($(this).index() == 2){
			vedioContent.show();
		}else if($(this).index() == 3){
			searchContent.show();}
	})
})