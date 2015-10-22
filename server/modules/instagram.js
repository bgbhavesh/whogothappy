app.defaultInstagramId = ["625237041","363620479","487690035"];//,"1797896033"


Meteor.methods({
    "touchInstagram" : function(clientid){
        this.unblock();
        Meteor.setTimeout(function(){Meteor.call("popular",clientid,app.instagramToken());},100);
        Meteor.setTimeout(function(){Meteor.call("usersVotesAdd",clientid);},300000);
        Meteor.setTimeout(function(){Meteor.call("recentMediaFetch",clientid);},300000);
        Meteor.setTimeout(function(){Meteor.call("likesFeed",clientid);},300000);
        Meteor.setTimeout(function(){Meteor.call("getFeed",clientid);},300000);
    },
});
app.feedVideoInstagram = function(data,ids){
	return ;
	if(data.videos){
		var insert = {"type":"iv","display":"y","userid": ids,"clientid": ids,"likeid":data.id ,"standard":data.videos.standard_resolution.url,"thumb":data.videos.low_bandwidth.url,"low":data.videos.low_resolution.url,"voting":0,"ilow":data.images.thumbnail.url};
		// console.log(insert);
		insert = app.setAdditionalInstagramVideoFeed(insert);
		app.insertOrUpdateVideoFeed(insert);
	}
}
app.setAdditionFollowsInstagram = function(follows){
    follows.instagramType = true;
    follows.followType = "instagramType";
    follows = app.setAdditionFollows(follows);
    return follows;
}
app.setAdditionalInstagramVideoFeed = function(insert){
	insert = app.setAdditionalVideoFeed(insert);
	insert.instagramType = true;
	return insert;
}
app.setAdditionalVideoFeed = function(insert){
	insert.date = app.Date();
	return insert;
}
app.Date = function(){
	return new Date().getTime();
}

app.getInstagramUser = function(clientid){
	return Me.findOne({"instagramID":clientid});
}
app.insertOrUpdateVideoFeed = function(insert){

	var cursorVideoFeed = VideoFeed.findOne({"likeid":insert.likeid,"clientid":insert.clientid});
	if(cursorVideoFeed){
		delete insert.display;
		VideoFeed.update({"_id":cursorVideoFeed._id},{$set:insert});
	}
	else{
		VideoFeed.insert(insert);
	}
}


    app.addDefaultInstagramFollows = function (ClientId){
        // if(DebugFace){
        var currentcur = Me.findOne({"_id":ClientId});
        var exsists = null;
        var cursorMe = null;
        for(var i=0,il=app.defaultInstagramId.length;i<il;i++){
        	var followid = app.defaultInstagramId[i];
			if(followid !=currentcur._id){
				exsists = Follows.findOne({"userid":ClientId,"followid":followid});
				cursorMe = Me.findOne({"instagramID":followid});

                if(!exsists && cursorMe){
					if(cursorMe.clientid == ClientId){
                        continue;
                    }
                    var Follow = {"followid":followid,"hits":0,"profile_picture": cursorMe.instagramFace,"userid": ClientId,"username": cursorMe.instagramUsername};
                    var insertFollow = {"followid":ClientId,"hits":0,"profile_picture": currentcur.instagramFace,"userid": followid ,"username": currentcur.instagramUsername};

                    Follow = app.setAdditionFollowsTapmate(Follow);
                    insertFollow = app.setAdditionFollowsTapmate(insertFollow);

                    app.insertOrUpdateFollows(Follow);
                    app.insertOrUpdateFollows(insertFollow);

				}

			}
        }
    }

    app.followsInstagram = function (ClientId,access){
        var cursorMe = Me.findOne({"clientid":ClientId});
        var followslink = "https://api.instagram.com/v1/users/" +cursorMe.instagramID +"/follows?access_token="+cursorMe.instagramToken;
        var giveMeJson = Meteor.http.get(followslink);
        var ids = ClientId;
        //console.log("follow start");
        var data = null;
        if(giveMeJson.statusCode == "200"){
            data = giveMeJson.data;
            data = data.data;
            //console.log(data);
            var il=data.length;
            if(app.debug)
                il=10;
            for(var i=0;i<il;i++){
                //console.log(data[i]);
                var insert = {"hits" : 0 ,"followid":data[i].id, "userid":ids,"bio": data[i].bio,"full_name":data[i].full_name,"profile_picture":data[i].profile_picture,"username":data[i].username,"website":data[i].website};
                var insertFollows = {"hits" : 0 ,"followid":ids, "userid": data[i].id,"bio": data[i].bio,"full_name":cursorMe.full_name,"profile_picture":cursorMe.face,"username":cursorMe.username};
                var exsistingUser = Me.findOne({"instagramID":insert.followid});
                if(exsistingUser){
                    if(exsistingUser.clientid == ClientId){
                        console.log("continue");
                        continue;
                    }

                    var exsists = Follows.findOne({"followid":insert.followid,"userid":insert.userid });
                    if(exsists){
                    }
                    else{
                        insert = app.setAdditionFollowsTapmate(insert);
                        app.insertOrUpdateFollows(insert);
                        insertFollows = app.setAdditionFollowsTapmate(insertFollows);
                        app.insertOrUpdateFollows(insertFollows);
                    }
                }
                else{
                    insert = app.setAdditionFollowsInstagram(insert);
                    app.insertOrUpdateFollows(insert);
                    insertFollows = app.setAdditionFollowsInstagram(insertFollows);
                    app.insertOrUpdateFollows(insertFollows);
                }
            }
            app.addDefaultInstagramFollows(ClientId);
        }
        else{
            console.log("Something went wrong " +giveMeJson.meta.code);
        }
        console.log("follow ended");
        // return testArray;
    }
    app.popularInstagram = function(ids,access){
        // console.log(access);
        var popularurl = "https://api.instagram.com/v1/media/popular?access_token="+access;
        var myJson = Meteor.http.get(popularurl);
        console.log("pouplar start");
        var length = 0;
        myJson = myJson.data;
        var data = null;
        if(myJson.meta.code == 200){
            data = myJson.data;
            length = data.length;
            for(var i=0,il=data.length;i<il;i++){
                //data[i]
                app.feedVideoInstagram(data[i],ids);
                var insert = {"type":"p","display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.low_resolution.url, "counts":data[i].likes.count,"voting":0};
                // cursor = Popular.findOne({"likeid":insert.likeid,"userid": ids});
                if(false){
                    // var id = insert.likeid;
                    // insert._id = null;
                    // delete insert._id;
                    //Popular.update({"likeid":id,"userid": ids},{$set :insert});
                }
                else{
                    // Popular.insert(insert);


                    insert.clientid = ids;
                    insert.source = "popular";
                    insert.type = 29;
                    insert.checked = false;
                    insert = app.setAdditionFeedsInstagram(insert);
                    app.insertOrUpdateFeeds(insert);
                    Meteor.call("media",insert.likeid,access);
                }
            }
        }
        else{

        }
        console.log("popular ended " +length);
    }
    app.usersVote = function(clientid,id){
        // if(DebugFace){
        //     console.log("usersVotesAdd is disabled in debugmode");
        //     return;
        // }
        if(clientid && id){
            console.log("usersVotesAdd");
            var cursorVote = Votes.find({"followid":id},{sort : {"date": -1},"limit":10});
            var cursorUsersVote = null;
            //console.log(cursorVote);
            cursorVote.forEach(function(data){
                delete data._id;
                data.clientid = clientid;
                data.followid = id;
                data.display = "y";
                data.type = 3;
                // cursorUsersVote = UsersVote.findOne({"clientid":clientid,"followid":id,"likeid":data.likeid});

                // if(!cursorUsersVote){
                    if(data){
                        var cursorFeed = Feed.findOne({"likeid":data.likeid});
                        // data.low = cursorFeed.low;
                        data = app.setAdditionFeedsInstagram(data);
                        app.insertOrUpdateFeeds(data);
                    }
                // }
            });
        }

    }
    app.getSecondFollows = function(clientid){
        var cursorFollows = Follows.find({"userid":clientid,"tapmateType":true},{sort : {"hits":-1},limit:2});
        var followid = null;
        cursorFollows.forEach(function(data){
            followid = data.followid;
        })
        return followid;
    }
// API

// var insert = {"type":"l","display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.thumbnail.url, "counts":data[i].likes.count,"voting":0};

	// var videojson = { low_bandwidth:
 //    { url: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t50.2886-16/10556148_696286783739842_686979010_s.mp4',
 //      width: 480,
 //      height: 480 },
 //   low_resolution:
 //    { url: 'http://scontent-a.cdninstagram.com/hphotos-xaf1/t50.2886-16/10556148_696286783739842_686979010_s.mp4',
 //      width: 480,
 //      height: 480 },
 //   standard_resolution:
 //    { url: 'http://scontent-b.cdninstagram.com/hphotos-xap1/t50.2886-16/10556103_1456347561287115_130094735_n.mp4',
 //      width: 640,
 //      height: 640 } }

 // API