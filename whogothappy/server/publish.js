    // app.pagenationLimit = 35;

    // ////PUBLISH METHODS
    // Meteor.publish("toast",function(clientid){
    //     try{
    //         return Toast.find({"clientid":this.userId},{sort : {"time": -1},limit:15});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.toast"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("videofeed",function(clientid){
    //     try{
    //         return null;
    //         return VideoFeed.find({"clientid":this.userId,"display":"y"},{sort : {"date": -1},limit:4});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.pushnotification"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("videorecents",function(clientid){
    //     try{
    //         return null;
    //         return VideoFeed.find({"clientid":this.userId,"display":"n"},{sort : {"date": -1},limit:4});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.pushnotification"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("loud",function(clientid){
    //     try{
    //         return MediaCollection.find({},{sort : {"loud": -1},limit:8})
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.loud"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // // Meteor.publish(null,function(){
    // //     try{
    // //         return EmailCollection.find({});
    // //     }
    // //     catch(error){
    // //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    // //         console.log(insert);
    // //         ErrorUpdate.insert(insert);
    // //     }
    // // });

    // Meteor.publish("pushnotification",function(clientid,likeid){
    //     try{
    //         return Feed.find({"likeid":likeid,"clientid":this.userId});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.pushnotification"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("groupvoterecommend",function(clientid,likeid){
    //     try{
    //         return GroupVoteRecommend.find({"clientid":this.userId,"likeid":likeid});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("follows",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(userid == -2){
    //             return Follows.find({});
    //         }
    //         return Follows.find({"userid": this.userId}); //,"tapmateType":true //,{"limit":20}
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("followsFacebook",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(userid == -2){
    //             return Follows.find({});
    //         }
    //         return Follows.find({"userid":this.userId,"facebookType":true});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("followsInstagram",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(userid == -2){
    //             return Follows.find({});
    //         }
    //         return Follows.find({"userid":this.userId,"instagramType":true});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("followsgroup",function(clientid){
    //     try{
    //         return FollowsGroup.find({"clientid":this.userId});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("usersession",function(clientid){
    //     try{
    //         return UserSession.find({"clientid":this.userId});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersession"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("mename",function(username){
    //     try{
    //         if(username == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(username == -2){
    //             return Me.find({});
    //         }
    //         return Me.find({"username":username});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.mename"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("me",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(userid == -2){
    //             return Me.find({});
    //         }
    //         // comeback here
    //         return Me.find({"_id":this.userId});
    //         // ,{fields: {'followid':1,'fullname':1,'heatscore':1,'profile_picture':1,'username':1,'score':1,'email':1,"rating":1,'facebooktoken':1,'facebookexpires':1,"disRating": 1}}
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.me"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // // Meteor.publish("likes",function(userid){
    // //     try{
    // //         if(userid == -1){
    // //             this.stop();
    // //             return;
    // //         }
    // //         if(userid == -2){
    // //             return Likes.find({});
    // //         }
    // //         return Likes.find({"userid":userid,"display":"y"});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.likes"})
    // //     }
    // // });
    // Meteor.publish("paginationfeed",function(options){
    //     //return null;
    //     return Feed.find({"clientid" : options.clientid,"type":options.type},
    //         {sort :{"date":-1},skip:options.page * (app.pagenationLimit - 10),limit:app.pagenationLimit});
    //     // {"clientid" : userid,"display":"y","type" : {$nin : [2,4,8,9]}}
    // });
    // Meteor.publish("one",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return null;
    //         return Feed.find({"clientid" : this.userId,"display":"y","type" : {$nin : [2,4,8,9]}},{sort :{"date":1}, limit:30});//, limit:20
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // // Meteor.publish("fastfeed",function(clientid){
    // //     try{
    // //         return FastFeed.find({"clientid":clientid});
    // //     }catch(error){
    // //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
    // //         console.log(insert);
    // //         ErrorUpdate.insert(insert);
    // //     }
    // // });

    // // most important publish

    // Meteor.publish("onefeed",function(userid,skip){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         // return false; //depricated
    //         // if(app.debug){
    //         //     return Feed.find({"clientid" : userid,"display":"y"},{sort :{"type":1}, limit:35});
    //         // }
    //         // var feedArray = [];
    //         // var arrayFeed = Feed.find({"clientid" : userid,"display":"n"},{"limit":100}).fetch();
    //         // for(var i=0,il=arrayFeed.length;i<il;i++){
    //         //     if(arrayFeed[i])
    //         //     feedArray.push(arrayFeed[i].likeid);
    //         // }
    //         // arrayFeed = Votes.find({"clientid" : userid},{"limit":100}).fetch();
    //         // for(var i=0,il=arrayFeed.length;i<il;i++){
    //         //     if(arrayFeed[i])
    //         //     feedArray.push(arrayFeed[i].likeid);
    //         // }
    //         // if(!skip || skip < 0)
    //         //     skip = 1;


    //         // skip = skip * 35;


    //         ///return Feed.find({"clientid" : userid},{sort :{"type":1},limit:35});
    //         return Feed.find({"clientid" : this.userId,"display":"y"},{sort :{"type":1}, limit:30});//, limit:20
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });

    // Meteor.publish("oneFeedRecent",function(idsArray){
    //     return Feed.find({"_id" : {$in : idsArray}});
    // });
    // Meteor.publish("oneGlobal",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return null;
    //         return Feed.find({"clientid" : this.userId,"display":"y","type":4},{sort :{"date":1}, limit:30});//, limit:20
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("onePopular",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return null;
    //         return Feed.find({"clientid" : this.userId,"display":"y","type":8},{sort :{"date":1}, limit:30});//, limit:20
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("oneSearch",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return null;
    //         return Feed.find({"clientid" : this.userId,"display":"y","type":9},{sort :{"date":1}, limit:30});//, limit:20
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("votesimgs",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return Votes.find({"followid" : this.userId,"place":1},{sort :{"date":-1}, limit:4});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.votesimgs"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("onerecent",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return Feed.find({"clientid" : this.userId,"display":"n"},{sort :{"date":-1}, limit:5});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onerecent"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // // Meteor.publish("recents",function(userid){
    // //     try{
    // //         if(userid == -1){
    // //             this.stop();
    // //             return;
    // //         }
    // //         if(userid == -2){
    // //             return Recents.find({});
    // //         }
    // //         return Recents.find({"userid":userid,"display":"n"},{sort :{"date":-1}, limit:20});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recents"})
    // //     }

    // // });

    // Meteor.publish("recomm",function(likeid,clientid){
    //     try{
    //         if(clientid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(clientid == -2){
    //             return ;
    //         }
    //         return Feed.find({"likeid":this.userId,"whoid":clientid});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recomm"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("recommtwo",function(clientid){
    //     try{
    //         return Feed.find({"whoid":this.userId,"display":"y"});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recomm"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("urgentrecommend",function(clientid){
    //     try{
    //         return Feed.find({"clientid":this.userId,"type":1},{sort :{"date":-1}, limit:10});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommfeed"})
    //     }
    // // Meteor.publish("recommfeed",function(clientid){
    // //     try{
    // //         if(clientid == -1){
    // //             this.stop();
    // //             return;
    // //         }
    // //         if(clientid == -2){
    // //             return Recommend.find({});
    // //         }
    // //         return Recommend.find({"followid":clientid,"display":"y"});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommfeed"})
    // //     }

    // });
    // // Meteor.publish("recommendedtemp",function(clientid,likeid){
    // //     try{
    // //         if(clientid == -1){
    // //             this.stop();
    // //             return;
    // //         }
    // //         if(clientid == -2){
    // //             return Recommend.find({});
    // //         }
    // //         return Recommend.find({"followid":clientid,"likeid":likeid});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommendedtemp"})
    // //     }

    // // })
    // // Meteor.publish("recommendnotify",function(clientid){
    // //     try{
    // //         if(clientid == -1){
    // //             this.stop();
    // //             return;
    // //         }
    // //         if(clientid == -2){
    // //             return Recommend.find({});
    // //         }
    // //         return Recommend.find({"followid":clientid,"notify":"no"});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommendnotify"})
    // //     }

    // // })

    // Meteor.publish("votes",function(likeid){
    //     try{
    //         if(likeid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(likeid == -2){
    //             return Votes.find({});
    //         }
    //         return Votes.find({"likeid":likeid});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.votes"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("comments",function(likeid){
    //     try{
    //         return Comments.find({"likeid":likeid});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.commentreceive"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    // Meteor.publish("commentsent",function(clientid){
    //     try{
    //         if(clientid == -1){
    //             this.stop();
    //             return;
    //         }
    //         if(clientid == -2){
    //             return Comments.find({});
    //         }
    //         return Comments.find({"senderid":clientid});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.commentsent"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // // Meteor.publish("popular",function(clientid){
    // //     try{
    // //         return Popular.find({userid:clientid,"display":"y"});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.popular"})
    // //     }

    // // });
    // // Meteor.publish("globalfeed",function(clientid){
    // //     try{
    // //         return GlobalFeed.find({globalid:clientid,"display":"y"});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.globalfeed"})
    // //     }

    // // });
    // Meteor.publish("media",function(likeid){
    //     try{
    //         return MediaCollection.find({"_id":likeid});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.media"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // // Meteor.publish("search",function(clientid){
    // //     try{
    // //         return Search.find({"userid":clientid,"display":"y"});
    // //     }
    // //     catch(error){
    // //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.search"})
    // //     }

    // // });
    // Meteor.publish("keyword",function(){
    //     try{
    //         return SponserKeyword.find({});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.keyword"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });

    // Meteor.publish("error",function(){
    //     try{
    //         return ErrorUpdate.find({});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.error"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("usersvotetapmate",function(clientid,userid){
    //     try{
    //         // console.log(clientid +" " +userid)
    //         if(clientid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return UsersVote.find({"clientid":clientid,"followid":"580988446","display":"y"},{sort : {"date": -1},"limit":10});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersvote"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("usersvote",function(clientid,userid){
    //     try{
    //         // console.log(clientid +" " +userid)
    //         if(clientid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return UsersVote.find({"clientid":clientid,"followid":this.userId,"display":"y"},{sort : {"date": -1},"limit":10});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersvote"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("usersvoten",function(clientid,userid){
    //     try{
    //         // console.log(clientid +" " +userid)
    //         if(clientid == -1){
    //             this.stop();
    //             return;
    //         }
    //         return UsersVote.find({"clientid":clientid,"followid":this.userId,"display":"n"},{sort : {"date": -1},"limit":10});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersvote"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("tapmatrixuser",function(){
    //     try{
    //         return TapMatrixUser.find({});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.tapmatrixuser"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }

    // });
    // Meteor.publish("chat",function(clientid,chatid){
    //     return Chat.find({"clientid":clientid,"chatid":chatid});
    // })

    // ////PUBLISH METHODS