app.closeGame = function(){
    $("#tapTap").css("display","none");
}
app.openOverlay = function(){
    $("#tapTapEnded").css("display","block");
    $("#clickEvent").css("-webkit-filter", "blur(4px)");
    $("#clickEvent").css("filter","blur(5px)");
}
app.openOnScore = function(x){
    $("#onScore").css("display","block");
    $("#onScoreValue").text(x);
    // $("#clickEvent").css("filter","blur(5px)");
    setTimeout(function(){ app.closeOnScore() }, 3000);
}
app.closeOnScore = function(){
    $("#onScore").css("display","none");
    // $("#clickEvent").css("-webkit-filter", "blur(0px)");
    // $("#clickEvent").css("filter","blur(0px)");
}
app.closeCounter = function(){
	console.log("startGame")
        var starttime = new Date().getTime();
        log("Template.views_EdgeSwapper.gamePopUp.app.closeCounter started",null,arguments,1);

    	$(".pin").css("display","block");
    	$(".beforeStartGame").css("display","none");
    	$("#startGame").css("display","none");
    	setTimeout(function(){
    		$("#pin").text(2);
    	},1000);
    	setTimeout(function(){
    		$("#pin").text(1);
    	},2000);
    	setTimeout(function(){
           $("#pin").text(0);
        },3000);
        setTimeout(function(){
           $("#tapTap").css("display","none");
            log("Template.views_EdgeSwapper.gamePopUp.app.closeCounter ended",new Date().getTime() - starttime,arguments,1);
            app.startGame();
            $("#clickEvent").css("-webkit-filter", "blur(0px)")
        },4000);
}

Template.gamePopUp.events({
    'click #tapTap .remove': function () {
        app.closeGame();
        app.openOverlay();
    },
    'click #startGame': function () {
        app.closeCounter();
    },
});

Template.gameEndPopUp.events({
    'click #endGame': function () {
        app.reStartGame();
    }
    
});
