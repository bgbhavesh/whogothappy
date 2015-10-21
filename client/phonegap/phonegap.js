
app.deviceready = function(){
	app.phonegap = true;
	app.device = device;
	setTimeout(app.onRegisterPushNotification,50);
	if(window.StatusBar){
		StatusBar.hide();
	}
	if(navigator.splashscreen)
	navigator.splashscreen.hide();
}
app.phonegap = Meteor.isCordova;
app.onPause = function(){

}

app.onResume = function(){

}

Meteor.startup(function(){
  if(Meteor.isCordova)
    app.deviceready();
});


document.addEventListener("deviceready",app.deviceready, false);
document.addEventListener("pause",app.onPause, false);
document.addEventListener("resume",app.onResume, false);
