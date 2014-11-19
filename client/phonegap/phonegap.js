document.addEventListener('deviceready', function(){
	var alarm = new Alarm();
	var date = new Date().getTime() * 5000;
	alarm.setAlarm(date,function(error,success){alert("error " +error);alert("success " +success);})
}, false);