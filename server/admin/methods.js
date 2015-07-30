Meteor.methods({
	"getPushId" : function(options){
		if(app.language.en)
		if(app.language.en.time){
			var title = app.language.en.time.alarmPushTitle;
			var body = app.language.en.time.alarmPushBody;
		}else
		{
			var title = "whogothappy";
			var body = "You have unseen Notification";
		}
		if(Meteor.userId())
			console.log(options)
			Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.pushId":options.pushId,"profile.pushServer":"android"}});
			app.pushServer.sendAndroid(body, [options.pushId], title, body,  1);
	},
	"sendPush" : function(pushId){
		if(app.language.en)
			if(app.language.en.time){
				var title = app.language.en.time.alarmPushTitle;
				var body = app.language.en.time.alarmPushBody;
			}else
			{
				var title = "whogothappy";
				var body = "You have unseen Notification";
			}
		if(user.profile.pushId){
			if(user.profile.pushDevice == "android"){
				app.pushServer.sendAndroid(body, [pushId], title, body, 1);
			}
			else{
				app.pushServer.sendIOS(
					"message.description", 
					user.profile.pushId, 
					"message.title", 
					"message.message", 
					1);
			}
		}
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
					if(option.endgame){
							id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"first":true,"endgame1":true}});
						}else{
							var cursor1 = Streak.findOne({"user":Meteor.userId(),"day": option.day,"first" : false});
							if(cursor1){
								id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"first":true,"endgame1":false}});
							}
							else{
								id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"first":true,"endgame1":true}});
							}
						}
						// var cursor2 = Streak.findOne({"user":Meteor.userId(),"day": option.day,"first":true,"endgame1" : true});
						// if(cursor2){
						// 	console.log(cursor2)
						// 	return;
						// }
						// id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"first":true,"endgame1":option.endgame}});
				}
				else if(option.second){
						if(option.endgame){
							id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"second":true,"endgame2":true}});
						}else{
							var cursor1 = Streak.findOne({"user":Meteor.userId(),"day": option.day,"endgame2" : false});
							if(cursor1){
								id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"second":true,"endgame2":false}});
							}
							else{
								id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"second":true,"endgame2":true}});
							}
						}
					
				}
			}
		}
		return id;
	},
	"resetStreak" : function(){
		var id;
		if(Meteor.userId()){
			// var cursor = Streak.findOne({"user":Meteor.userId(),"day": day});
			// if(cursor){
				// console.log("sdkjkjs")
				for (var i = 0; i < 7; i++) {
					// console.log("i="+i)
					var ids = Streak.update({"user":Meteor.userId(),"day": i},{$set:{"first":false,"endgame1":false,"second":false,"endgame2":false}});
					// console.log(ids)
				};
				
			// }
		}
		var cursor = Streak.findOne({"user":Meteor.userId()});
		return cursor;
	},
	"getCase" : function(oldcase){
		// var newcase = app.randomNumber(1,8)
		// if(oldcase)
		// 	if(oldcase == newcase)
		// 		newcase = app.randomNumber(1,8)


		// if(app.language.en){
		// 	if(app.language.en.time)
		// 		return app.language.en.time.alarmPushBody;
		// 	else
		// 		return "nothing"
		// }
		// else
		// 	return "nothing"
		return app.gameCase;//app.randomNumber(1,8);
	},
	"sendCase" : function(){
		return Cases.findOne({})
	},
	'imageClicked': function(data){
		if(ImageClicked.findOne({"src":data.SRC}))
		{
			// console.log(data)

			var obj = ImageClicked.findOne({"src":data.SRC});
			obj.click = Number(data.click) + 1 ;
			obj.timePerSlide = (obj.timePerSlide > data.timePerSlide)?obj.timePerSlide:data.timePerSlide;
			ImageClicked.update({"src":data.src},{$set:{"click":obj.click,"timePerSlide":obj.timePerSlide}})
		}
		else{
			ImageClicked.insert({"src":data.SRC,"click":1,"timePerSlide":data.timePerSlide})
		}
	},
	'imageMissed': function(data){
		if(ImageMissed.findOne({"src":data.SRC}))
		{
			// console.log(data)

			var obj = ImageMissed.findOne({"src":data.SRC});
			obj.click = Number(data.click) + 1 ;
			obj.timePerSlide = (obj.timePerSlide > data.timePerSlide)?obj.timePerSlide:data.timePerSlide;
			ImageMissed.update({"src":data.src},{$set:{"click":obj.click,"timePerSlide":obj.timePerSlide}})
		}
		else{
			ImageMissed.insert({"src":data.SRC,"click":1,"timePerSlide":data.timePerSlide})
		}
	},
});

app.sendpushtouser = function (pushId){
	if(app.language.en)
   if(app.language.en.time){
		var title = app.language.en.time.alarmPushTitle;
		var body = app.language.en.time.alarmPushBody;
	}else
	{
		var title = "whogothappy";
		var body = "You have unseen Notification";
	}
	if(user.profile.pushId){
		if(user.profile.pushDevice == "android"){
			app.pushServer.sendAndroid(body, [pushId], title, body, 1);
		}
		else{
			app.pushServer.sendIOS(
				body, 
				user.profile.pushId, 
				title, 
				body, 
				1);
		}
	}
	
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
app.gameCase =app.randomNumber(1,8);
app.changeCase = function(){
	app.gameCase = app.randomNumber(1,9)
	// console.log(app.gameCase);
}