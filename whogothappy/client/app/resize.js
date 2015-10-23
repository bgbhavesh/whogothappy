app.onResize = function(){
	app.chatSize();
	if(!$(".card:first")[0]){
		setTimeout(app.onResize);
		return;
	}else{
		console.log("3 reloaded resize")
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
		$("#sisxteenBox").width()
		$("#sisxteenBox").css("height",$("#sisxteenBox").width())
	}
	if($(window).height() < $("#famousSquare").height()){
		console.log("2")
		var fullwidth = $(window).height();
		var width = $(window).height()/4
		$("#clickEvent div figure img").height(width)
		$("#clickEvent2 div figure img").height(width)
		$(".selected  figure ").height(width/2)
		$(".selected  figure ").width(width/2)
		$(".selected  img").height(width/2)
		$(".selected  figure img").height(width/2)
		$(".selected  img").width(width/2)
		$(".selected  figure img").width(width/2)
		$("#clickEvent").css({"width":fullwidth,"height":fullwidth})
		$("#clickEvent2").css({"width":fullwidth,"height":fullwidth})
	}else{
		var fullwidth = $("#famousSquare").width();
		$("#famousSquare").height(fullwidth)
		// var fullwidth = $("#famousSquare").width();
		$("#sisxteenBox").height(fullwidth)
		var width = fullwidth/4
		$("#clickEvent div figure img").height(width)
		$("#clickEvent div figure img").width(width)
		$("#clickEvent").css({"width":fullwidth,"height":fullwidth})
		$("#clickEvent2 div figure img").height(width)
		$("#clickEvent2 div figure img").width(width)
		$("#clickEvent2").css({"width":fullwidth,"height":fullwidth})
		$(".selected  figure ").height(width/2)
		$(".selected  figure ").width(width/2)
		$(".selected  figure img").height(width/2)
		$(".selected  img").height(width/2)
		$(".selected  figure img").width(width/2)
		$(".selected  img").width(width/2)
	}

};

$(window).resize(app.onResize);

// app.onResize();


Meteor.startup(function(){
  app.onResize();
});

app.chatSize = function(){
  var chatSize = (window.innerHeight - 54 - 38 - 35);
  $("#chatBoxCSS").remove();
  $("head")
    .append('<style id="chatBoxCSS" type="text/css">.relaxed.list{height: '
      +chatSize
      +'px !important;}</style>');
  // console.log("app.onResize " +chatSize);
}
