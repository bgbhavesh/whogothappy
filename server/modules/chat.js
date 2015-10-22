Meteor.methods({
	"updateChatCount" : function(){
		Follows.find({}).forEach(function(data){
			Follows.update({"_id":data._id},{$set : {"chatCount":0}});
		});
	}
});

Meteor.startup(function(){
	//return ; //block for a while
	Chat.find({"status":"client"}).observe({
	    "added" : function(first){
	        Chat.update({"_id":first._id},{$set : {"status":"server"}});
	        app.updateChatDependencies(first);
	    }
	});
	Chat.find({"status":"receive"}).observe({
	    "added" : function(first){
	        Chat.update({"_id":first._id},{$set : {"status":"checked"}});
	        Chat.update({"date":first.date,"message":first.message},{$set : {"status":"checked"}});
	    }
	});	
});

app.updateChatDependencies = function(cursorChat){
	if(cursorChat.position == "right"){
		app.createChatPush(cursorChat);
		app.updateChatReceiver(cursorChat);
		// console.log();
	}
}

app.createChatPush = function(cursorChat){
	var cursorMe = app.getMe(cursorChat.clientid);
	var cursorMeChat = app.getMe(cursorChat.chatid);
	var message = app.getUsername(cursorMe) +": " +cursorChat.message;
	if(cursorMeChat.pushid){
		app.pushToUser(cursorMeChat.pushid,message,cursorMeChat.pushtype,null,null);
	}
}

app.updateChatReceiver = function(cursorChat){
	var cursorFollows = Follows.findOne({"userid":cursorChat.chatid,"followid":cursorChat.clientid,"tapmateType":true});
	if(cursorFollows){
		Follows.update({"_id":cursorFollows._id},{$inc:{"chatCount":1}});
	}
}
