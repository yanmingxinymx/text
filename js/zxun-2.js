$(function(){
	
	
	$(".header4").load("header.html")
	$(".footer4").load("footer.html")
	
	$(".main4 ul").hover(function(){
		$(this).find("span").css("width",1080)
		console.log(this)
	},function(){
		$(this).find("span").css("width",160)
	})
	
})