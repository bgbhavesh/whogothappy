document.addEventListener('deviceready', function(){
	app.alarm = new Alarm();
	// var date = new Date().getTime() * 5000;
	// app.alarm.setAlarm(date,function(){});
	// function(error,success){alert("error " +error);alert("success " +success);}
}, false);

app.setAlarm = function(time){
	time = time.split(":");
	var hour = time[0];
	var min = time[1];
	var date = new Date();
	date.setHours(hour);
	date.setMinutes(min);
	var nowDate = new Date().getTime();
	if(date.getTime() < nowDate){
		date = date + 86400000;
	}
	if(app.alarm)
		app.alarm.setAlarm(date,function(){});
	console.log("setAlarm at " +time);
}