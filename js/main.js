window.onload=function(){
	$(".index-mask").bind("mouseenter",function(){
		$(this).slideUp();	
	});
	$("dt").bind("mouseleave",function(){
		$(".index-mask").slideDown();
	});
	$(".top-ul").find("li").click(function(){
		$(".top-ul").find("li").find("a").css("color","#fff");
		$(".top-ul").find("li").find("em").css("display","none");
		$(this).find("em").css("display","inline-block");
		$(this).find("a").css("color","#fdd000");
	});
//	搜索页
	
	$(".search-control").find("li").eq(0).click(function(){
		$(".search-control").find("li").find("span").css("color","#fff");
		$(".search-control").find("li").find("em").css("display","none");
		$(this).find("em").css("display","inline-block");
		$(this).find("span").css("color","#fdd000");
		$(".search-vedio").css("display","none");
		$(".search-user").css("display","block");
	});
	$(".search-control").find("li").eq(1).click(function(){
		$(".search-control").find("li").find("span").css("color","#fff");
		$(".search-control").find("li").find("em").css("display","none");
		$(this).find("em").css("display","inline-block");
		$(this).find("span").css("color","#fdd000");
		$(".search-vedio").css("display","block");
		$(".search-user").css("display","none");
	});
	$(".search-vedio").find("ul").find("li").bind("mouseenter",function(){
		$(this).find(".search-mask,.search-vedio-ti").slideUp();	
	}).end().bind("mouseleave",function(){
		$(this).find(".search-mask,.search-vedio-ti").slideDown();
		console.log("111");
//		$(this).find("img").slideDown();
	});

	
	
	
}
