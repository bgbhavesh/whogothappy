document.addEventListener('deviceready', function(){
	app.alarm = new Alarm();
	// var date = new Date().getTime() * 5000;
	// app.alarm.setAlarm(date,function(){});
	// function(error,success){alert("error " +error);alert("success " +success);}
	app.onRegisterPushNotification();
}, false);

app.setAlarm = function(time,type){
	var tempTime = time;
	time = time.split(":");
	var hour = time[0];
	var min = time[1];
	var date = new Date();
	date.setHours(hour);
	date.setMinutes(min);
	date.setSeconds(0);

	var nowDate = new Date().getTime();
	if(date.getTime() < nowDate){
		date = date + 86400000;
	}
	// if(app.alarm)
	// 	app.alarm.setAlarm(date,function(){});


	date = app.convertServerTime(date);
	// var user = Meteor.users.findOne({"_id":Meteor.userId()});
	// if(app.pushId){
		var options = {};
		options.hour = Number(date.getHours());
		options.min = Number(date.getMinutes());
		options.localtime = tempTime;
		options.pushId = app.pushId;
		options.type = type;
		Meteor.call("setAlarm",options,function(){});
	// }

	console.log("setAlarm at " +date);
	return true;
}

app.convertServerTime = function (clientDate){
	clientDate = new Date(clientDate);
	//EST
	offset = -5.0
	utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
	serverDate = new Date(utc + (3600000*offset));
	return serverDate;
}