app.startup = function(){

}
Meteor.startup(app.startup);

app.deviceReady = function(){}
document.addEventListener("deviceready", app.deviceReady, false);

app.onPause = function(){}
document.addEventListener("pause", app.onPause, false);

app.onResume = function(){}
document.addEventListener("resume", app.onResume, false);
