$(function() {
	$(".list-header").load("header.html")
	$(".list-footer").load("footer.html")

	//当前请求第几页的数据
	var page = 0;

	configPage(page)

	function configPage(p) {
		$.ajax({
			type: "get",
			url: "./js/list.php",
			data: {
				'id': p
			},
			dataType: "text",
			error: function(e) {
				console.log(e)
			},
			success: function(res) {
				if(p == 0) {
					$(".new-main>ul").html("");
				}
				res = JSON.parse(res.slice(1))
				var listArr = res.data.list;
				$.each(listArr, function(k, v) {
					var temp = $("#muban").clone().removeAttr("style");
					temp.find("img").attr('src', v.coverImg);
					temp.find(".title").html(v.title);
					temp.find(".date").html(v.creatAt);
					temp.find("p").html(v.describe);
					temp.attr("data-Id",v.sysId)
					$(".new-main>ul").append(temp);
				})
			}

		});
	}

	$(".more").click(function() {
		page++;
		if(page < 3) {
			configPage(page);
		} else {
			$(this).html("没有更多了。。")
		}
	})
	$(".new-main>ul").on("click", "li", function(k,v) {
		window.location.href = "detail.html?type=xiaoniaoNews&id="+$(this).attr("data-Id")
//		console.log($(this))
	})
})