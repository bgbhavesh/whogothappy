app.showChallangeSent = function(message){
    Session.set("popupmgs",message);
    $("#challengeSentDiv").show()
}
app.closeGame = function(){
    $("#tapTap").css("display","none");
}
app.openOverlay = function(){
    $("#tapTapEnded").css("display","block");
    $("#clickEvent").css("-webkit-filter", "blur(4px)");
    $("#clickEvent").css("filter","blur(5px)");
}
app.justOveray =function(){
    $("#clickEvent").css("-webkit-filter", "blur(4px)");
    $("#clickEvent").css("filter","blur(5px)");
}
app.noOveray =function(){
    $("#clickEvent").css("-webkit-filter", "blur(0px)");
    $("#clickEvent").css("filter","blur(0px)");
}
app.openOnScore = function(x){
    // app.justOveray();
    $("#onScore").css("display","block");
    $("#onScoreValue").text(x);
    // $("#clickEvent").css("filter","blur(5px)");
    setTimeout(function(){ app.closeOnScore()}, 1500);
    // setTimeout(function(){ app.closeOnScore();app.noOveray() }, 2500);
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

    	$(".gamePopUp .pin").css("display","block");
    	$(".gamePopUp .beforeStartGame").css("display","none");
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

Template.ratingPopup.events({
    'click #rateAccept': function () {
        console.log("accept");
        $("#rating").hide();
    },
    'click #rateDecline': function () {
        console.log("accept later")
        $("#rating").hide();
    },
});

Template.gameEndPopUp.events({
    'click #endGame': function () {
        app.reStartGame();
    },
    'click #shareWithFacebook' : function(){
        app.shareWithFacebook();
    } 
});
Template.updated.helpers({
    "lastupdate" : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe)
        if(cursorMe.profile){
            if(cursorMe.profile.serverStartTime){
                return "Auto updated "+$.timeago(cursorMe.profile.serverStartTime);
            }
        }
    }
})

Template.ChallengePopup.helpers({
    "emails" : function(){
        var data = [];
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe)
        if(cursorMe.profile){
            if(cursorMe.profile.emailsToSend){
                var emails = cursorMe.profile.emailsToSend
                for (var i = 0; i < emails.length; i++) {
                     data.push(emails[i])
                 }
                 return data;
            }
        }
        return ""
    },
    "message" : function(){
        return  Session.get("popupmgs")
    }
});

Template.ChallengePopup.events({
    'click #challengeSentDivOK': function () {
        $("#challengeSentDiv").hide();
    }, 
});