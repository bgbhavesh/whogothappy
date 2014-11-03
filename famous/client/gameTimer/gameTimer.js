app.startGame = function(){
	startTimer();
	console.log("game Started");
}

var hours =0;
var mins =0;
var seconds =0;



function startTimer(){
  	var timex = setTimeout(function(){
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
      	if(seconds >= 20){
				endGame();
		}
		else{
			startTimer();
		}
        
  },1000);
}
function endGame(){
	console.log("game Ended");
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
		data.emailid = cursorMe.emails[0].address;
		data.score = app.totalscore;
		data.allScore = app.score
		if(data.emailid)
			Meteor.call("genMail",data.emailid,data);
			Score.insert({"clientId":Meteor.userId(),"score":app.totalscore,"totalScore":app.score,"date" :tempDate});
	}
	app.modifyLastDate();
	app.sendmail(emails,data)
}    
/// the value of the class myScore is to be changed  
app.modifyLastDate = function(){
	var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()})
	var currentDate = new Date().getDate();
	console.log(cursorMe)
	if(cursorMe){
		// console.log("1")
		if(cursorMe.profile){
			// console.log("2")
			// if(cursorMe.profile.currentDate){
				// console.log("3")
				if(cursorMe.profile.currentDate != currentDate){
					// console.log("4")
					Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.currentDate":currentDate}});
				}
				if((cursorMe.profile.currentDate + 1)==currentDate){
					// console.log("5");
					if(cursorMe.profile.playContinuty){
						// console.log("6");
						var tDays = cursorMe.profile.playContinuty + 1;
						Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.playContinuty":tDays}});
					}else{
						// console.log("7");
						Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.playContinuty": 1}});
					}
				}else{
					Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.playContinuty": 1}});
				}
			// }
		}
	}
}
app.sendmail = function(emails,data){
	console.log(emails)
	for(var i=0,il=emails.length;i<il;i++){
		// console.log("kjsvbkjbkajbv");
		Meteor.call("genMail",emails[i],data);
	}

}