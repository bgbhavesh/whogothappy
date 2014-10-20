app.deviceready = function(){
	var starttime = new Date().getTime();
    log("deviceready " +starttime,1);
	app.phonegap = true;
	app.device = device;
	app.getGeoLocation();
	setTimeout(app.onRegisterPushNotification,5000);
	log("deviceready " + (new Date().getTime() - starttime),1);
}

document.addEventListener("deviceready",app.deviceready, false);
document.addEventListener("pause",app.onPause, false);

app.onPause = function(){
	var starttime = new Date().getTime();
    log("onPause " +starttime,1);
	app.closeWatchGPS(app.watchId);
	log("onPause " + (new Date().getTime() - starttime),1);
}
app.closeWatchGPS = function(watchId){
	var starttime = new Date().getTime();
    log("closeWatchGPS " +starttime,1);
	if(watchId){
		navigator.geolocation.clearWatch(watchId);
	}
	log("closeWatchGPS " + (new Date().getTime() - starttime),1);
}
app.fbInit = function(){
	var starttime = new Date().getTime();
    log("fbInit " +starttime,1);
	FB.init({ 
		appId: "738622862852250", 
		nativeInterface: CDV.FB, 
		useCachedDialogs: false 
    });
    log("fbInit " + (new Date().getTime() - starttime),1);
}

