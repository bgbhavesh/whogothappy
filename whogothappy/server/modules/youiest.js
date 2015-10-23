Meteor.methods({
	"touch" : function(clientid){
		this.unblock();
		if(app.debug){
			Meteor.setTimeout(function(){app.modifyFollowsTimeStamp(clientid);},50);
			var feedArray = [];
            var arrayFeed = Feed.find({"clientid" : clientid,"display":"n"},{"limit":100}).fetch();
            for(var i=0,il=arrayFeed.length;i<il;i++){
                if(arrayFeed[i])
                feedArray.push(arrayFeed[i].likeid);
            }
            arrayFeed = Votes.find({"clientid" : clientid},{"limit":100}).fetch();
            for(var i=0,il=arrayFeed.length;i<il;i++){
                if(arrayFeed[i])
                feedArray.push(arrayFeed[i].likeid);
            }
			var length = Feed.find({"clientid" : clientid,"likeid":{$nin : feedArray},"display":"y"},{sort :{"type":1}}).fetch().length;
			// var length = Feed.find({"clientid" : clientid,"display":"y"}).fetch().length
			console.log("DebugFace touch " +length);
			Meteor.setTimeout(function(){app.checkDisplayOnTouch(clientid);},50);
			if(length > 500)
				return;
		}
		if(length > 500){
			console.log("too much of data already.");
			return;
		}
		console.log("touch " +clientid);
		Meteor.setTimeout(function(){app.touchTimeOut(clientid);},100);

		return app.getFace(clientid);
	},
	"follow" : function(clientid,followid){
		// if(app.debug)
		// 	return;
		console.log("follow " +clientid)
		app.followYouiest(clientid,followid);
	},
	"touchYouiest" : function(clientid){
		Meteor.setTimeout(function(){Meteor.call("globalfeed",clientid);},100);
		Meteor.setTimeout(function(){Meteor.call("usersVotesAdd",clientid);},100);
	}
});

app.touchTimeOut = function(clientid){
	console.log("app.touchTimeOut");
	// Meteor.setTimeout(function(){app.twentyFourLastOpen(clientid);},1000);
	// Meteor.setTimeout(function(){app.foneHourLastOpen(clientid);},1000);
	// Meteor.setTimeout(function(){app.fourHourLastOpen(clientid);},1000);
	Meteor.setTimeout(function(){app.checkDisplayOnTouch(clientid);},50);
	Meteor.setTimeout(function(){app.modifyFollowsTimeStamp(clientid);},50);
	Meteor.setTimeout(function(){Meteor.call("touchFacebook",clientid);},300000);
	Meteor.setTimeout(function(){Meteor.call("touchInstagram",clientid);},100);
	Meteor.setTimeout(function(){Meteor.call("touchYouiest",clientid);},300000);
}
app.modifyFollowsTimeStamp = function(clientid){
	Follows.find({"followid":clientid}).forEach(function(data){
        Follows.update({"_id":data._id},{$set:{"date" : new Date().getTime()}})
    });
}
app.followYouiest = function(clientid,followid){
	if(clientid == followid)
		return;
	var clientCursor = app.getMe(clientid);
	var followCursor = app.getMe(followid);
	var insert = {};
	if(clientCursor && followCursor){

		// Tapmate follows logic
		insert = {"followid": followid,"hits":0,"profile_picture": followCursor.getPicture(),"userid": clientid,"username": followCursor.getName()};
		insert.chatId = app.getChatId(clientid, followid);
		insertFollow = {"followid": clientid,"hits":0,"profile_picture": clientCursor.getPicture(),"userid": followid ,"username": clientCursor.getName()};
		insert = app.setAdditionFollowsTapmate(insert);
		app.insertOrUpdateFollows(insert);
		insertFollow = app.setAdditionFollowsTapmate(insertFollow);
		app.insertOrUpdateFollows(insertFollow);

		if(clientCursor.instagramToken && followCursor.instagramToken)
			Meteor.call("followOnInstagram",clientCursor.instagramID,followCursor.instagramID,clientCursor.instagramToken);
		if(clientCursor.fbAccessToken && followCursor.fbAccessToken)
			Meteor.call("followOnFacebook",clientCursor.facebookID,followCursor.facebookID,clientCursor.fbAccessToken);
	}
}

app.getMe = function(clientid){
	// return Me.findOne({"clientid":clientid});
	return Meteor.users.findOne(clientid);
}

app.getUsername = function(cursorMe){
	return cursorMe.username || cursorMe.instagramUsername || cursorMe.facebookName;
}

app.setAdditionFeeds = function(feed){
	// console.log(feed);
	var MeCursor = Me.findOne({"_id":feed.clientid});
	// if(!MeCursor){
	// 	MeCursor = Me.findOne({"instagramID":feed.clientid});
	// }
	if(MeCursor)
		feed.face = MeCursor.face;
	feed.date = new Date().getTime();
	return feed;
}

app.checkDisplayOnTouch = function(clientid){
	var arrayFeed = Feed.find({"display" : { '$exists': false }}).fetch();
	for(var i=0,il=arrayFeed.length;i<il;i++){
		if(arrayFeed[i])
			Feed.update({"_id":arrayFeed[i]._id},{$set : {"display" : "y"}})
	}
}

app.insertOrUpdateFeeds = function(insert){
	var cursorFeeds = null;
	cursorFeeds = Feed.findOne({"clientid":insert.clientid,"likeid":insert.likeid});
	insert = app.setAdditionFeeds(insert);
	app.formatData(insert);
	if(!insert.date)
		insert.date = app.getDate();
	if(cursorFeeds){
		delete insert.display;
		Feed.update({"_id":cursorFeeds._id},insert);
		return false;
	}
	else{
		return app.insertFeed(insert); //Feed.insert(insert);
	}
}

app.insertOrUpdateFollows = function(insert){
	var cursorFollows = null;
	var find = {"followid":insert.followid,"userid":insert.userid};
	if(insert.followType)
		find[insert.followType] = true;
	cursorFollows = Follows.findOne(find);

	if(cursorFollows){
		delete hits;
		delete insert._id;
		Follows.update({"_id":cursorFollows._id},insert);
	}
	else{
		insert.date = new Date().getTime();
		Follows.insert(insert);
	}
}

app.setAdditionFeedsFacebook = function(feed){
	feed.facebookType = true;
	return feed;
}

app.setAdditionFeedsInstagram = function(feed){
	feed.instagramType = true;
	return feed;
}


Meteor.startup(function(){
	if(!app.debug){
	  Meteor.users.find().forEach(function(user){
	  	TapmateNotification.insert({
	      "senderid": user._id,
	      "message": "An update is available on Tapmate",
	      "notify": false,
	      "pushType": "youiest"
	    });
	  });
	}
});