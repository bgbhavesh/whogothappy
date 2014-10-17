
app.deviceready = function(){
	app.phonegap = true;
	app.device = device;
	app.getGeoLocation();
	setTimeout(app.onRegisterPushNotification,5000);
}

document.addEventListener("deviceready",app.deviceready, false);
document.addEventListener("pause",app.onPause, false);

app.onPause = function(){
	app.closeWatchGPS(app.watchId);
}
app.closeWatchGPS = function(watchId){
	if(watchId){
		navigator.geolocation.clearWatch(watchId);
	}
}
app.fbInit = function(){
	FB.init({ 
		appId: "738622862852250", 
		nativeInterface: CDV.FB, 
		useCachedDialogs: false 
    });
}

