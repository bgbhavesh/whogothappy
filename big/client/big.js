app.closeGame = function(){
	$("#tapTap").css("display","none");
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
        },4000);
}

Template.gamePopUp.events({
    'click #tapTap .remove': function () {
    	app.closeGame();
    },
    'click #startGame': function () {
    	app.closeCounter();
    },
});