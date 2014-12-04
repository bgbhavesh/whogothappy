app.startup = function(){
	app.resetStreak();
	// app.arrangeDays()
	setTimeout(app.arrangeDays, 3000);
}
Meteor.startup(app.startup);

app.deviceReady = function(){app.phonegap=true;}
document.addEventListener("deviceready", app.deviceReady, false);

app.onPause = function(){}
document.addEventListener("pause", app.onPause, false);

app.onResume = function(){}
document.addEventListener("resume", app.onResume, false);







Template.docs.events({

});

Template.home.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
});
Template.register.events({
// 'click #Login': function () {
//   // increment the counter when button is clicked
//   // Session.set("counter", Session.get("counter") + 1);
//   console.log("sdvkjbsdkj")
// }
	"click #registerButton" : function(event){
		app.register(event);
	}
});
Template.login.events({
    'click #registerform .submit': function () {
      app.register
    },
    'click #goToRegister': function () {
      app.setRoute("#register");
    },
    'click #loginButton': function () {
      app.login();
    },
    "click #loginScreenFacebook" : function(){
		app.loginWithFacebook();
	}
});
Template.users.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
});
