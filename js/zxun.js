$(function(){
	
	
	$(".header3").load("header.html")
	$(".footer3").load("footer.html")
	
	$(".main3 ul").hover(function(){
		$(this).find("span").css("width",1080)
		console.log(this)
	},function(){
		$(this).find("span").css("width",160)
	})
//	console.log($(".main3 ul"))
})