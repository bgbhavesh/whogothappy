app.lang = {};

app.lang.table = {};
app.lang.menu = {};
app.lang.gamePopUp = {};
app.lang.alarm = {};
app.lang.email = {};
app.lang.scorebord = {};
app.lang.timer = {};
app.lang.scoretitle = {};
app.lang.menu.menu = "Menu";
app.lang.menu.home = "Home";
app.lang.menu.users = "Users";
app.lang.menu.admin = "Admin";
app.lang.menu.fbLogin = "Sign in with Facebook";
app.lang.menu.logout = "Logout";

app.lang.gamePopUp.restart = "Restart";
app.lang.gamePopUp.close = "close";
app.lang.gamePopUp.Start = "Start";
app.lang.gamePopUp.mgs1 = "Tap the happiest, most pleasant, most joyful face in the bunch! →";

app.lang.alarm.head = "Two Alarms";
app.lang.alarm.foot = "Thinks of two times ...";
app.lang.alarm.set = "Set";

app.lang.email.head = "Challenge Someone!";
app.lang.email.msg1 = "To invite and share.";
app.lang.email.msg2 = "Invite Friends";

app.lang.timer.game = "This Game";
app.lang.timer.score = "Score";
app.lang.timer.time = "Time";
app.lang.timer.tf = "True or False";
app.lang.timer.tt = "Time Taken";
app.lang.timer.user = "Users";

app.lang.scorebord.notyou = "Not you?";
app.lang.scorebord.days = "Days in a Row";
app.lang.scorebord.seen = "Last Seen";
app.lang.scorebord.mxscore = "Max Score";
app.lang.scorebord.email = "Email";

app.lang.scoretitle.attemted = "Attempted";
app.lang.scoretitle.lastscore = "Last score";
app.lang.scoretitle.missed = "Missed";

app.lang.table.week = "Weeks";
app.lang.table.col1 = "AM";
app.lang.table.col2 = "PM";
app.lang.table.d0 = "Sunday";
app.lang.table.d1 = "Monday";
app.lang.table.d2 = "Tuesday";
app.lang.table.d3 = "Wednesday";
app.lang.table.d4 = "Thursday";
app.lang.table.d5 = "Friday";
app.lang.table.d6 = "Saturday";


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
			// why is this not in the database?
			app.lang = data;
			Session.set("langrefresh",Random.id());
		}else{
			// console.log(err)
		}
	});
});