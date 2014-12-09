Meteor.methods({
	"getPushId" : function(options){
		if(app.language.en.time){
			var title = app.language.en.time.alarmPushTitle;
			var body = app.language.en.time.alarmPushBody;
		}else
		{
			var title = "whogothappy";
			var body = "whogothappy";
		}
		if(Meteor.userId())
			console.log(options)
			Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.pushId":options.pushId,"profile.pushServer":"android"}});
			app.pushServer.sendAndroid(body, [options.pushId], title, body,  1);
	},
	"sendPush" : function(pushId){
			if(app.language.en.time){
				var title = app.language.en.time.alarmPushTitle;
				var body = app.language.en.time.alarmPushBody;
			}else
			{
				var title = "whogothappy";
				var body = "whogothappy";
			}
			app.pushServer.sendAndroid(body, [pushId], title, body, 1);
	},
	"setStreak" : function(option){
		var id;
		if(Meteor.userId()){
			var cursor = Streak.findOne({"user":Meteor.userId(),"day": option.day});
			if(!cursor){
				if(option.first)
					id = Streak.insert({"user":Meteor.userId(),"day": option.day,"first":true,"endgame1":option.endgame});
				else if(option.second)
					id = Streak.insert({"user":Meteor.userId(),"day": option.day,"second":true,"endgame2":option.endgame});
			}else{
				if(option.first){
					id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"first":true,"endgame1":option.endgame}});
				}
				else if(option.second){
					id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"second":true,"endgame2":option.endgame}});
				}
			}
		}
		return id;
	},
	"resetStreak" : function(day){
		console.log(day)
		var id;
		if(Meteor.userId()){
			var cursor = Streak.findOne({"user":Meteor.userId(),"day": day});
			if(cursor){
				id = Streak.update({"user":Meteor.userId(),"day": day},{$set:{"first":false,"endgame1":false,"second":false,"endgame2":false}});
			}
		}
		return id;
	},
	"getCase" : function(oldcase){
		// var newcase = app.randomNumber(1,8)
		// if(oldcase)
		// 	if(oldcase == newcase)
		// 		newcase = app.randomNumber(1,8)

		return app.randomNumber(1,9);
	},
});

app.sendpushtouser = function (pushId){
   if(app.language.en.time){
		var title = app.language.en.time.alarmPushTitle;
		var body = app.language.en.time.alarmPushBody;
	}else
	{
		var title = "whogothappy";
		var body = "whogothappy";
	}
	app.pushServer.sendAndroid(body, [pushId], title, body, 1);
}

app.randomNumber = function(snum, bnum){
	var value = Math.floor((Math.random()*bnum)+1);
	if(value >= snum && value <= bnum){
		return value
	}
	else{
		return randomNumber(snum, bnum);
	}
}