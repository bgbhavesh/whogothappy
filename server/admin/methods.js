Meteor.methods({
	"getPushId" : function(options){
		if(Meteor.userId())
			console.log(options)
			Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.pushId":options.pushId,"profile.pushServer":"android"}});
			app.pushServer.sendAndroid("hello", [options.pushId], "whogothappy", "whogothappy", 1);
	},
	"sendPush" : function(pushId){
			app.pushServer.sendAndroid("Its Tme to play Game.", [pushId], "whogothappy", "whogothappy", 1);
	}
});