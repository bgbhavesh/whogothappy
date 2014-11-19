app.lang = {};

app.lang.menu = {};
app.lang.gamePopUp = {};
app.lang.alarm = {};
app.lang.email = {};
app.lang.scorebord = {};
app.lang.timer = {};
app.lang.menu.menu = "Menu";
app.lang.menu.home = "Home";
app.lang.menu.users = "Users";
app.lang.menu.admin = "Admin";
app.lang.menu.fbLogin = "Facebook Login";
app.lang.menu.logout = "Logout";

app.lang.gamePopUp.restart = "Restart";
app.lang.gamePopUp.close = "close";
app.lang.gamePopUp.Start = "Start";
app.lang.gamePopUp.mgs1 = "Tap the happiest, most pleasant, most joyful face in the bunch! →";

app.lang.alarm.head = "Two Alarms";
app.lang.alarm.foot = "Thinks of two times ...";

app.lang.email.head = "Challenge Someone!";
app.lang.email.msg1 = "To invite and share.";
app.lang.email.msg2 = "Invite Friends";

app.lang.timer.game = "This Game";
app.lang.timer.score = "Score";
app.lang.timer.time = "Time";

app.lang.scorebord.days = "Days in a Row";
app.lang.scorebord.seen = "Last Seen";
app.lang.scorebord.mxscore = "Max Score";
app.lang.scorebord.email = "Email";


UI.registerHelper("lang", function () {
	Session.get("langrefresh");
	return app.lang;
});

Meteor.startup(function(){
	console.log("start lang call")
	var mylan = navigator.language
	// console.log(mylan)
	// var mylan = "fr";
	Meteor.call("sendLang",mylan,function(err,data){
		if(data){
			app.lang = data;
			Session.set("langrefresh",Random.id());
		}else{
			// console.log(err)
		}
	});
});