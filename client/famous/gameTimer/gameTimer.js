app.startGame = function(){
	$('.selected').html("");
	game1 = true;
	setTimeout(app.getcases, 1000);
	app.score = {};
	app.score.method = [];
	app.totalscore = 0;
	Score = [];
	startTimer();
	app.updateStreak();
	// console.log("game Started");
	gamestart = true;
	app.getGameTimer()
	app.onResize();
	app.gameId = app.createId();
}
var gamestart;
var hours =0;
var mins =0;
var seconds =0;
var timex;
var game1 = false;

// app.extraPoints  = 0;
Template.content.events({
    'click #endGame': function () {
        app.endBeforeTime();
    },
    // 'click .sortable figure img':function(event,tpl){
    // 	// console.log(this)

    // }
});

// Template.content.gestures({
//     'dragRight .sortable figure': function (ev,tpl) {
//         // app.endBeforeTime();
//         var forPlace = tpl;
//     	console.log(forPlace)   
//     	console.log(ev.gesture.deltaY)     
// 	}
// });

Template.GamerTimerimer.events({
    'click #endGame': function () {
    	app.endBeforeTime();
    },
    'click #reStart': function () {
		// console.log("game reStart");
    	app.reStartGame();
    },
    'click #shareWithFacebook' : function(){
    	app.shareWithFacebook();
    },
    'click #shareWithTwitter' : function(){
    	app.shareWithTwitter();
    },
    'click #shareWithAny' : function(){
    	app.shareWithAny();
    }
});
app.endBeforeTime = function(){
	if(gamestart){
    	var time = mins +":"+seconds;
    	// console.log(time)
    	endGame(time);
    	app.endGame2(time);
    	clearTimeout(timex);
	$('.selected').html("");

    }
}
app.getGameTimer = function(){
	app.totalscore = 0;
	// $(".sortable").makeCardsDraggable();
	var cursorMe = Meteor.user()
	if(cursorMe)
	{
		if(cursorMe.profile){
			if(cursorMe.profile.currentDate){
				var currentDate = new Date().getDate()
				if(cursorMe.profile.currentDate != currentDate){
					var currentHour = new Date().getHours();
					var firstAlarm = app.get("firstAlarm");
					if(!firstAlarm)
						firstAlarm = 6;
					if(currentHour < firstAlarm){
						// app.extraPoints += 4
						app.totalscore += 5;
					}
				}else{
					var currentHour = new Date().getHours();
					var secondAlarm = app.get("secondAlarm");
					if(!secondAlarm)
						secondAlarm = 9;
					if(currentHour < secondAlarm){
						var alarmflag = app.get("alarmflag");
						if(alarmflag){
							if(alarmflag != currentDate){
								// console.log("getGameTimer if")
								// app.extraPoints += 4
								app.totalscore += parseInt(app.lang.settings.bonus);
								app.set("alarmflag",currentDate);
							}
						}else{
							// console.log("getGameTimer else ")
							// app.extraPoints += 4
							app.totalscore += parseInt(app.lang.settings.bonus);
							app.set("alarmflag",currentDate);
						}
					}
				}
			}
		}
	}
}
function startTimer(){
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
				endGame();
				// app.endGame2();
		}
		else{
			startTimer();
		}	        
  	}else{
  		if(mins >= parseInt(app.lang.settings.gameLast)){
	  		$(".gametimemins").text('10');
			$(".gametimeseconds").text(':00');
				endGame();
				// app.endGame2();
		}
		else{
			startTimer();
		}	
  	}
  },1000);
}
var database;
var Score = new Array();
function endGame(EndedTime){
	$('.selected').html("");
	if (!game1) {return};
	$("#clickEvent").css("filter","blur(5px)");
	$("#clickEvent").css("-webkit-filter","blur(5px)");
	
	// $("#clickEvent2").css("filter","blur(5px)");
	// $("#clickEvent2").css("-webkit-filter","blur(5px)");
	app.arrangeDays();
	gamestart = false;
	// console.log("game Ending");
	// app.toggleEndRefesh();
	// console.log(app.totalscore);
	// console.log(app.score);
	var tempDate = new Date();
	tempDate.setHours(tempDate.getHours()+12);
	app.target_date = tempDate;
	app.openOverlay();
	// app.openOverlay2();
	var emails = {};
	emails  = app.getTextAreaEmails();
	var cursorMe = Meteor.user();
	var data = {};
	if(cursorMe){
		data._id = cursorMe._id;
		data.username = cursorMe.username;
		// if(cursorMe.emails)
		// 	data.emailid = cursorMe.emails[0].address;
		// else
		data.emailid = cursorMe.profile.email;
		// console.log(cursorMe.profile.email)
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
				// console.log("err");
				// console.log(err);
				// console.log("data");
				// console.log(data);
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
				// console.log(data)
			});

		}

	}
	app.modifyLastDate(data);
	// console.log(emails)
	if(emails)
		app.sendmail(emails,data);
	app.updateTheMaxScoreProfile();
	clearTimeout(timex);
	$("#pin").text("3");
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
app.endGame = endGame;
app.saveScoreLocal = function(Score){
	var cursor = app.get("Score")
	cursor.push(Score)
	app.set("Score",Score);
}
sendcacheData = setTimeout(function(){
	var cursor = app.get("Score");
	if(cursor){
		Meteor.call("sendcacheData",cursor, function(err, data) {
			if(data){
				app.set("Score","")
			}
		});
	}
},30000);
/// the value of the class myScore is to be changed  
app.resetStreak = function(){
	var currentDate = new Date().getDay();
	var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
	if(cursorMe){
		if(cursorMe.profile){
			// var curprofile = cursorMe.profile
			// var monthDiff = Math.abs(curprofile.currentMonth - currentMonth);
			// var dayDiff = Math.abs(curprofile.currentDate - currentDate);
			// if(dayDiff > 7 ){
			// 	if(monthDiff != 0)
			// 	Meteor.call("resetStreak",currentDate,function(err,data){
					
			// 	});
			// }

			var curprofile = cursorMe.profile
			// if(curprofile.dayofweek || curprofile.dayofweek == 0){
			// 	if(cursorMe.profile.dayofweek != currentDate){
			// 		Meteor.call("resetStreak",currentDate,function(err,data){
			// 			// console.log(err);
			// 			// console.log(data);
			// 			if(data)
			// 				setTimeout(app.arrangeDays, 1000);
			// 		});
			// 	}
			// }
			var differenceTime = new Date().getTime() - new Date(curprofile.lastPlayed).getTime();
			if(differenceTime >  604800000){//604000000
				Meteor.call("resetStreak",currentDate,function(err,data){
						// console.log(err);
						console.log("resetStreak");
						if(data)
							setTimeout(app.arrangeDays, 1000);
					});
			}		
		}
	}
}
app.updateStreak = function(endgame){
	var option = {};
	var time;
	option.day = new Date().getDay();
	var hour = new Date().getHours()
	if(hour < 9){
		option.first = true;
		time = "first";
	}else{
		option.second = true;
		time = "second";
	}
	if(endgame)
		option.endgame = true;
	else
		option.endgame = false;
	// console.log(option)
	Meteor.call("setStreak",option,function(err,data){
		console.log("updateStreak")
		if(data)
			setTimeout(app.arrangeDays, 100);
	});
}
app.getWeek = function(){
	Date.prototype.getWeek = function() {
	    var dt = new Date(this.getFullYear(),0,1);
	    return Math.ceil((((this - dt) / 86400000) + dt.getDay()-1)/7);
	};
	var year = new Date().getFullYear();
	var month = new Date().getMonth() + 1;
	var day = new Date().getDate()
	var myDate = new Date(year, month,day);
	return myDate.getWeek()
}
app.modifyLastDate = function(data){
	var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
	var currentDate = new Date().getDate();
	var dayofweek = new Date().getDay();
	// console.log(currentDate)
	if(cursorMe){
		if(cursorMe.profile){
				var currenttime = new Date()//.getHours() +":"+new Date().getMinutes()
				var currentWeek = app.getWeek();
				Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.lastPlayed":currenttime,"profile.lastScore":data.score,"profile.lastTried":data.clicked,"profile.lastWrong":data.wrong,"profile.lastWeek":currentWeek,"profile.dayofweek":dayofweek}});

				
				if(cursorMe.profile.currentDate != currentDate){
					Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.currentDate":currentDate}});
				}
					
				if((cursorMe.profile.currentDate + 1)==currentDate){
					if(cursorMe.profile.playContinuty){
						var tDays = parseInt(cursorMe.profile.playContinuty) + 1;
						Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.playContinuty":tDays}});
					}else{
						Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.playContinuty": 1}});
					}
				}else{
					Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.playContinuty": 1}});
				}
		}
	}
}
app.sendmail = function(emails,data){
	for(var i=0,il=emails.length;i<il;i++){ 
		var x = emails[i];
		var atpos = x.indexOf("@");
	    var dotpos = x.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	    }
	    else
	    {
			Meteor.call("genMail",emails[i],data,app.gameId);
	    }
	}

}
// app.updateTheProfile = function(){
//     var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
//     if(cursorMe){
//     	if(cursorMe.profile.maxScore || cursorMe.profile.maxScore == 0){
    		
//     	}
//     	else{
//     		Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.maxScore":0}});
//     	}
//     }
// }

app.getTextAreaEmails = function(){
	var emails = $("#getEmails").val();
	
    if(emails){
        var res = emails.split(",");
        return(res);
    }
}
app.updateTheMaxScoreProfile = function(){
    var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
    if(cursorMe){
    	if(cursorMe.profile.maxScore || cursorMe.profile.maxScore == 0){
    		if(app.totalscore > cursorMe.profile.maxScore){	
    			Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.maxScore":app.totalscore}});
    		}
    	}
    	else{
    		Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.maxScore":0}});
    	}
    }
}
app.updateTheProfile = function(){
    var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
    $(".playContinuty").text(cursorMe.profile.playContinuty);
    $(".maxScore").text(cursorMe.profile.maxScore);
}
app.EndRefesh = true; 
app.toggleEndRefesh = function(){
	app.EndRefesh = !app.EndRefesh;
	if(app.EndRefesh)
	{
		$(".endGame").css("display","block");
		$(".restart").css("display","none");
	}
	else{
		$(".restart").css("display","block");
		$(".endGame").css("display","none");
	}
	// console.log(app.EndRefesh+"app.EndRefesh")
}
app.reStartGame = function(){	
	// app.score ={};
	$("#tapTap").css("display","block");
	$("#tapTapEnded").css("display","none");
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

app.createId = function(){
  var h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  var k=['x','x','x','x','x','x','x','x','-','x','x','x','x','-','4','x','x','x','-','y','x','x','x','-','x','x','x','x','x','x','x','x','x','x','x','x'];
  var u='',i=0,rb=Math.random()*0xffffffff|0;
  while(i++<36) {
    var c=k[i-1],r=rb&0xf,v=c=='x'?r:(r&0x3|0x8);
    u+=(c=='-'||c=='4')?c:h[v];rb=i%8==0?Math.random()*0xffffffff|0:rb>>4
  }
  return u
}