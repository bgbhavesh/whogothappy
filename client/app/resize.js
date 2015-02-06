app.onResize = function(){
	if(!$(".card:first")[0]){
		setTimeout(app.onResize);
		return;
	}else{
		console.log("3")
		var width = $("#clickEvent div figure img:first").width();
		var width = $(".card:first").width();
		var css = "";
		css = ".card figure img{height:" +width +"px;width:" +width +"px;}";
		$("#dynamicCss").append(css);
		css = ".card figure{height:" +width +"px;width:" +width +"px;}";
		$("#dynamicCss").append(css);
		css = ".card{height:" +width +"px;width:}";
		$("#dynamicCss").append(css);
		$("#famousSquare").width()
		$("#famousSquare").css("height",$("#famousSquare").width())
	}
	if($(window).height() < $("#famousSquare").height()){
		console.log("2")
		var fullwidth = $(window).height();
		// $("#famousSquare").height(fullwidth)
		var width = $(window).height()/4
		$("#clickEvent div figure img").height(width)
		$("#clickEvent div figure img").width(width)
		$("#clickEvent").css({"width":fullwidth,"height":fullwidth})
		// var css = "";
		// css = ".card figure img{height:" +width +"px;width:" +width +"px;}";
		// $("#dynamicCss").append(css);
		// css = ".card figure{height:" +width +"px;width:" +width +"px;}";
		// $("#dynamicCss").append(css);
		// css = ".card{height:" +width +"px;width:}";
		// $("#dynamicCss").append(css);
		// $("#famousSquare").width()
		// $("#famousSquare").css("height",$("#famousSquare").width())
	}else{
		var fullwidth = $("#famousSquare").width();
		$("#famousSquare").height(fullwidth)
		var width = fullwidth/4
		$("#clickEvent div figure img").height(width)
		$("#clickEvent div figure img").width(width)
		$("#clickEvent").css({"width":fullwidth,"height":fullwidth})
	}
	
};

$(window).resize(app.onResize);

app.onResize();