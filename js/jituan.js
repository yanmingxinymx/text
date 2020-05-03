/* jituan */
//$(function(){
	
//	$(".main1 .jt-02").height(hie)



//})





//配置页面布局
$(function(){
	
	
	var hie=$(window).innerHeight()-$(".header1").height();
	$(".main1 .screen>ul>li").height(hie)
	
	
	
	
	
	/*var colorArr = ['blue','green','pink','gold'];
	//页面可视区域剩下的高度
	var h = $(window).innerHeight()-$(".header").height();
	$(".screen").height(h).children().find("li").height(h);
	
	$(".screen li").each(function(k,v){
		$(v).css("background-color",colorArr[k])
	});*/
	
	
	
	//获取当前页面的地址栏
	var pageHash = window.location.hash.slice(1);
	console.log(pageHash)
	//如果存在哈希值，滑动到指定屏幕
	if(pageHash){
		$(".main1 .screen>ul").animate({"top":$(".main1 .screen>ul>li").height()*-pageHash},1000,"elasticOut",function(){
			flag = true;
		})
	}
	
	//多次滚动鼠标，算触发事件
	var count = 0;
	//记录当前的屏幕
	var screenIndex = 0;
	//节流阀
	var flag = true;
	MouseWheel($(document)[0],function(e,down){
		if(count > 5){
			//滚轮向上，页面向下
			if(down){
				console.log(count,screenIndex,flag)
				//如果当前屏数没到第一屏，允许滑动
				if(screenIndex > 0){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex--;
						var target = $(".main1 .screen>ul>li").height();
						$(".main1 .screen>ul").animate({"top":-target*screenIndex},1000,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				
				count = 0;
			}else{
				console.log(count,screenIndex,flag)
				
				//如果当前屏数没到最后一屏，允许滑动
				if(screenIndex < $(".main1 .screen>ul>li").length-1){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex++;
						var target = $(".main1 .screen>ul>li").height();
						$(".main1 .screen>ul").animate({"top":-target*screenIndex},1000,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
				}
				
				count = 0;
			}
		}
		count++;
	})
	
	
	
	
	
//	var colorArr = ['black','pink',];
	var nca=0;
	
	setInterval(function(){
		
		nca++;
		if(nca>=0&&nca<=160){
			$(".main1 .jt-006 .jt-06 .jt-11").css("border-color","#6B696B").fadeIn()
			$(".main1 .jt-006 .jt-06 .jt-22").css("border-color","#6B696B").fadeIn()
			$(".main1 .jt-006 .jt-06 .jt-33").css("border-color","#6B696B").fadeIn()
			$(".main1 .jt-006 .jt-06 .jt-44").css("border-color","#6B696B").fadeIn()
//			$(".main1 .jt-006 .jt-06 .jt-11").css("border-color","#6B696B").fadeOut()
//			$(".main1 .jt-006 .jt-06 .jt-22").css("border-color","#6B696B").fadeOut()
//			$(".main1 .jt-006 .jt-06 .jt-33").css("border-color","#6B696B").fadeOut()
//			$(".main1 .jt-006 .jt-06 .jt-44").css("border-color","#6B696B").fadeOut()
		}
		if(nca>160&&nca<=320){
			$(".main1 .jt-006 .jt-06 .jt-11").css("border-color","#6B696B").fadeOut()
			$(".main1 .jt-006 .jt-06 .jt-22").css("border-color","#6B696B").fadeOut()
			$(".main1 .jt-006 .jt-06 .jt-33").css("border-color","#6B696B").fadeOut()
			$(".main1 .jt-006 .jt-06 .jt-44").css("border-color","#6B696B").fadeOut()
//			$(".main1 .jt-006 .jt-06 .jt-11").css("border-color","#6B696B").fadeIn()
//			$(".main1 .jt-006 .jt-06 .jt-22").css("border-color","#6B696B").fadeIn()
//			$(".main1 .jt-006 .jt-06 .jt-33").css("border-color","#6B696B").fadeIn()
//			$(".main1 .jt-006 .jt-06 .jt-44").css("border-color","#6B696B").fadeIn()
		}
		if(nca>320){
			nca=0;
		}	
	},8)
	
	setInterval(function(){
		var r=parseInt(Math.random()*256);
		var g=parseInt(Math.random()*256);
		var b=parseInt(Math.random()*256);		
		$(".main1 .jt-006>i").css("color","rgb("+r+","+g+","+b+")")
	},400)
	
		
	
//	cts.fillStyle="rgb("+r+","+g+","+b+")";
	
})
