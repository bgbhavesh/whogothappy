Meteor.methods({
	"getPushId" : function(options){
		if(Meteor.userId())
			Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.pushId":options.pushId,"profile.pushServer":options.pushDevice}});
			app.pushServer.sendAndroid("hello", [options.pushId], "whogothappy", "whogothappy", 1);
	}
});