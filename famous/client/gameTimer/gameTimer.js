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
		      	$("#gametimemins").text('0'+mins+':');}       
			else 
				$("#gametimemins").text(mins+':');
       	}    
    	if(seconds <10) {
			$("#gametimeseconds").text('0'+seconds);} 
		else {
			$("#gametimeseconds").text(seconds);
      	}
      	if(seconds >= 10){
				endGame();
		}
		else{
			startTimer();
		}
        
  },1000);
}
function endGame(){
	console.log("game Ended");
	// console.log(app.totalscore);
	// console.log(app.score);
	var tempDate = new Date();
	tempDate.setHours(tempDate.getHours()+12);
	app.target_date = tempDate;
	var cursorMe = Meteor.user();
	var data = {};
	if(cursorMe){
		data._id = cursorMe._id;
		data.username = data.username;
		data.emailid = data.emails[0].address;
		data.score = app.totalscore;
		data.allScore = app.score
		if(data.emailid)
			Meteor.call("genMail",data.emailid,data);
	}
	app.totalscore = 0;
	app.score = {};
}    
