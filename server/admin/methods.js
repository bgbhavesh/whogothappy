Meteor.methods({
	"getPushId" : function(options){
		if(Meteor.userId())
			console.log(options)
			Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.pushId":options.pushId,"profile.pushServer":"android"}});
			app.pushServer.sendAndroid("hello", [options.pushId], "whogothappy", "whogothappy", 1);
	},
	"sendPush" : function(pushId){
			app.pushServer.sendAndroid("Its Tme to play Game.", [pushId], "whogothappy", "whogothappy", 1);
	},
	"setAlarm" : function(options){
		console.log("setAlarm");
		options.userId = Meteor.userId();
		return app.setAlarm(options);
	},
	"setStreak" : function(option){
		var id;
		if(Meteor.userId()){
			var cursor = Streak.findOne({"_id":Meteor.userId(),"day": option.day});
			if(!cursor){
				if(option.first)
					id = Streak.insert({"_id":Meteor.userId(),"day": option.day,"first":true});
				else if(option.second)
					id = Streak.insert({"_id":Meteor.userId(),"day": option.day,"second":true});
			}else{
				if(option.first)
					id = Streak.update({"_id":Meteor.userId(),"day": 2},{$set:{"first":true}});
				else if(option.second)
					id = Streak.update({"_id":Meteor.userId(),"day": 2},{$set:{"second":true}});
			}
		}
		return id;
	},
});
app.sendpushtouser = function (pushId){
   app.pushServer.sendAndroid("Its Tme to play Game.", [pushId], "whogothappy", "whogothappy", 1);
}