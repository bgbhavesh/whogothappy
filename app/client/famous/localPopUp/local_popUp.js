Template.gamePopUp2.events({
    'click #tapTapLocal .remove': function () {
        app.closeGame2();
        app.openOverlay2();
    },
    'click #startGameLocal': function () {
        app.closeCounter2();
    },
});
app.closeOverlayImgRank = function(){
    $(".rankImg").css("display","none");
    
}
app.openOverlay2 = function(){
    $("#tapTapEnded2").css("display","block");
    $("#clickEvent2").css("-webkit-filter", "blur(4px)");
    $("#clickEvent2").css("filter","blur(5px)");
}
var count;
var content = [];
var firstContent = [];
var game2 = false;
var gamestart;
var hours =0;
var mins =0;
var seconds =0;
var timex;
var startDrag = false;
Template.rankImg.events({
    // 'click .overlay':function(event){
    //     console.log(event.clientY)
    // },
    // 'mousedown .overlay .dragaAndImg':function(event){
    //     console.log(event.clientY)
    // },
    // 'dragstart .overlay .dragaAndImg':function(event){
    //     console.log(event)
    // },
    // 'dragend .overlay .dragaAndImg':function(event){
    //     console.log(event)
    // },
    'drag .overlay .dragaAndImg':function(event){
        startDrag = true;
        console.log(event);
        // console.log(event.currentTarget.offsetTop);
        // console.log(event.currentTarget.offsetLeft);
        // console.log(event.clientX);
        // console.log(event.clientY);

       $(".dragaAndImg").css({"top":event.currentTarget.offsetTop+"px","left":event.currentTarget.offsetLeft+"px"});
    },
    'mouseout .overlay .dragaAndImg':function(event){
        if(startDrag){
            console.log(event.clientY)
            // $(".dragaAndImg").css({"top":event.clientX+"px","left":event.clientY+"px"});
        }

        startDrag = false;
    },
    
})
Template.content2.helpers({
    image : function(){
        Session.get("startGameFlag");
        app.slideStartTime = new Date().getTime();
        return app.famousContent(Session.get("flip"));
    },
})
Template.content2.events({
    "dragstart #clickEvent2 img":function(event){
        var element = event.currentTarget;
        var SRC = event.currentTarget.currentSrc;
        var size = event.currentTarget.clientHeight;
        var max_height = $("#clickEvent2").width();
        var leftscreenX = (event.clientX < max_height)?event.clientX:max_height-(max_height/8);
        var leftscreenY = (event.clientY < max_height)?event.clientY:max_height-(max_height/8); 
        if (element) {
            $(".rankImg").css("display","block");
            var style = 'style="left:'+leftscreenX+'px;top:'+leftscreenY+'px ;width:'+size/2+'px; height:'+size/2+';" '
            var selection = '<div class="dragaAndImg" '+style+' dragable="false" ><img src="'+SRC+'" width="'+size/2+'" height="'+size/2+'"></div>';
            $('.rankImg').append(selection)

        app.playAnewGame();
        };
        console.log(event)
    },
    // "click #clickEvent2 img" : function(event){
    //     if(app.clickStart == false)
    //         return;
    //     app.clickStart = false;
    //     app.caseCount++;
    //     var element = event.currentTarget;
    //     var $img = $(event.target);
    //     var offset = $img.offset();
    //     var xx = event.clientX - offset.left - 5;
    //     var yy = event.offsetY-5;
    //     var x = event.clientX - offset.left;
    //     var y = event.offsetY;
    //     x = Math.abs(parseInt(x, 10)) -50;
    //     y = Math.abs(parseInt(y, 10)) -45;
    //     x = Math.abs(x);
    //     y = Math.abs(y);
    //     $(element).parent().append('<div id="correctdotOnImg" style="position: absolute;top:45%;left:45%;height: 10px;width: 10px;background: green;opacity: 0.6; border-radius: 100%;"></div>');
    //     $(element).parent().append('<div id="dotOnImg" style="position: absolute;top:'+yy+'px;left:'+xx+'px;height: 10px;width: 10px;background: red;opacity: 0.6; border-radius: 100%;"></div>');
    //     app.AccuracyPoints = Math.floor( (x + y) / 10 );
    //     smileDuration = app.randomNumber(parseInt(app.lang.settings.showSmileyMax),parseInt(app.lang.settings.showSmileyMin))
    //     var str = $(event.currentTarget).attr("src");
    //     var res = str.match("joy");
    //     var joySrc = "";
    //     var rotateFlag = Session.get("rotate");
    //     if(Session.get("flip") && !rotateFlag){
    //         var imgsUrl = $("#clickEvent2 div figure.back img");
    //         for(var i=0,il=imgsUrl.length;i<il;i++){
    //             var imgSrc = imgsUrl[i].getAttribute("src")
    //             if(imgSrc.match("joy")){
    //                 joySrc = imgsUrl[i].src;
    //                 // console.log("if"+joySrc)
    //                 imgsUrl[i].src = "./images/expression/smily.png";
    //                 setTimeout(function(){
    //                     app.changeFace(joySrc,res);
    //                 },smileDuration);// correct into smile show s
    //             }
    //         }
    //     }else{
    //         var imgsUrl = $("#clickEvent2 div figure.front img");
    //         // console.log(imgsUrl)
    //         for(var i=0,il=imgsUrl.length;i<il;i++){
    //             var imgSrc = imgsUrl[i].getAttribute("src")
    //             if(imgSrc.match("joy")){
    //                 joySrc = imgsUrl[i].src;
    //                 // console.log("else"+joySrc)
    //                 imgsUrl[i].src = "./images/expression/smily.png";
    //                 setTimeout(function(){
    //                     app.changeFace(joySrc,res);
    //                 },smileDuration);// correct into smile
    //             }
    //         }

    //     }
    //     endtime = new Date().getTime()
    //     totalTime = endtime - app.slideStartTime;
    //     var delay = app.randomNumber(parseInt(app.lang.settings.tranisionWaitMin),parseInt(app.lang.settings.tranisionWaitMax));
    //     count--;
    //     var late = parseInt(app.lang.settings.lateClick);
    //     if(res){ 
    //         if(app.score.method){
    //             if(app.score.method.length!=0){
    //                 if(totalTime<late){
    //                     result = parseInt(app.lang.settings.sixteenScorePerHit - app.AccuracyPoints); 
    //                 }else{
    //                     result = parseInt(app.lang.settings.sixteenScorePerLateHit);
    //                 }
    //             }else{
    //                     result = parseInt(app.lang.settings.sixteenScorePerHit - app.AccuracyPoints);
    //             }
    //         }
    //         // delay = 2000;
    //         app.totalscore = app.totalscore + result;
    //     }else{
    //         result = 0;
    //     }
    //     // console.log(app.AccuracyPoints)
    //     app.score.method.push({
    //         "slideStartTime": app.slideStartTime,
    //         "endtime": endtime,
    //         "totalTime": totalTime,
    //         "result": result,
    //         "caseId": app.caseCount,
    //         "extra": ""
    //     });
    //     $(".myScore").text(app.totalscore);
       
        
    //     setTimeout(function(){
    //         app.clickStart = true;
    //         app.animateFamousRandom();
    //         app.chageFlipSession();
    //         //
    //         // Session.set("esTemplate", "es_surface" +app.getEdgerSwapper())
    //     },delay);
    //     app.displayProgress(1,app.AccuracyPoints,result)
    //     app.selectedImg(event,str)
    // }
})
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
            app.startGame2();
            $("#clickEvent2").css("-webkit-filter", "blur(0px)")
        },4000);
}
app.startGame2 = function(){
    game2 = true;
    $('.selected').html("");
    setTimeout(app.getcases, 1000);
    app.score = {};
    app.score.method = [];
    app.totalscore = 0;
    Score = [];
    startTimer2();
    app.updateStreak();
    // console.log("game Started");
    gamestart = true;
    app.getGameTimer()
    app.onResize();
    app.gameId = app.createId();
}
function startTimer2(){
    timex = setTimeout(function(){
      seconds++;
    if(seconds >59){
        seconds=0;
        mins++;
        if(mins<10){                     
            $(".gametimemins").text('0'+mins+':');}       
        else 
            $(".gametimemins").text(mins+':');
    }    
    if(seconds <10) {
        $(".gametimeseconds").text('0'+seconds);} 
    else {
        $(".gametimeseconds").text(seconds);
    }
    if(app.debug){
        if(mins >= 1){
            $(".gametimemins").text('10');
            $(".gametimeseconds").text(':00');
                // endGame();
                app.endGame2();
        }
        else{
            startTimer2();
        }           
    }else{
        if(mins >= parseInt(app.lang.settings.gameLast)){
            $(".gametimemins").text('10');
            $(".gametimeseconds").text(':00');
                // endGame();
                app.endGame2();
        }
        else{
            startTimer2();
        }   
    }
  },1000);
}
app.closeGame2 = function(){
    $("#tapTapLocal").css("display","none");
}
app.reStartGame2 = function(){   
    game2 = true;
    app.openOverlay2();
    // app.startGame2()
    $("#tapTap2").css("display","block");
    $("#tapTapEnded2").css("display","none");
    $(".gametimemins").text("00");
    $(".gametimeseconds").text(":00");  
    $(".myScore").text("0");
    app.closeCounter2();
    gamestart = false;
    app.totalscore = 0;
    seconds=0;
    mins=0;
    hours=0;
}
function endGame2(EndedTime){
    $('.selected').html("");
    if(!game2) return;
    $("#clickEvent2").css("filter","blur(5px)");
    $("#clickEvent2").css("-webkit-filter","blur(5px)");
    app.arrangeDays();
    gamestart = false;
    var tempDate = new Date();
    tempDate.setHours(tempDate.getHours()+12);
    app.target_date = tempDate;
    // app.openOverlay();
    app.openOverlay2();
    var emails = {};
    emails  = app.getTextAreaEmails();
    var cursorMe = Meteor.user();
    var data = {};
    if(cursorMe){
        data._id = cursorMe._id;
        data.username = cursorMe.username;
        data.emailid = cursorMe.profile.email;
        var wrongcount=0
        for (var i = 0; i < app.score.method.length; i++) {
            if(app.score.method[i].result == 0)
                wrongcount = wrongcount + 1;
        };
        data.score = app.totalscore;
        data.clicked = app.score.method.length;
        data.wrong = wrongcount;
        data.allScore = app.score;
        data.corrected = data.clicked - wrongcount;
        if(EndedTime){
            data.gameEnd = EndedTime;
        }else{
            // if(!app.debug)
            app.updateStreak("true");
            data.gameEnd = "10:00";
        }
        // console.log(data);
        if(data.emailid){
            Meteor.call("genMail",data.emailid,data,app.gameId);//* *//
            Meteor.call("saveScore",Meteor.userId(),app.totalscore,app.score,tempDate, function(err, data) {
                if(!data){
                    Score.push({
                        "clientId": Meteor.userId(),
                        "score": app.totalscore,
                        "totalScore": app.score,
                        "date": tempDate
                    });
                if(Score)
                    app.saveScoreLocal(Score);
                }
            });
            Meteor.call("updateScore",Meteor.userId(), app.totalscore, tempDate,function(err,data){
            });

        }

    }
    app.modifyLastDate(data);
    if(emails)
        app.sendmail(emails,data);
    app.updateTheMaxScoreProfile();
    clearTimeout(timex);
    $("#pinLocal").text("3");
    console.log("game Ended");
    // console.log(data);
    app.test = data;
    // sending info to drive
    var username = "", message = "", score = null, difference = 0;
    if(Meteor.user())
        username = Meteor.user().username +" ";
    else
        username = "Guest "
    var result;
    for(var i=0,il=data.allScore.method.length;i<il;i++){
        score = data.allScore.method[i];
        difference = score.endtime - score.slideStartTime;
        difference = Math.floor(difference/1000);
        message = username +"scored " +score.result +" in " + difference + " seconds.";
        if(score.result == 0)
            result = "false";
        else
            result = "true";
        app.pushToDrive(message,score.caseId,result,app.gameId);
    }
} 
app.endGame2 = endGame2;
Template.gameEndPopUp2.events({
    'click #endGame2': function () {
        app.reStartGame2();
    },
    'click #shareWithFacebook' : function(){
        app.shareWithFacebook();
    } 
});
app.playAnewGame = function(){
    $("#rest").css("display","none")
    $("#famousSquare").css("display","none")
};