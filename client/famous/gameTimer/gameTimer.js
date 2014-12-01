app.startGame = function(){
	startTimer();
	console.log("game Started");
	gamestart = true;
	app.getGameTimer()
}
var gamestart;
var hours =0;
var mins =0;
var seconds =0;
var timex;

// app.extraPoints  = 0;
Template.content.events({
    'click #endGame': function () {
        app.endBeforeTime();
    }
});
Template.GamerTimerimer.events({
    'click #endGame': function () {
    	app.endBeforeTime();
    },
    'click #reStart': function () {
		console.log("game reStart");
    	app.reStartGame();
    }
});
app.endBeforeTime = function(){
	if(gamestart){
    	var time = mins +":"+seconds
    	// console.log(time)
    	endGame(time);
    	clearTimeout(timex);
    }
}
app.getGameTimer = function(){
	app.totalscore = 0;
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
								console.log("getGameTimer if")
								// app.extraPoints += 4
								app.totalscore += 5;
								app.set("alarmflag",currentDate);
							}
						}else{
							console.log("getGameTimer else ")
							// app.extraPoints += 4
							app.totalscore += 5;
							app.set("alarmflag",currentDate);
						}
					}
				}
			}
		}
	}
}
function startTimer(){
	app.updateStreak();
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
	  	if(seconds >= 10){
	  		$(".gametimemins").text('10');
			$(".gametimeseconds").text(':00');
				endGame();
		}
		else{
			startTimer();
		}	        
  	}else{
  		if(mins >= 10){
	  		$(".gametimemins").text('10');
			$(".gametimeseconds").text(':00');
				endGame();
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
	$("#clickEvent").css("filter","blur(5px)");
	$("#clickEvent").css("-webkit-filter","blur(5px)");
	app.arrangeDays();
	gamestart = false;
	console.log("game Ended");
	// app.toggleEndRefesh();
	// console.log(app.totalscore);
	// console.log(app.score);
	var tempDate = new Date();
	tempDate.setHours(tempDate.getHours()+12);
	app.target_date = tempDate;
	app.openOverlay();
	var emails = {};
	emails  = app.getTextAreaEmails();
	var cursorMe = Meteor.user();
	var data = {};
	if(cursorMe){
		data._id = cursorMe._id;
		data.username = cursorMe.username;
		if(cursorMe.emails)
			data.emailid = cursorMe.emails[0].address;
		else
			data.emailid = cursorMe.email;
		data.score = app.totalscore;
		data.clicked = app.score.method.length;
		data.wrong = app.score.method.length - app.totalscore;
		data.allScore = app.score;
		if(EndedTime){
			data.gameEnd = EndedTime;
		}else{
			// if(!app.debug)
			data.gameEnd = "10:00";
		}
		// console.log(data.emailid)
		if(data.emailid)
			Meteor.call("genMail",data.emailid,data);//* *//
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
	}
	app.modifyLastDate(data);
	app.updateStreak("true");
	console.log(emails)
	if(emails)
		app.sendmail(emails,data);
	app.updateTheMaxScoreProfile();
	clearTimeout(timex);
	$("#pin").text("3");
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
app.updateStreak = function(endgame){
	var currentWeek = app.getWeek();
	var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
	if(cursorMe){
		if(cursorMe.profile){
			if(cursorMe.profile.lastWeek){
				if(cursorMe.profile.lastWeek == currentWeek){
					Meteor.call("resetStreak",option,function(err,data){
						// console.log(err);
						// console.log(data);
					});
				}
			}
		}
	}
	var option = {};
	option.day = new Date().getDay();

	var hour = new Date().getHours()
	if(hour < 9)
		option.first = true;
	else
		option.second = true;


	if(endgame)
		option.endgame = true;
	else
		option.endgame = false;

	Meteor.call("setStreak",option,function(err,data){
		// console.log(err);
		// console.log(data);
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
	console.log(cursorMe)
	if(cursorMe){
		if(cursorMe.profile){
				var currenttime = new Date()//.getHours() +":"+new Date().getMinutes()
				var currentWeek = app.getWeek();
				Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.lastPlayed":currenttime,"profile.lastScore":data.score,"profile.lastTried":data.clicked,"profile.lastWrong":data.wrong,"profile.lastWeek":currentWeek}});

				
				if(cursorMe.profile.currentDate != currentDate){
					Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.currentDate":currentDate}});
				}
				if((cursorMe.profile.currentDate + 1)==currentDate){
					if(cursorMe.profile.playContinuty){
						var tDays = cursorMe.profile.playContinuty + 1;
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
	console.log(emails)
	for(var i=0,il=emails.length;i<il;i++){
		Meteor.call("genMail",emails[i],data);
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
	console.log(app.EndRefesh+"app.EndRefesh")
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