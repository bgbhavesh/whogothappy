Alarm = function(){

}

Alarm.prototype.setAlarm = function(date,callback){
	var newdate = new Date(date).getTime();
	if(!callback)
		callback = function(){}
	cordova.exec(function(success){callback(null,success)},function(error){callback(error,null)},"Alarm","setAlarm",[newdate]);
}
Alarm.prototype.success = function(arg){
	// alert("success");
	// alert(arg);
}
Alarm.prototype.error = function(err){
	// alert("error");
	// alert(err);
}

// // Alarm = function(){

// // };
// // Alarm.prototype.setAlarm = function(options){
// // 	var args = [];
// // 	args.push(options.hour);
// // 	args.push(options.minutes);

// // 	cordova.exec(Alarm.onSuccess,Alarm.onError,"Alarm","startAlarm",args);
// // }

// // Alarm.prototype.onSuccess = function(result){
// //     alert(result);
// // }
// // Alarm.prototype.onError = function(error){
// //     alert("error");
// //     alert(error);
// // }

// Alarm = {};
// Alarm.ready = false;
// Alarm.init = function(serverUrl,appKey){
// 	// cordova.exec(Alarm.onSuccess,Alarm.onError,"Alarm","init",[serverUrl,appKey]);
// }
// Alarm.setAlarm = function(options){
// 	alert("setAlarm");
// 	// cordova.exec(Alarm.onSuccess,Alarm.onError,"Alarm","startAlarm",[args]);
// }
// Alarm.start = function(){
// 	alert("start");
// 	// cordova.exec(Alarm.onSuccess,Alarm.onError,"Alarm","start",[]);
// }
// Alarm.stop = function(){
// 	cordova.exec(Alarm.onSuccess,Alarm.onError,"Alarm","stop",[]);
// }
// Alarm.deviceready = function(){
// 	Alarm.ready = true;
// 	//testing
// }

// Alarm.onSuccess = function(result){
// 	alert(result);
// }
// Alarm.onError = function(error){
// 	alert("error");
// 	// alert(error);
// }
// Alarm.demo = function(){
	
// }
// document.addEventListener("deviceready", Alarm.deviceready, false);