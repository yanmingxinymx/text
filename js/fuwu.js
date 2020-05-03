$(function(){
	
	
	$(".header2").load("header.html")
	$(".footer2").load("footer.html")
	
	
	$(".main2 .container>div").on("click",function(){
          $(this).find(".fw-after")
          .slideDown(800).end().siblings().find(".fw-after")
          .slideUp().end().siblings()
          console.log(this)
          
//       	$(this).find(".fw-before").css("height",0)
         	
         	$(this).find(".fw-before")
          .hide().end().siblings().find(".fw-before")
          .show().end().siblings()
		})
/*	
	$(".main2 .container>div").on("mouseleave",function(){
          
         	$(this).find(".fw-before").fadeOut()
         	
		})*/
		$(".main2 .container>div>.fw-before").hover(function(){
			$(this).find("span").css("width",260)
		},function(){
			$(this).find("span").css("width",20)
		})
		
		$(".main2 .container>div>.fw-after").hover(function(){
			$(this).find("span").css("width",1049)
		},function(){
			$(this).find("span").css("width",192)
		})
})