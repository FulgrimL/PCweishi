$(function(){
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
	});
	
	
// 视频页
	$(".vedio").find("ul").find("li").bind("mouseenter",function(){
		$(this).find(".vedio-mask,.vedio-ti").slideUp();	
	}).end().bind("mouseleave",function(){
		$(this).find(".vedio-mask,.vedio-ti").slideDown();
		console.log("111");
	});

//直播页
	$(".live-mask").bind("mouseenter",function(){
		$(this).slideUp();	
	});
	$("dt").bind("mouseleave",function(){
		$(".live-mask").slideDown();
	});
	
	
//栏目页
	$(".programa-control").find("ul").find("li").eq(0).click(function(){
		$(".programa-control").find("ul").find("li").find("span").css("color","#fff");
		$(".programa-control").find("ul").find("li").find("em").css("display","none");
		$(this).find("em").css("display","inline-block");
		$(this).find("span").css("color","#fdd000");
		$(".pp-content2").css("display","none");
		$(".pp-content").css("display","block");
		$(".pmp-btn1").css("display","block");
		$(".pmp-btn2").css("display","none");
		$(".pmn-btn1").css("display","block");
		$(".pmn-btn2").css("display","none");
	});
	$(".programa-control").find("ul").find("li").eq(1).click(function(){
		$(".programa-control").find("ul").find("li").find("span").css("color","#fff");
		$(".programa-control").find("ul").find("li").find("em").css("display","none");
		$(this).find("em").css("display","inline-block");
		$(this).find("span").css("color","#fdd000");
		$(".pp-content").css("display","none");
		$(".pp-content2").css("display","block");
		$(".pmp-btn1").css("display","none");
		$(".pmp-btn2").css("display","block");
		$(".pmn-btn1").css("display","none");
		$(".pmn-btn2").css("display","block");
	});
	$(".pmp-btn1").click(function(){
		console.log("p-1");
	})
	$(".pmp-btn2").click(function(){
		console.log("p-2");
	})
	$(".pmn-btn1").click(function(){
		console.log("n-1");
	})
	$(".pmn-btn2").click(function(){
		console.log("n-2");
	});
	$(".controlbar-volumeline").click(function(){
		console.log(111112)
	});
	
	
//聊天室
var chatGj = false;
	$(".chat-gj").click(function(){
		chatGj = !chatGj;

		if (!chatGj) {
		$(this).find("img").attr("src","../img/good.png");
		console.log(chatGj);
		}else{
		$(this).find("img").attr("src","../img/good2.png")
		console.log(chatGj);
		}

	}
//	,function(){

//		console.log("2");
//		
//	}
	)
	
	
});
	

	

	var mySwiper = new Swiper('.pp-content', {
    freeMode : true,
    loop:false,
    prevButton:'.pmp-btn1',
	nextButton:'.pmn-btn1',
});
var mySwiper2 = new Swiper('.pp-content2', {

    freeMode : true,
    loop:false,
    prevButton:'.pmp-btn2',
	nextButton:'.pmn-btn2',


});

