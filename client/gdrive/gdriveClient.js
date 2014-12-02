app.lang = {};
// app.setting = {};

app.lang.table = {};
app.lang.menu = {};
app.lang.gamePopUp = {};
app.lang.alarm = {};
app.lang.email = {};
app.lang.scorebord = {};
app.lang.timer = {};
app.lang.scoretitle = {};
app.lang.settings = {};
app.lang.settings.time = {};
app.lang.carousel = {};
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

app.lang.table.week = "Last";
app.lang.table.col1 = "AM";
app.lang.table.col2 = "PM";
app.lang.table.d0 = "S";
app.lang.table.d1 = "M";
app.lang.table.d2 = "T";
app.lang.table.d3 = "W";
app.lang.table.d4 = "T";
app.lang.table.d5 = "F";
app.lang.table.d6 = "S";

app.lang.settings.tranisionWait = 50;
app.lang.settings.animationtype = 5;
app.lang.settings.sixteenHeightPercentage = 40;
app.lang.settings.sixteenScorePerHit = 10;
app.lang.settings.sixteenTimeMultiplier = 50;
app.lang.settings.time.showSmiley = 25;
app.lang.settings.time.holdAfterSmileyShowFaceAgain = 111;
// app.setting.gamestart = 50;

app.lang.carousel.page1Title = "Carousel First Page Title";
app.lang.carousel.page2Title = "Carousel Second Page Title";
app.lang.carousel.page3Title = "Carousel Third Page Title";
app.lang.carousel.page4Title = "Carousel Forth Page Title";

app.lang.carousel.page1Body = "Carousel First Page Body";
app.lang.carousel.page2Body = "Carousel Second Page Body";
app.lang.carousel.page3Body = "Carousel Third Page Body";
app.lang.carousel.page4Body = "Carousel Forth Page Body";

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
	// Meteor.call("sendSetting",mylan,function(err,data){
	// 	if(data){
	// 		app.setting = data;
	// 	}
	// });
	// Meteor.call("updateScore",app.setting,function(err,data){
	// 	console.log(data)
	// });
});