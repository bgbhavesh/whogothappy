app.closeGame = function(){
    $("#tapTap").css("display","none");
}
app.openOverlay = function(){
    $("#tapTapEnded").css("display","block");
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
Template.content.events({
    'click #endGame .button': function () {
        app.endBeforeTime();
    }
});