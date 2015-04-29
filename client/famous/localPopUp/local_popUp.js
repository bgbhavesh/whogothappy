Template.gamePopUp2.events({
    'click #tapTapLocal .remove': function () {
        app.closeGame2();
        app.openOverlay2();
    },
    'click #startGameLocal': function () {
        app.closeCounter2();
    },
});
app.openOverlay2 = function(){
    $("#tapTapEnded2").css("display","block");
    $("#clickEvent2").css("-webkit-filter", "blur(4px)");
    $("#clickEvent2").css("filter","blur(5px)");
}
var count;
var content = [];
var firstContent = [];
Template.content2.helpers({
    image : function(){
        Session.get("startGameFlag");
        app.slideStartTime = new Date().getTime();
        return app.famousContent(Session.get("flip"));
    },
})
Template.content2.events({
    "click #clickEvent2 img" : function(event){
        if(app.clickStart == false)
            return;
        app.clickStart = false;
        app.caseCount++;
        var element = event.currentTarget;
        var $img = $(event.target);
        var offset = $img.offset();
        var xx = event.clientX - offset.left - 5;
        var yy = event.offsetY-5;
        var x = event.clientX - offset.left;
        var y = event.offsetY;
        x = Math.abs(parseInt(x, 10)) -50;
        y = Math.abs(parseInt(y, 10)) -45;
        x = Math.abs(x);
        y = Math.abs(y);
        $(element).parent().append('<div id="correctdotOnImg" style="position: absolute;top:45%;left:45%;height: 10px;width: 10px;background: green;opacity: 0.6; border-radius: 100%;"></div>');
        $(element).parent().append('<div id="dotOnImg" style="position: absolute;top:'+yy+'px;left:'+xx+'px;height: 10px;width: 10px;background: red;opacity: 0.6; border-radius: 100%;"></div>');
        app.AccuracyPoints = Math.floor( (x + y) / 10 );
        smileDuration = app.randomNumber(parseInt(app.lang.settings.showSmileyMax),parseInt(app.lang.settings.showSmileyMin))
        var str = $(event.currentTarget).attr("src");
        var res = str.match("joy");
        var joySrc = "";
        var rotateFlag = Session.get("rotate");
        if(Session.get("flip") && !rotateFlag){
            var imgsUrl = $("#clickEvent2 div figure.back img");
            for(var i=0,il=imgsUrl.length;i<il;i++){
                var imgSrc = imgsUrl[i].getAttribute("src")
                if(imgSrc.match("joy")){
                    joySrc = imgsUrl[i].src;
                    // console.log("if"+joySrc)
                    imgsUrl[i].src = "./images/expression/smily.png";
                    setTimeout(function(){
                        app.changeFace(joySrc,res);
                    },smileDuration);// correct into smile show s
                }
            }
        }else{
            var imgsUrl = $("#clickEvent2 div figure.front img");
            // console.log(imgsUrl)
            for(var i=0,il=imgsUrl.length;i<il;i++){
                var imgSrc = imgsUrl[i].getAttribute("src")
                if(imgSrc.match("joy")){
                    joySrc = imgsUrl[i].src;
                    // console.log("else"+joySrc)
                    imgsUrl[i].src = "./images/expression/smily.png";
                    setTimeout(function(){
                        app.changeFace(joySrc,res);
                    },smileDuration);// correct into smile
                }
            }

        }
        endtime = new Date().getTime()
        totalTime = endtime - app.slideStartTime;
        var delay = app.randomNumber(parseInt(app.lang.settings.tranisionWaitMin),parseInt(app.lang.settings.tranisionWaitMax));
        count--;
        var late = parseInt(app.lang.settings.lateClick);
        if(res){ 
            if(app.score.method){
                if(app.score.method.length!=0){
                    if(totalTime<late){
                        result = parseInt(app.lang.settings.sixteenScorePerHit - app.AccuracyPoints); 
                    }else{
                        result = parseInt(app.lang.settings.sixteenScorePerLateHit);
                    }
                }else{
                        result = parseInt(app.lang.settings.sixteenScorePerHit - app.AccuracyPoints);
                }
            }
            // delay = 2000;
            app.totalscore = app.totalscore + result;
        }else{
            result = 0;
        }
        // console.log(app.AccuracyPoints)
        app.score.method.push({
            "slideStartTime": app.slideStartTime,
            "endtime": endtime,
            "totalTime": totalTime,
            "result": result,
            "caseId": app.caseCount,
            "extra": ""
        });
        $(".myScore").text(app.totalscore);
       
        
        setTimeout(function(){
            app.clickStart = true;
            app.animateFamousRandom();
            app.chageFlipSession();
            //
            // Session.set("esTemplate", "es_surface" +app.getEdgerSwapper())
        },delay);
        app.displayProgress(1,app.AccuracyPoints,result)
        app.selectedImg(event,str)
    }
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
            app.startGame();
            $("#clickEvent2").css("-webkit-filter", "blur(0px)")
        },4000);
}
app.closeGame2 = function(){
    $("#tapTapLocal").css("display","none");
}
app.reStartGame2 = function(){   
    // app.score ={};
    $("#tapTap2").css("display","block");
    $("#tapTapEnded2").css("display","none");
    $(".gametimemins").text("00");
    $(".gametimeseconds").text(":00");  
    $(".myScore").text("0");
    app.closeCounter();
    // app.startGame();
    gamestart = false;
    app.totalscore = 0;
    seconds=0;
    mins=0;
    hours=0;
    // app.toggleEndRefesh();
}
