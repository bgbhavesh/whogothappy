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
					console.log(option)
					id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"first":true,"endgame1":option.endgame}});
				}
				else if(option.second)
					id = Streak.update({"user":Meteor.userId(),"day": option.day},{$set:{"second":true,"endgame2":option.endgame}});
			}
		}
		return id;
	},
	"resetStreak" : function(options){
		Streak.remove({});
		return true;
	},
});

app.sendpushtouser = function (pushId){
   app.pushServer.sendAndroid("Its Tme to play Game.", [pushId], "whogothappy", "whogothappy", 1);
}