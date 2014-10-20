
app.deviceready = function(){
	var startTime = new Date().getTime();
    log("deviceready " +startTime,1);
	app.phonegap = true;
	app.device = device;
	app.getGeoLocation();
	setTimeout(app.onRegisterPushNotification,5000);
	log("deviceready " +(new Date().getTime() - startTime),1);
}

document.addEventListener("deviceready",app.deviceready, false);
document.addEventListener("pause",app.onPause, false);

app.onPause = function(){
	var startTime = new Date().getTime();
    log("onPause " +startTime,1);
	app.closeWatchGPS(app.watchId);
	log("onPause " +(new Date().getTime() - startTime),1);
}
app.closeWatchGPS = function(watchId){
	var startTime = new Date().getTime();
    log("closeWatchGPS " +startTime,1);
	if(watchId){
		navigator.geolocation.clearWatch(watchId);
	}
	log("closeWatchGPS " +(new Date().getTime() - startTime),1);
}
app.fbInit = function(){
	var startTime = new Date().getTime();
    log("fbInit " +startTime,1);
	FB.init({ 
		appId: "738622862852250", 
		nativeInterface: CDV.FB, 
		useCachedDialogs: false 
    });
    log("fbInit " +(new Date().getTime() - startTime),1);
}

