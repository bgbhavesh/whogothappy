app.lang = {};

app.lang.menu = {};
app.lang.gamePopUp = {};
app.lang.menu.menu = "Menu";
app.lang.menu.home = "Home";
app.lang.menu.users = "Users";
app.lang.menu.admin = "Admin";
app.lang.menu.fbLogin = "Facebook Login";
app.lang.menu.logout = "Logout";

app.lang.gamePopUp.close = "close";
app.lang.gamePopUp.Start = "Start";
app.lang.gamePopUp.mgs1 = "Tap the happiest, most pleasant, most joyful face in the bunch! ";



UI.registerHelper("lang", function () {
	Session.get("langrefresh");
	return app.lang;
});

Meteor.startup(function(){
	console.log("start lang call")
	Meteor.call("sendLang",function(err,data){
		if(data){
			app.lang = data;
			Session.set("langrefresh",Random.id());
			console.log(data)
		}else{
			// console.log(err)
		}
	});
});