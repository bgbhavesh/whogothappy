Template.gamePopUp2.events({
    'click #tapTapLocal .remove': function () {
        app.closeGame2();
        app.openOverlay();
    },
    'click #startGameLocal': function () {
        app.closeCounter2();
    },
});
app.closeCounter2 = function(){
	console.log("startGameLocal")
        var starttime = new Date().getTime();
        log("Template.views_EdgeSwapper.gamePopUp.app.closeCounter2 started",null,arguments,1);

    	$(".pinLocal").css("display","block");
    	$(".beforeStartGameLocal").css("display","none");
    	$("#startGameLocal").css("display","none");
    	setTimeout(function(){
    		$("#pinLocal").text(2);
    	},1000);
    	setTimeout(function(){
    		$("#pinLocal").text(1);
    	},2000);
    	setTimeout(function(){
           $("#pinLocal").text(0);
        },3000);
        setTimeout(function(){
           $("#tapTapLocal").css("display","none");
            log("Template.views_EdgeSwapper.gamePopUp.app.closeCounter2 ended",new Date().getTime() - starttime,arguments,1);
            app.startGame();
            $("#clickEvent2").css("-webkit-filter", "blur(0px)")
        },4000);
}
app.closeGame2 = function(){
    $("#tapTapLocal").css("display","none");
}
