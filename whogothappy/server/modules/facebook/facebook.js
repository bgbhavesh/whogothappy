// DECLARE
// app = {};
app.defaultFacebookId = ["532514594","100000002030165","100000488108267","1797896033"];
// DECLARE

// METHODS

Meteor.methods({
    "getMyFacebookInfo" : function(state){
        console.log("getMyFacebookInfo " +state)
        var cursorMe = Me.findOne({"state":state});
        // console.log(cursorMe);
        if(!cursorMe)
        	return false;
        app.initializeFacebookUser(cursorMe);
        return cursorMe;
    },
    "setMyFacebookInfo" : function(insert){
    	console.log("setMyFacebookInfo")
    	// console.log(insert)
        var cursorMe = Me.findOne({"_id":insert._id});
        insert = app.setAdditionFacebook(insert);
        if(cursorMe){
        	delete insert._id;
            Me.update({"_id":cursorMe._id},{$set : insert})
        }
        else{
            Me.insert(insert);
            cursorMe = insert;
        }
        app.initializeFacebookUser(cursorMe);

        return true;
    },
    "verifyHashFacebookEmail" : function(email){
        try{
            console.log("verifyHashEmail " +email)
            var cursorUserHashMania = Me.findOne({"facebookEmail":email});
            var emailtoken = Random.id();
            if(cursorUserHashMania){

            	console.log("http://localhost:3000/verifyHashEmail/"+emailtoken);
            	if(cursorUserHashMania.verified)
            		return true;

                Me.update({"_id":cursorUserHashMania._id},{$set :{"email":email,"emailtoken":emailtoken,"verified":false}});

	            if(app.debug)
	            	return;
	            Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   email,
                    subject : "Welcome to Tapmate " +email,
                    text : "Please secure your account here: "+ROOTURL +"/verifyHashEmail/"+emailtoken
                });
	            return true;
            }
        }
        catch(error){
            console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.verifyHashFacebookEmail"})
        }
    },
    "removeForClient" : function(clientid){
    	Follows.find({"userid":clientid}).forEach(function(data){Follows.remove({"_id":data._id})});
    	Follows.remove({"userid":clientid});
    },
    "touchFacebook" : function(clientid){
    	this.unblock();
    	var user = app.getFacebookUser(clientid);
    	if(app.checkFacebook(user)){
  			app.feedFacebook(user);
  			app.likeFacebook(user);
  		}
    },
    "mergeInstagramWithFacebook" : function (clientid){
    	this.unblock();
    	app.mergeInstagramWithFacebook(clientid);
    	app.followsInstagram(clientid);
    	return true;
    },
    "followOnFacebook" : function(clientid,followid,access){
    	if(clientid && followid && access){
    		console.log("followOnFacebook not supported " +clientid);

    	}

    }
})

// METHODS

// FUNCTIONS
app.initializeFacebookUser = function(cursorMe){
	Meteor.setTimeout(function(){
    	Meteor.setTimeout(function(){Meteor.call("verifyHashFacebookEmail",cursorMe.facebookEmail);},100);
    	Meteor.setTimeout(function(){app.followFacebook(cursorMe);},100);
    	Meteor.setTimeout(function(){Meteor.call("touch",cursorMe.clientid);},5000);
    },500);
}

app.mergeInstagramWithFacebook = function(clientid){
	var cursorMe = app.getFacebookUser(clientid);
	if(cursorMe){
        if(Meteor.user()){
            if(Meteor.user().services.instagram){
                var insert = {}
                insert.instagramID = Meteor.user().services.instagram.id;
                insert.instagramUsername = Meteor.user().services.instagram.username;
                insert.instagramToken = Meteor.user().services.instagram.accessToken;
                insert.instagramFace = Meteor.user().profile.picture
                insert.instagramFullname = Meteor.user().profile.name;
                Me.update({"_id":cursorMe._id},{$set :insert});
            }
        }
    }
}

app.setAdditionFacebook = function(user){
	user.facebookType = true;
	return user;
}
	// insert = app.setAdditionFollows(insert);
app.setAdditionFollows = function(follows){
	follows.chatCount = 0;
	return follows;
}
app.setAdditionFollowsTapmate = function(follows){
	follows.tapmateType = true;
	follows.followType = "tapmateType";
	follows = app.setAdditionFollows(follows);
	return follows;
}
app.setAdditionFollowsFacebook = function(follows){
	follows.facebookType = true;
	follows.followType = "facebookType";
	follows = app.setAdditionFollows(follows);
	return follows;
}




app.checkFacebook = function(user){
	if(!user)
		return false;
	if(user.facebookType){
		return true;
	}else{
		// console.log("Not a facebook user/pics " +(user.facebookID || user.likeid) );
	}
	return false;
}

app.getFacebookUser = function(clientid){
	return Me.findOne({"facebookID":clientid});
}

app.getFace = function(clientid){
	var cursorMe = Me.findOne({"facebookID":clientid});
	if(cursorMe && cursorMe.face)
		return cursorMe.face;
	else
	 	return null;
}
app.getFeed = function(likeid){
	return Feed.findOne({"likeid":likeid});
}



app.checkFollowExists = function(insert){
	// console.log(insert)
	// var cursorFollows =
	return Follows.findOne({"followid":insert.followid,"userid":insert.userid});
	// console.log(cursorFollows)
	// return cursorFollows;
}

app.followFacebook = function(user){
	if(app.checkFacebook(user)){
		console.log("start app.followFacebook " +user.facebookID)
		var friendsUrl = "https://graph.facebook.com/"+user.facebookID+"/friends?access_token="+user.fbAccessToken;
		var friendsResult = null;
		var friendsNextUrl = null;
		var friends = null;
		var insert = {};
		var personalResult = null;
		var personalUrl = null;
		var cursorFollows = null;
		var insertFollow = null;
		// insert myself
		//if(!app.checkFollowExists({"followid":user.facebookID,"userid":user.facebookID})){
			personalUrl = "https://graph.facebook.com/" +user.facebookID||user._id +"?access_token="+user.fbAccessToken||user.services.facebook.access;
			console.log(personalUrl);
			personalResult = {"data":{"username":user.facebookName}};//Meteor.http.get(personalUrl);
			insert = {"followid": user.facebookID,"hits":999,"profile_picture": user.face,"userid": user.facebookID,"username": user.facebookName}; //app.getFacebookFace(user.facebookID)
			insert = app.setAdditionFollowsTapmate(insert);
			app.insertOrUpdateFollows(insert);
			delete insert.tapmateType
			insert = app.setAdditionFollowsFacebook(insert);
			app.insertOrUpdateFollows(insert);

			delete insert.facebookType
			insert = app.setAdditionFollowsInstagram(insert);
			app.insertOrUpdateFollows(insert);
			app.addDefaultFacebookFollows(user);
			console.log(friendsUrl)
		//}
		var il = 10;
		if(app.debug)
			il=1;
		for(var i=0;i<il;i++){
			// app.getFacebookFace(user.facebookID)
			if(friendsNextUrl)
				friendsUrl = friendsNextUrl;

			friendsResult = Meteor.http.get(friendsUrl);
			console.log(friendsResult);
			friends = friendsResult.data.data;
			var jl=friends.length;
			if(app.debug)
				jl=5;
			for(var j=0;j<jl;j++){
				if(!friends[j])
					continue;
				if(app.checkFollowExists({"followid":friends[j].id,"userid":user.facebookID})){
					continue;
				}
				personalUrl = "https://graph.facebook.com/" +friends[j].id;
				personalResult = Meteor.http.get(personalUrl);
				insert = {"followid": friends[j].id,"hits":0,"profile_picture": app.getFacebookFace(friends[j].id),"userid": user.facebookID,"username": personalResult.data.username};
				insertFollow = {"followid": user.facebookID ,"hits":0,"profile_picture": user.face,"userid":friends[j].id ,"username": user.username};
				console.log(insert);
				if(app.isTapmate(friends[j].id)){
					insert = app.setAdditionFollowsTapmate(insert);
					insertFollow = app.setAdditionFollowsTapmate(insertFollow);
					app.insertOrUpdateFollows(insert); //for me
					app.insertOrUpdateFollows(insertFollow); //me for others
				}
				else{
					insert = app.setAdditionFollowsFacebook(insert);
					insertFollow = app.setAdditionFollowsFacebook(insertFollow);
					app.insertOrUpdateFollows(insert); //for me
					app.insertOrUpdateFollows(insertFollow); //me for others
				}
			}
			// console.log(friendsResult.data.paging.next)
			friendsNextUrl = null;
			if(friendsResult.data.paging)
				friendsNextUrl = friendsResult.data.paging.next;
			if(!friendsNextUrl)
				break;
		}
		app.addDefaultFacebookFollows(user);
		console.log("end app.followFacebook " +user.facebookID)
	}
}

app.addDefaultFacebookFollows = function(user){
	var insert = null;
	var cursorFollows = null;
	var insertFollow = null;
	for(var i=0,il=app.defaultFacebookId.length;i<il;i++){
		// console.log(app.defaultFacebookId[i]);
		cursorFollows = app.getFollows(app.defaultFacebookId[i]);

		if(!cursorFollows)
			continue;
		// console.log(cursorFollows);
		insert = {"followid": cursorFollows.followid,"hits":0,"profile_picture": cursorFollows.profile_picture,"userid": user.facebookID,"username": cursorFollows.username};
		insertFollow = {"followid": user.facebookID,"hits":0,"profile_picture": user.face,"userid": cursorFollows.followid,"username": user.username};
		// console.log(app.isTapmateUser(cursorFollows.followid))
		if(app.isTapmateUser(cursorFollows.followid)){
			insert = app.setAdditionFollowsTapmate(insert);
			insertFollow = app.setAdditionFollowsTapmate(insertFollow);
			app.insertOrUpdateFollows(insert);
			app.insertOrUpdateFollows(insertFollow);
		}
	}

}



app.getFollows = function(clientid){
	return Follows.findOne({"followid":clientid})
}

app.isTapmateUser = function(facebookId){
	var cursorMe = Me.findOne({"clientid":facebookId});
	if(cursorMe)
		return true;
	else
		return false;
}

app.feedFacebook = function(user){
		// return;
	if(app.checkFacebook(user)){
		var feedsUrl = "https://graph.facebook.com/"+user.facebookID+"/home?access_token="+user.fbAccessToken;
		var feedsResult = null;
		var feedsNextUrl = null;
		var feeds = null;
		var insert = {};
		var photoResult = null;
		var photoUrl = null;
		var cursorFollows = null;

		// if(user.nextFeedUrl)
		// 	feedsUrl = 	user.nextFeedUrl;

		feedsResult = Meteor.http.get(feedsUrl);
		if(feedsResult.data.data.length == 0){
			feedsUrl = "https://graph.facebook.com/"+user.facebookID+"/home?access_token="+user.fbAccessToken;
			feedsResult = Meteor.http.get(feedsUrl);
		}

		feeds = feedsResult.data.data;

		if(feedsResult.data.paging)
			Me.update({"_id":user._id},{$set : {"nextFeedUrl" : feedsResult.data.paging.next}});
		for(var i=0,il=feeds.length;i<il;i++){
			if(feeds[i].type == "photo"){
				insert = {};
				insert.clientid = user.clientid;
				insert.likeid = feeds[i].object_id;
				insert.display = "y";
				insert.type = 31;
				photoUrl = "https://graph.facebook.com/"+feeds[i].object_id+"/picture?type=normal&redirect=false&access_token="+user.fbAccessToken; //square,small,normal,large
				photoResult = Meteor.http.get(photoUrl);//,{"params":{"photo":app.testFacebookPhoto}}

				insert.low = photoResult.data.data.url;
				if(insert.low.match(".gif"))
					continue;

				insert = app.setAdditionFeedsFacebook(insert);
				app.insertOrUpdateFeeds(insert);
			}
			if(feeds[i].type == "video"){
				app.feedVideoFacebook(user,feeds[i]);
			}
			// console.log(feeds[i]);
		}
	}
}

app.likeFacebook = function(user){
	if(app.checkFacebook(user)){
		var likeUrl = "https://graph.facebook.com/"+user.facebookID+"/home?access_token="+user.fbAccessToken;
		var likeResult = null;
		var likeNextUrl = null;
		var like = null;
		var insert = {};
		var photoResult = null;
		var photoUrl = null;
		var cursorFollows = null;

		likeResult = Meteor.http.get(likeUrl);
		like = likeResult.data.data
		console.log("like")
		for(var i=0,il=like.length;i<il;i++){
			insert = {};
			insert.clientid = user.clientid;
			insert.likeid = like[i].object_id;
			var FaceCurrsor = Follows.findOne({"followid":like[i].from.id});
			if(FaceCurrsor)
				insert.faceOfLike = FaceCurrsor.profile_picture;
			insert.display = "y";
			insert.type = 32;
			photoUrl = "https://graph.facebook.com/"+like[i].object_id+"/picture?type=normal&redirect=false&access_token="+user.fbAccessToken; //square,small,normal,large
			photoResult = Meteor.http.get(photoUrl);//,{"params":{"photo":app.testFacebookPhoto}}

			insert.low = photoResult.data.data.url;
			if(insert.low.match(".gif"))
				continue;

			insert = app.setAdditionFeedsFacebook(insert);
			app.insertOrUpdateFeeds(insert);
		}
	}
}

app.testFacebookId = "839581656051894";//"100000002030165";
app.testFacebookPostId = "100000002030165_799738333369560";
app.testFacebookPhoto = "10154368068585311" //"775880335789589";
app.testFacebookAccess = "CAAKfxgldAJoBAMGRlkcQAdQyK0gfZA4kZCYDvI93eyZAccj6JvGOshbkVWZBucokWvP4lb93iynhaC0QYEvmwb0c5Y4cG4IDXlM9o9ZB2UtXqABhqsgZCxhUkt59i4DZCKVQa5Iq8rZCZBAUqQVpbpSedKYmWG9yBpvMvyVlOx5hxoChHAKK1opdP";


app.testFacebook = function(){

	// var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

	// 	// attach connect-style middleware for response header injection

	// 	connectHandler.use(function (req, res, next) {
	// 		console.log("376");
	// 		//res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
	// 		res.setHeader('Access-Control-Allow-Origin','*');
	// 		return next();
	// 	})
	// Feed.remove({});

	console.log("checkpoint " +Random.id());
	// Follows.remove({});
	Meteor.setTimeout(function(){
		// Me.find({}).forEach(function(data){
		// 	console.log(data);
		// });
		// app.likeFacebook(Me.findOne({"facebookID":"100000002030165"}));
		// app.followFacebook(Me.findOne({"_id":app.testFacebookId}));

		// VideoFeed.find().forEach(function(data){
		// 	VideoFeed.update({"_id":data._id},{$set : {"display":"y"}});
		// });
		// Feed.remove({})
		//var cursorMe = Feed.find({"clientid":"100000002030165"});
		// DebugFace = false;
		// app.followsInstagram(cursorMe.clientid,cursorMe.instagramToken)
		// DebugFace = true;
		// app.addDefaultFacebookFollows(cursorMe);
		// app.feedFacebook(cursorMe);
		//console.log(cursorMe.count())
	},500);
}

app.likeOnFacebook = function(user,likeid){
	user = app.getFacebookUser(user);
	cursorFeed = app.getFeed(likeid);
	if(app.checkFacebook(user) && app.checkFacebook(cursorFeed)){
		var likeUrl = "https://graph.facebook.com/"+likeid+"/likes?access_token="+user.fbAccessToken;
		Meteor.http.post(likeUrl);
		return true;
	}
	return false;
}
app.modelFacebook = function(user){
	if(app.checkFacebook(user)){

	}
}

app.feedVideoFacebook = function(user,data){
	return; //blocked
	// console.log(data);
	if(app.checkFacebook(user) && data.type == "video"){
		console.log("app.feedVideoFacebook")
		var insert = {"type":"fv","display":"y","userid": user.clientid,"clientid": user.clientid,"likeid":data.id ,"voting":0,"ilow":data.picture};
		var link = null;
		if(data.link)
			link = data.link;
		else
			link = data.source;
		if(app.checkfeedVideoFacebook(link))
			return;
		insert.standard = link;
		insert.thumb = link;
		insert.low = link;
		insert = app.setAdditionalFacebookVideoFeed(insert);
		app.insertOrUpdateVideoFeed(insert);
	}
}
app.checkfeedVideoFacebook = function(link){
	if(link.match("photo.php"))
		return true;
	return false;
}
app.setAdditionalFacebookVideoFeed = function(insert){
	insert = app.setAdditionalVideoFeed(insert);
	insert.facebookType = true;
	return insert;
}

// FUNCTIONS

// PUBLISH

// PUBLISH

// API
	// var insert = {"type":"v","display":"y","userid": ids,"clientid": ids,"likeid":data.id ,"standard":data.videos.standard_resolution.url,"thumb":data.videos.low_bandwidth.url,"low":data.videos.low_resolution.url,"voting":0,"ilow":data.images.thumbnail.url};
	// Feed.insert({"clientid":"guest","likeid":likeid,"low":cursorFeed.low,"display":"y"});

	// Media.insert({"_id":mediaid,"profile_picture":profile_picture,"username":username,"clientid":id,"fullname":fullname,"link":link,"low" : low, "thumb" :thumb, "std" : std,"loud":0,"votes":0,"recomend":0});

	// Follows Insert
	// var Follow = {"followid": "487690035","hits":0,"profile_picture": "http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg","userid": ClientId,"username": "nicolsondsouza"};
	// Follows.insert(Follow);

	// "id": "146729692003924_853134181363468",
 //      "from":  {
 //        "category": "Musician/band",
 //        "name": "Akcent",
 //        "id": "146729692003924"
 //      },
 //      "message": "they love #kAMELIA i love u too guys ! #thanku",
 //      "picture": "https://fbexternal-a.akamaihd.net/safe_image.php?d=AQC6j0CfjdAX1E7y&w=130&h=130&url=http%3A%2F%2Fi1.ytimg.com%2Fvi%2FOsu9JFpnQXQ%2Fhqdefault.jpg",
 //      "link": "https://www.youtube.com/watch?v=Osu9JFpnQXQ&list=UUQyFhLHHNC4QLaqMAE0ZB9w",
 //      "source": "http://www.youtube.com/v/Osu9JFpnQXQ?version=3&list=UUQyFhLHHNC4QLaqMAE0ZB9w&autoplay=1",
 //      "name": "Akcent 'Kamelia' Live In Varna, Bulgaria At The Voice Of Summer July 16, 2014",
 //      "description": "description",
 //      "icon": "https://fbstatic-a.akamaihd.net/rsrc.php/v2/yj/r/v2OnaTyTQZE.gif",
 //      "actions":  [
 //         {
 //          "name": "Comment",
 //          "link": "https://www.facebook.com/146729692003924/posts/853134181363468"
 //        },
 //         {
 //          "name": "Like",
 //          "link": "https://www.facebook.com/146729692003924/posts/853134181363468"
 //        }
 //      ],
 //      "privacy":  {
 //        "value": ""
 //      },
 //      "type": "video",
 //      "status_type": "shared_story",
 //      "created_time": "2014-07-17T10:02:47+0000",
 //      "updated_time": "2014-07-17T10:05:07+0000",
 //      "shares":  {
 //        "count": 1
 //      },
 //      "likes":  {},
 //      "comments":  {}

	// https://graph.facebook.com/100000002030165/friends?access_token=
	// {
	// 	"data": [
	// 	  {
	// 	     "name": "Elias Moosman",
	// 	     "id": "532514594"
	// 	  },

	// 	      {
	// 	     "name": "Chavda Mitesh",
	// 	     "id": "100008215144045"
	// 	  }
	// 	],
	// 	"paging": {
	// 	  "next": "https://graph.facebook.com/v1.0/100000002030165/friends?access_token=CAAKMrAl97iIBAC7uelMlstvAYy9LYsHYOMOIueohlJZBChfKkUDZA0rxrJTZCALyHEGzZCpj6iiEvFeU2YVkPl1a2vHSZBdcMosqWiyEIdWDjcph9h4YmWPDIMOM4GxYX8RZBRHoaN87upSIdxhyp2J8zItYENSZBZCyZAan99wprZCFnvHb5F6JWbMgPImirL6EtuTbte5yNy8Q1wAVx1pg3MWm8wcOzgJIsZD&limit=5000&offset=5000&__after_id=enc_AezilLOPWGWwATUmRGVaNtZImyq_m8Jk0TOjuuwAJZMiUDQ1wTceP6W2jDJaaJ6jGCGwGZhsVRvXz5_ej4S-DQKG"
	// 	}
	// }

	// https://graph.facebook.com/user_id?fields=name

	// {
	// 	"id": "100000002030165",
	// 	"first_name": "Nicolson",
	// 	"gender": "male",
	// 	"last_name": "D'souza",
	// 	"link": "https://www.facebook.com/nicolsondsouza",
	// 	"locale": "en_US",
	// 	"name": "Nicolson D'souza",
	// 	"username": "nicolsondsouza"
	// }

// API

/*

{ _id: '100000002030165',
I20141112-18:49:14.983(5.5)?   alreadyloggedin: 198,
I20141112-18:49:14.983(5.5)?   clientid: '100000002030165',
I20141112-18:49:14.984(5.5)?   dalreadyloggedin: 198,
I20141112-18:49:14.984(5.5)?   disRating: 'yes',
I20141112-18:49:14.984(5.5)?   dvotes: 142,
I20141112-18:49:14.984(5.5)?   email: 'nicolsondsouza@yahoo.com',
I20141112-18:49:14.984(5.5)?   emailtoken: 'ydpHqmfWeP7BcGQAR',
I20141112-18:49:14.985(5.5)?   face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p100x100/1175019_653684934641568_1312005448_n.jpg?oh=efcfef5b00697df3c4fe67e2ea490801&oe=54E02B4F&__gda__=1423201317_345e3859c7dab8566527c11b93f877d5',
I20141112-18:49:14.985(5.5)?   facebookEmail: 'nicolsondsouza@yahoo.com',
I20141112-18:49:14.985(5.5)?   facebookID: '100000002030165',
I20141112-18:49:14.985(5.5)?   facebookLink: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p100x100/1175019_653684934641568_1312005448_n.jpg?oh=efcfef5b00697df3c4fe67e2ea490801&oe=54E02B4F&__gda__=1423201317_345e3859c7dab8566527c11b93f877d5',
I20141112-18:49:14.985(5.5)?   facebookName: 'Nicolson D\'souza',
I20141112-18:49:14.986(5.5)?   facebookType: true,
I20141112-18:49:14.986(5.5)?   fbAccessToken: 'CAAJp3M66BM8BABZBxHKsb0UtPKSYFQz75BmBRTKLZCKjm7yo19qvvlz4ZBXiGvE5lmKoNtlOOmP6sV4BBwTgrSzOWZAMLdfjKZCmNyCXMDISFmlnSzShQ9thUwAELbhKaZBngZCJ4nOMQH9ZADHZBFBZC7cCR3R7dV0ZBZANwYZCUhZCw9H0wVX7LdEhNYgLlWSfP2AWaZBiH1JEntiLUnKAuOjtMvE',
I20141112-18:49:14.986(5.5)?   fbExpires: '5176269',
I20141112-18:49:14.986(5.5)?   instagramFace: 'http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg',
I20141112-18:49:14.986(5.5)?   instagramFullname: 'Nicolson Dsouza',
I20141112-18:49:14.987(5.5)?   instagramID: '487690035',
I20141112-18:49:14.988(5.5)?   instagramToken: '487690035.f28d28f.59143bb52afa4405a536448686c5b44c',
I20141112-18:49:14.989(5.5)?   instagramUsername: 'nicolsondsouza',
I20141112-18:49:14.990(5.5)?   malreadyloggedin: 198,
I20141112-18:49:14.990(5.5)?   mvotes: 142,
I20141112-18:49:14.991(5.5)?   nextFeedUrl: 'https://graph.facebook.com/v1.0/100000002030165/home?access_token=CAAJp3M66BM8BAOJDCsn3ZARPKdaRgGu0YXHsBAT5gIZAe7rDnzoinznyaXAK33j9Ct9fS6NGXOXZCskdGRAyk1moWWdPJNcHWASlwhLyXo2cBO2iPV0E2ZAQVTZBIPZAsY5Fmd0vSQhGRfMCOkM6DMJZCvUjvL4ZBPj4cBZBhnXDiC7XJkpaVZAx6h8KPvxcFWqA2ZAMHAsQfKQIUK8OMA8SPSF&limit=25&until=1415764852',
I20141112-18:49:14.991(5.5)?   nexturl: 'https://api.instagram.com/v1/users/self/feed?count=10&action=follow&access_token=487690035.f28d28f.59143bb52afa4405a536448686c5b44c&max_id=851895019719159266_27304666&ACCESS_TOKEN=487690035.f28d28f.59143bb52afa4405a536448686c5b44c',
I20141112-18:49:14.992(5.5)?   pushid: 'APA91bEu1QzmIIC5w_big756KJezaFZe9VnY-bB5DrAiHP-8ZJbtt8TsXIATxqrKbKjpf6XApVaQNxlJsgSmkE2rLQ56siCZ6fhLc-sy7oT1yqVwD9kwcqjMpU88MnFv4rnjltfFfUtkmaNFWl2cylhEsl4Zch6Z6iS3Go5SgRdTVLE-RiAGXUE',
I20141112-18:49:14.992(5.5)?   pushtype: 'android',
I20141112-18:49:14.992(5.5)?   state: 'vZLfrn2chrXQLAwv4',
I20141112-18:49:14.992(5.5)?   username: 'nicolsondsouza',
I20141112-18:49:14.993(5.5)?   verified: false,
I20141112-18:49:14.993(5.5)?   votes: 142,
I20141112-18:49:14.993(5.5)?   walreadyloggedin: 198,
I20141112-18:49:14.994(5.5)?   wvotes: 142,
I20141112-18:49:14.994(5.5)?   yalreadyloggedin: 198,
I20141112-18:49:14.994(5.5)?   yvotes: 142 }
*/