

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
app.lang.title = {};

app.lang.title.htmlTitle = "Who Got Happy?";

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
app.lang.gamePopUp.appUpdated = "Auto updated 4 hours ago";

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

app.lang.settings.bonus = 5;
app.lang.settings.gameLast = 10;
app.lang.settings.showSmileyMax = 1000;
app.lang.settings.showSmileyMin = 2000;
app.lang.settings.tranisionWaitMin = 2000;
app.lang.settings.tranisionWaitMax = 2500;
app.lang.settings.lateClick = 3500;
app.lang.settings.animationtype = 5;
app.lang.settings.sixteenHeightPercentage = 40;
app.lang.settings.sixteenScorePerHit = 10;
app.lang.settings.sixteenScorePerLateHit = 5;
app.lang.settings.sixteenTimeMultiplier = 2;
app.lang.settings.showSmiley = 25;
app.lang.settings.holdAfterSmileyShowFaceAgain = 111;
app.setting.gamestart = 50;

app.lang.carousel.page1Title = "Carousel First Page Title";
app.lang.carousel.page2Title = "Carousel Second Page Title";
app.lang.carousel.page3Title = "Carousel Third Page Title";
app.lang.carousel.page4Title = "Carousel Forth Page Title";

app.lang.carousel.page1Body = "Carousel First Page Body";
app.lang.carousel.page2Body = "Carousel Second Page Body";
app.lang.carousel.page3Body = "Carousel Third Page Body";
app.lang.carousel.page4Body = "Carousel Forth Page Body";


//if(app.get("lang"))
//	app.lang = app.get("lang");

var lang = navigator.language;
lang = lang.split("-");
var language = "lang_" +lang[0];
// console.log(language);
Meteor.subscribe("language",language);
Session.set("language",language);
UI.registerHelper("lang", function () {
	// ;
	try{
		var lang = Session.get("language");
		app.lang = Language.findOne({"_id":lang}) || app.lang;
		app.settings = app.lang.settings;
		// console.log(JSON.stringify(app.lang));
	if(app.lang.lastupdate)
		app.lang.lastupdateAgo = $.timeago(app.lang.lastupdate);
	}catch(err){
		return null;
	}
	return app.lang;
});


// UI.registerHelper("lang", function () {
// 	Session.get("langrefresh");
// 	return app.lang;
// });

// Meteor.startup(function(){
// 	console.log("start lang call")
// 	var mylan = navigator.language
// 	// console.log(mylan)
// 	// var mylan = "fr";
// 	Meteor.call("sendLang",mylan,function(err,data){
// 		if(data){
// 			// why is this not in the database?
// 			if(err)
// 				console.log(err)
// 			// if(data)
// 			console.log(data)
// 			app.lang = data;
// 			app.set("lang",data);
// 			Session.set("langrefresh",Random.id());
// 		}else{
// 			// console.log(err)
// 		}
// 	});
// 	// Meteor.call("sendSetting",mylan,function(err,data){
// 	// 	if(data){
// 	// 		app.setting = data;
// 	// 	}
// 	// });
// 	// Meteor.call("updateScore",app.setting,function(err,data){
// 	// 	console.log(data)
// 	// });
// });