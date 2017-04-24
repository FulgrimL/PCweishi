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
	})
	
	
	
}
