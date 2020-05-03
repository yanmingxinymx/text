window.onload = function() {

	$(".header").load("header.html");
	//	$(".main").load("main.html");
	$(".footer").load("footer.html");

	/* main */
	/*	var n=0;
		setInterval(function(){
			n++;
			var na=parseInt(n/100);
			$(".main>.main-one li img").eq(0).css({"opacity":na,"z-index":997})
			if(na>=1){
				n=1;
				n--;
				$(".main>.main-one li img").eq(1).css({"opacity":na,"z-index":997})
			}
		},2000)*/
		
	var temper = null;
	var doc = 0;
	
	clearInterval(temper)
	
	temp()
	$(".main .main-one .left").on("click", function() {
		$(".main>.main-one li img").eq(0).css({"opacity": 1,"z-index": 998})
		$(".main>.main-one .tett").css({"opacity": 1,"z-index": 998})
		$(".main>.main-one li img").eq(1).css({"opacity": 0,"z-index": 995})
	})
	$(".main .main-one .right").on("click", function() {
		$(".main>.main-one li img").eq(0).css({"opacity": 0,"z-index": 995})
		$(".main>.main-one .tett").css({"opacity": 0,"z-index": 995})
		$(".main>.main-one li img").eq(1).css({"opacity": 1,"z-index": 998})
	})
	
	$(".main .main-one>ul").mouseenter(function() {
				clearInterval(temper)
		$(".main .main-one button").css("display", "block")
	})
	$(".main .main-one>ul").mouseleave(function() {
				temp()
		$(".main .main-one button").css("display", "none")
	})
	//

	

	function temp() {
		
		temper = setInterval(function() {
			doc++;
			if(doc > 0 && doc <= 160) {
				$(".main>.main-one li img").eq(0).css({"opacity": 1,"z-index": 998})
				$(".main>.main-one .tett").css({"opacity": 1,"z-index": 998})
				$(".main>.main-one li img").eq(1).css({"opacity": 0,"z-index": 995})
			}
			if(doc > 160 && doc <= 320) {
				$(".main>.main-one li img").eq(0).css({"opacity": 0,"z-index": 995})
				$(".main>.main-one .tett").css({"opacity": 0,"z-index": 995})
				$(".main>.main-one li img").eq(1).css({"opacity": 1,"z-index": 998})
			}
			if(doc > 320) {
				doc = 0;
			}
		}, 24)
	}
















	//

	//banner 轮播图

	var lis = $(".banner>ul>li");
	var circles = $(".banner-change .middle>li");
	var n = 0;

	//进来先动一次
	bannerChange(0)

	$(".banner .next").on("click", function() {
		if(n < lis.length - 1) {
			n++;
		} else {
			n = 0;
		}
		bannerChange(n)
	})
	$(".banner .prev").on("click", function() {
		if(n > 0) {
			n--;
		} else {
			n = lis.length - 1;
		}
		bannerChange(n)
	})

	circles.on("click", function() {
		n = $(this).index();
		bannerChange(n)
	})
	//切换li
	function bannerChange(index) {
		lis.eq(index).fadeIn(200).siblings().fadeOut(200);
		circles.eq(index).addClass("now").siblings().removeClass("now");
		bannerImgChange(lis.eq(index));
	}
	//切换li内的二级效果
	function bannerImgChange(obj) {
		obj.find(".img1").show().addClass("animated fadeInLeft");
//		console.log(obj.find(".img1"))
		setTimeout(function() {
			obj.find(".img2").show().addClass("animated  bounceInRight");
			obj.find(".img3").show().addClass("animated  fadeIn");
		}, 300);
	}

	/**/

	$(".main .main-three .picc ul i").hover(function() {
		$(this).find(".shouw,.shouw>i").fadeIn(400)
	}, function() {
		$(this).find(".shouw,.shouw>i").fadeOut(400)
	})

	$(".main .main-two ul").hover(function() {
		var idth = $(this).width();
		$(this).find("span").css("width", idth)
	}, function() {
		var idth = $(this).width();
		$(this).find("span").css("width", 0)
	})

	$(".main .main-six .pic-six").hover(function() {
		$(this).find("span").css("width", 350)
	}, function() {
		$(this).find("span").css("width", 12)
	})

	$(".screen>li").hover(function() {
		//		$(this).css("width",600).siblings().css("width",100)

		$(this).stop().animate({
			"width": 400
		}).siblings().stop().animate({
			"width": 240
		})
	}, function() {
		$(".screen>li").stop().animate({
			"width": 280
		})
	})

	//	window.onscroll=function(){
	//		var header = document.getElementById("header"),
	//      nav = document.getElementById("nav"),
	//      main = document.getElementById("main"),
	//      go = document.getElementById("go");

	window.onscroll = function() {
		if(getsc().top >= $("header").offsetHeight) {
			//          nav.className = "posFixed";
			$("main").style.marginTop = $("main").offsetHeight + "px";
		} else {
			//          nav.className = "";
			$("main").css("margin-top", 0)
		}
		// 如果滑动到一定位置，显示返回顶部按钮
		if(getsc().top > 500) {
			$("body>button").css("display", "block")
			//          $("body>button").style.display = "block";
		} else {
			$("body>button").css("display", "none")
			//          $("body>button").style.display = "none";
		}
		$("body>button").hover(function() {
			$("body>button").html("回顶")
		}, function() {
			$("body>button").html("^")
		})
		//      console.log( $("body>button"))
	}
	// 返回顶部
	$("body>button")[0].onclick = function() {
		clearInterval(timer)
		//		console.log("11")
		var timer = setInterval(function() {
			// 动画形式运动
			// 元素当前的位置
			var leader = getsc().top;
			var tag = 0;
			// 每次移动的距离
			var step = (tag - leader) / 10;
			//根据方向改变step的值
			step = leader > tag ? Math.floor(step) : Math.ceil(step);

			if(leader != tag) { // 形参(tag)
				leader = leader + step;
				window.scrollTo(0, leader); // 页面左上角
			} else {
				clearInterval(timer)
			}
			console.log("go")
		}, 16)
	}

	// 封装获取scrollTop/scrollLeft
	function getsc() {
		return {
			left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0,
			top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0
		}
	}
	
	
	
	
	
	
	// 添加无缝效果 把第一张复制一下放在最后一张后面
	$(".main .main-three>.screen-main .picc>ul:eq(0)").clone(true).appendTo(".main .main-three>.screen-main .picc");
	$(".main .main-three>.screen-main .picc>ul:eq(1)").clone(true).appendTo(".main .main-three>.screen-main .picc");
	$(".main .main-three>.screen-main .picc>ul:eq(2)").clone(true).appendTo(".main .main-three>.screen-main .picc");
	
//	$(".one>li:nth-child(3) div ul>li").eq(0).clone().appendTo($(".one>li:nth-child(3) div ul"));

	//点击右按钮，图片向左移动，点击一次移动一张，循环无缝
	//获取ul距离左边的距离；
   var oldLeft = $(".main .main-three>.screen-main .picc").offset().left;
   var p = 0;
   var flag= true;
	$(".main .main-three .footmore .main-right").click(function(){
		if(flag){
			if(p>=5){
			$(".main .main-three>.screen-main .picc").css("left","0px")
			p = 0;
		}
		p++;
		$(".main .main-three>.screen-main .picc").animate({"left":-p*370.5},500,function(){flag = true});
		flag = false
		}
	})
	$(".main .main-three .footmore .main-left").click(function(){
		if(flag){
			if(p==0){
			$(".main .main-three>.screen-main .picc").css("left", -370.5*5)
			p = 5
		}
		p--;
		$(".main .main-three>.screen-main .picc").animate({"left":-p*370.5},500,function(){flag = true});
		flag = false
		}
	})


}

//}