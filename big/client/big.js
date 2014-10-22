app.closeGame = function(){
	$("#tapTap").css("display","none");
}
app.closeCounter = function(){
	console.log("startGame")
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
    	$(".beforeStartGame").css("display","none");
    	$("#startGame").css("display","none");
}

Template.gamePopUp.events({
    'click #tapTap .remove': function () {
    	app.closeGame();
    },
    'click #startGame': function () {
    	app.closeCounter();
    },
});