if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000"))
    app.debug = true;
else
    app.debug = false;
ROOTURL = ""
if(app.debug)
    ROOTURL = "http://localhost:3000";
else
    ROOTURL = "http://youtap.meteor.com";

function fetchLanguageFromDrive(){
    if(app.debug)
        return;
    // console.log("fetchLanguageFromDrive");
    var driveJson = {
        "english" : "https://docs.google.com/feeds/download/documents/export/Export?id=1_3XniQBBwPHP_02i73KpobyogvTcOxSnzoU703mFjgA&exportFormat=txt",
        "arabic" : "https://docs.google.com/feeds/download/documents/export/Export?id=1gttKuyxrxgNLVpLBBUVP6BLH0J60_DqRwdhBsEesd6M&exportFormat=txt"
    };
    var result = Meteor.http.get(driveJson.english);
    // console.log(result.content)
    language.toast = JSON.parse(result.content);
    // log(language.toast.push1)
    // var currentLanguage = JSON.parse(result.content);
    // console.log(currentLanguage);
}
app.fetchLanguageFromDrive = fetchLanguageFromDrive;

    Meteor.methods({
        "changevote" : function(){
            UsersVote.find({}).forEach(function(data){
                UsersVote.update({"_id":data._id},{$set:{"display":"y"}});
            });
        },
        "postOnFacebook" : function(clientid,message,img,whofbid,date,likeid){
            return app.postOnFacebook(clientid,message,img,whofbid,date,likeid);
        },
        "checkWithServer":function(data){
            try{
                var result = Meteor.http.call("GET", data.profile_picture);
                // if(result.statusCode == 403){

                // }
            }
            catch(error){
                Follows.update({"_id":data._id},{$set:{"profile_picture":"./images/face.jpg"}});
            }
        },
        "checkVotesWithServer":function(data){
            try{
                //console.log(data);
                var result = Meteor.http.call("GET", data.profile_picture);
                if(result.statusCode == 403){
                    Votes.update({"_id":data._id},{$set:{"profile_picture":"./images/face.jpg"}});
                }
            }
            catch(error){
                Votes.update({"_id":data._id},{$set:{"profile_picture":"./images/face.jpg"}});
            }
        },
        "checkRecsWithServer_sender":function(data){
            try{
                var result = Meteor.http.call("GET", data.profile_picture);
                if(result.statusCode == 403){
                    Feed.update({"_id":data._id},{$set:{"profile_picture":"./images/face.jpg"}});
                }
            }
            catch(error){
                Feed.update({"_id":data._id},{$set:{"profile_picture":"./images/face.jpg"}});
            }
        },
        "checkRecsWithServer_receiver":function(data){
            try{
                var result = Meteor.http.call("GET", data.profile_picture);
                if(result.statusCode == 403){
                    Feed.update({"_id":data._id},{$set:{"who":"./images/face.jpg"}});
                }
            }
            catch(error){
                Feed.update({"_id":data._id},{$set:{"who":"./images/face.jpg"}});
            }
        },
        "newuser":function(userId){
            this.unblock();
            app.testNewUser(userId);
        },
        "getContentEmail":function(userId){
            // app.testNewUser(userId);
            // return true;
            return app.testingText;
        },
        "blank" : function(token){
            try{
                this.unblock();
                var url = "https://api.instagram.com/v1/media/popular?access_token=3877984.f59def8.5d6b178351514ba986b64fc3915283fb"
                return Meteor.http.call("GET", url);
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.blank"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "getAccessToken" : function() {
            try {
                return Meteor.user().services.facebook.accessToken;
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getAccessToken"};
                console.log(insert);
                ErrorUpdate.insert(insert);
                return null;
            }
        },
        "getAll" : function(){
            return Meteor.user();
        },
        "getUsers" : function(){
            // Fixed.
            // return;
            var usersArray = []
            var cursorUsers = Meteor.users.find({});
            cursorUsers.forEach(function(data){
                // console.log(data)
                // var id = data.services.instagram.id;
                // var fullname = data.profile.name;
                // Me.update({"_id":id},{$set : {"fullname":fullname}});
                // var cursorFollows = Follows.find({"userid":id});
                // cursorFollows.forEach(function(da){
                //     Follows.update({"_id":da._id},{$set : {"fullname":fullname}});
                // });
                usersArray.push(data);
            });
            return usersArray;
        },
        "getInformation" : function(){
            //This one is actually first time login
            console.log("getInformation");
            try{
                if(Meteor.user() != null || Meteor.user() != undefined){
                    var profile_picture = null;
                    var fullname = null;

                    var ClientId = null;
                    var cursorMe = null;
                    var username = null;
                    var access = null;
                    if(Meteor.user().services.instagram){
                        ClientId = Meteor.user().services.instagram.id;
                        cursorMe = Me.findOne({"_id":ClientId});
                        username = Meteor.user().services.instagram.username;
                        access = Meteor.user().services.instagram.accessToken;
                        profile_picture = Meteor.user().profile.picture
                        fullname = Meteor.user().profile.name;
                    }else{

                    }
                    var firstTimeFlag = false;

                    if(app.isAdmin(ClientId))
                    {

                    }
                    else{

                        Meteor.setTimeout(function(){
                            app.followsInstagram(ClientId,access);
                        },100);
                    }

                    if(!cursorMe){
                        firstTimeFlag = true;
                        var insert = {"_id":ClientId,"followid":ClientId,"profile_picture":Meteor.user().profile.picture,"username" :username,"recomended":0,"score":0,"timesLoggedin":0,"movedme":0,"movedrecomm":0,"votes":0,"vor":0,"recomending":0,"logout":0,"follownew":0,"swipeleft":0,"swiperight":0,"alreadyloggedin":0,"heatscore":0}
                        if(app.isAdmin(ClientId))
                        {
                            //Meteor.setTimeout(function(){

                            //},100);
                            var MeCursor = Me.find({});
                            MeCursor.forEach(function(data){

                               // var newFollow = {"hits" : 0 ,"followid":ClientId, "userid":data._id,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                               //  Follows.insert(newFollow);
                                // this will put the admin
                                if(app.isAdmin(data._id)){
                                    var allFollow = {"hits" : 0 ,"followid":ClientId, "userid": data._id,"fullname":data.fullname,"profile_picture":data.profile_picture,"username":data.username};

                                    var cursorFollows = Follows.findOne({"followid":allFollow.followid,"userid":allFollow.userid})
                                    if(!cursorFollows)
                                        Follows.insert(allFollow);
                                }
                            });

                            //var currentcur = Me.findOne({})

                        }else{}
                        // new users face wan't coming bug fix
                        newFollow = {"hits" : 100 ,"followid":ClientId, "userid":ClientId,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                        Follows.insert(newFollow);

                        // var SessionInsert = {"_id":ClientId,"username" :username,"InDate":0,"OutDate":0,"sessionTime":0,"height":0,"width":0}
                        // UserSession.insert(SessionInsert);
                        Me.insert(insert);
                        //if(DebugFace){
                            app.addlocallfollows(ClientId);
                        //}
                        if(!app.debug && ClientId !="491204471"){
                            app.newUserEmail(insert);
                        }


                    }
                    else{
                        profile_picture = cursorMe.profile_picture;
                        var temp_profile_picture = app.newProfilePictureCheck(ClientId,access);
                        if(temp_profile_picture.length>10) //Double Check Risky Shot
                        if(profile_picture != temp_profile_picture){
                            //This won't delay the user // It takes 3 secs or more to process
                            Meteor.setTimeout(function(){
                                app.updateProfilePictureDependecies(ClientId,temp_profile_picture);
                            },100);
                            profile_picture = temp_profile_picture;
                        }

                      Me.update({"_id":ClientId},{ $set : {"followid":ClientId,"profile_picture":profile_picture,"username" :username}});
                    }
                    Meteor.setTimeout(function(){
                        Meteor.call("globalfeed",ClientId,access);
                        Meteor.call("recentMediaFetch",ClientId,access);
                        Meteor.call("usersVotesAdd",ClientId,"580988446");
                        Meteor.call("popular",ClientId,access);
                        app.feedFacebook(app.getFacebookUser(ClientId));
                    },100);
                    return {"id" : ClientId , "profile_picture" :profile_picture,"username" :username,"firstTimeFlag":firstTimeFlag};

                }

            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getInformation"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "getQuery" : function(query){
            try{
                return Meteor.http.get(query)
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getQuery"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "firstTimeLogin" : function(clientid){
            console.log("firstTimeLogin");
            //This one is everytime login
            try{

                var id = null, access = null,profile_picture = null;
                //access =   "491204471.6bda857.939a75ea29d24eb19248b203f7527733";
                          //"491204471.0300035.27ba894777cb45ea80cdba4499dbb5f4";
                var currentOBJ = Meteor.user();
                if(Meteor.user() != null || Meteor.user() != undefined){
                    profile_picture = "";
                    if(Meteor.user().services.instagram){
                        id = Meteor.user().services.instagram.id;
                        access = Meteor.user().services.instagram.accessToken;
                        profile_picture = Meteor.user().profile.picture;
                    }
                    else{

                    }
                    // Meteor.setTimeout(function(){postActUser(id,access);},100);
                    var followslink = "https://api.instagram.com/v1/users/" +id +"/follows?access_token="+access;
                    var giveMeJson = Meteor.http.get(followslink);

                    if(!app.debug){
                        Meteor.setTimeout(function(){
                            Meteor.call("globalfeed",id,access);
                            Meteor.call("recentMediaFetch",id,access);
                            Meteor.call("usersVotesAdd",id,"580988446");
                            Meteor.call("popular",id,access);
                            app.feedFacebook(app.getFacebookUser(id));
                        },6000);
                    }

                    return {"id" : id , "profile_picture" :profile_picture};
                }
                if(!app.debug){
                    if(!clientid)
                        return;
                    app.feedFacebook(app.getFacebookUser(clientid));
                    Meteor.call("popular",clientid,access);
                    Meteor.call("globalfeed",clientid,access);
                    Meteor.call("recentMediaFetch",clientid,access);
                    Meteor.call("usersVotesAdd",clientid,"580988446");
                }
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.firstTimeLogin"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "removeFollows" : function(){
            try{
                // Follows.remove({});
                // Recommend.remove({});
                // Votes.remove({});
                // Recents.remove({});
            }
            catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.firstTimeLogin"});
            }
        },
        "LikeOnMedia" : function(mediaid,ids){
            try{

                app.likeOnFacebook(ids,mediaid)
                var cursorMe = app.getMe(ids);
                if(cursorMe)
                if(cursorMe.instagramToken){
                    var url = "https://api.instagram.com/v1/media/" +mediaid +"/likes?access_token="+cursorMe.instagramToken;
                    var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":cursorMe.instagramToken,"media-id":mediaid}});
                }

            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.LikeOnMedia"})
            }
        },
        "commentOnInstagram" : function (mediaid,comment){
            try{
                console.log("comment on instagram " +mediaid +" " +comment);
                access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733";
                if(Meteor.user())
                if(Meteor.user().services.instagram){
                    access = Meteor.user().services.instagram.accessToken;
                }else{

                }
                var url = "http://instagr.am/api/v1/media/" +mediaid +"/comments/?access_token="+access;
                var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"text":comment}});
                // console.log(result);
                return result;
                //"data":{"ACCESS_TOKEN":access},
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.commentOnInstagram"})
            }
        },
        "incLike" : function(currentBig){
            try{
                console.log("like on instagram " +currentBig);
                // var cursorLike = Likes.find({"likeid":currentBig});
                // cursorLike.forEach(function(data){
                //     Likes.update({"_id":data._id},{$inc : {"voting":1}});
                // })
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.incLike"})
            }
        },
        "addFollowPic" : function (followid){
            try{

                // depricated api

            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.addFollowPic"})
            }
        },
        "followOnInstagram" : function (clientid,followid,access){
            try{
                    if(clientid && followid && access){
                        console.log("follow on instagram " +followid);
                        // access = "487690035.0300035.420c68ce649f4cffa8a20a71809ce44a";
                        // access = Meteor.user().services.instagram.accessToken;
                        var url = "https://api.instagram.com/v1/users/" +followid +"/relationship?access_token=" +access;


                        // var ClientId = Meteor.user().services.instagram.id;
                        // console.log("follow pic " +followid+"clinet id"+ClientId);
                        // var exsistingUser = Me.findOne({"_id":followid})
                        // if(exsistingUser){
                        //     var exsists = Follows.findOne({"followid":followid,"userid":ClientId});
                        //     if(!exsists){
                        //         var Follow = {"hits" : 0 ,"followid":exsistingUser._id, "userid":ClientId,"full_name":"not yet","profile_picture":exsistingUser.profile_picture,"username":exsistingUser.username};
                        //         Follows.insert(Follow);
                        //     }
                        //     else{
                        //         var cursorFollows = Follows.find({"followid":followid,"userid":ClientId});
                        //         if(cursorFollows.count()){
                        //             var count = 0;
                        //             cursorFollows.forEach(function(data){
                        //                 if(count !=0){
                        //                     Follows.remove({"_id":data._id});
                        //                 }
                        //                 count++;
                        //             })
                        //         }
                        //     }
                        // }
                        var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"action":"follow"}});
                        if(result && result.statusCode == 200)
                            return true;
                    }
                    return false;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.followOnInstagram"})
            }
        },
        "incRecomend" : function(userid){
            try{
                Me.update({"_id":userid},{$inc : {"recomended" : 1}})
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.incRecomend"})
            }
        },
        "tutorial" : function(clientid){
            try{
                var cursorTapMatrixUser = TapMatrixUser.findOne({"_id":clientid});
                if(cursorTapMatrixUser){
                    if(cursorTapMatrixUser.email)
                        return 1;
                }
                return 2;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.tutorial"})
            }
        },
        "reset" : function(){
            try{
                // MyUsers.remove({});
                // //Follows.remove({});
                // //Likes.remove({});
                // Recents.remove({});
                // //RemoveFollows.remove({});
                // //RemoveLikes.remove({});
                // //Me.remove({});
                // Recommend.remove({});
                // Votes.remove({});
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.reset"})
            }
        },
        "checkImage" : function(image){
            try{
                return Meteor.http.get(image);
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.checkImage"})
            }
        },
        "checkUpdate" : function(clientid){

        },
        "incScore" : function(id,score){
            try{
                var cursorMe =  Me.findOne({"_id":id});
                Me.update({"_id":cursorMe._id},{$inc:{"score":score,"heatscore":score}});
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.incScore"})
            }
        },
        "loginWithApp" : function(email,password){
            try{
                var cursorTapMatrixUser = TapMatrixUser.findOne({"email":email, "password" :password});
                if(cursorTapMatrixUser){

                    var data = {};
                    data.id = cursorTapMatrixUser.meteorid;
                    data.token = cursorTapMatrixUser.token;
                    data.clientid = cursorTapMatrixUser._id;
                    return data;

                }
                else{
                    return -1;
                }
            }
                catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.loginWithApp"})
            }
        },
        "signupWithApp" : function(email,password){
            try{

                if(!Meteor.user()){
                    return -1;
                }
                 if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user().services.instagram){
                        var cursorTapMatrixUser = Me.findOne({"_id":Meteor.user().services.instagram.id});
                        var profile_pic= Meteor.user().profile.name;
                        var username=Meteor.user().profile.name
                    }
                    else{

                    }


                    var emailtoken = Random.id();
                    // console.log(emailtoken)
                    if(cursorTapMatrixUser){
                        // depricated
                        // TapMatrixUser.update({"_id":cursorTapMatrixUser._id},{$set: {"email":email,"emailverify":false,"emailtoken",emailtoken}});
                        Me.update({"_id":cursorTapMatrixUser._id},{$set: {"email":email,"emailverify":false,"emailtoken":emailtoken}});
                        var text = "Hello " + profile_pic + "\n"
                        + "\n"
                        + "To start receiving the service of tapmate, simply click the link below.\n"
                        + "\n"
                        + "http://" +getHost() +"/verify/" +emailtoken + "\n"
                        + "\n"
                        + "Thanks.\n";
                        Email.send({
                            from: 'Tapmate <tapmate@youiest.com>',
                            to:   email,
                            subject : "Welcome to Tapmate " +username,
                            text : text
                        });
                    }
                    else{
                        return -2;
                    }
                 }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.signupWithApp"})
            }

        },
        "delete" : function(){
            try{
                // MyUsers.remove({});
                // Follows.remove({});
                // Likes.remove({});
                // Recents.remove({});
                // RemoveFollows.remove({});
                // RemoveLikes.remove({});
                // Me.remove({});
                // Recommend.remove({});
                // Votes.remove({});
                // Popular.remove({});
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.delete"})
            }
        },
        "popular" : function(id,access){
            //try{
                this.unblock();
                if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user().services.instagram){
                        access = Meteor.user().services.instagram.accessToken;
                    }else{}

                }
                if(id && !access){
                    var dataid = app.getMe(id);
                    if(dataid.instagramToken){
                        access = dataid.instagramToken;
                    }
                    else{
                        dataid = app.getInstagram(id);
                        access = dataid.access;
                    }
                }

                app.popularInstagram(id,access);
                    return true;
            // }
            // catch(error){
            //     console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.popular"})
            // }
        },
        "seachKeyword" : function(id,keyword){
            try{
                console.log("seachKeyword "+id +" keyword "+keyword);
                this.unblock();
                app.searchParser(id,app.instagramToken(),keyword);
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.seachKeyword"})
            }
        },
        "globalfeed" : function(id,access){
            console.log("globalfeed "+id)
            try{
                this.unblock();
                app.globalFeedParser(id);

                // if(id && access){

                //     return true;
                // }
                // console.log(Meteor.user())
                // var cursorUsers = Meteor.users.findOne({"_id":id},Meteor.user()._id);
                // console.log("from _id");
                // console.log(cursorUsers);
                // var cursorUsers = Meteor.users.findOne({"services.instagram.id":Meteor.user().services.instagram.id});
                // console.log("from inner id");
                // console.log(cursorUsers);


                // if(Meteor.user() != null || Meteor.user() != undefined){
                //     console.log("user")
                //     if(Meteor.user().services.instagram){
                //         var id = Meteor.user().services.instagram.id;
                //         var access = Meteor.user().services.instagram.accessToken;
                //     }else{}
                //     app.globalFeedParser(id,access);
                //     return true;
                // }else if(id && !access){
                //     console.log("guest")
                //     var data=app.getInstagram(id);
                //     //console.log(data)

                //     console.log("id"+data.id+"access:"+data.access);
                //     app.globalFeedParser(data.id,data.access);
                //     return true;
                // }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.globalfeed"})
            }
        },
        "pushregister" : function (regid,clientid){
            try{
                var id = null;
                if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user().services.instagram){
                        id = Meteor.user().services.instagram.id;
                    }else{}
                    TapMatrixUser.update({"_id":id},{$set : {"regid":regid}});
                    return regid;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.pushregister"})
            }
        },
        "sendEmail" : function(html,email){
            try{
                console.log("sendEmail from methods");
                this.unblock();
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   email,
                    subject : app.subjectEmail,
                    html : html
                });

                // Duplicate copy sent
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   "decivote@gmail.com",
                    subject : "Duplicate copy of " +email,
                    html : html
                });

            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.sendEmail"})
            }
        },

        "sendNewsLetters" : function(message){
            try{
                app.adminText = "<br>" +message;
                return true;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.sendNewsLetters"})
            }
        },
        "timerAndForm" : function (clientid){
            try{
                generateRunTime();
                var data = {};
                data.countDownDays = countDownDays;
                data.countDownMins = countDownMins;
                data.countDownHours = countDownHours;
                data.countDownSecs = countDownSecs;
                data.form = true;
                data.push = true;
                var id = null;
                if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user()){
                        if(Meteor.user().services.instagram){
                            id = Meteor.user().services.instagram.id;
                        }else{}                }
                    else{
                        id = clientid;
                    }

                    if(id){
                        var cursorTapMatrixUser = Me.findOne({"_id":id});
                        if(cursorTapMatrixUser){
                            if(cursorTapMatrixUser.email){
                                data.form = false;
                            }
                        }
                    }
                    return data;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.timerAndForm"});
                return data;
            }
        },
        "startContest":function(){
            try{
                console.log("startContest");
                countDownSecs = 0;
                countDownMins = 0;
                countDownHours = 168;
                app.stopCountDow();
                app.startCounting();
                return true;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.startContest"})
            }
        },
        "stopContest":function(){
            try{
                app.stopCountDow();
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.stopContest"})
            }
        },
        "media" : function(mediaid,access){
            try{
                // if(app.debug)
                //     return;
                var cursorMedia = MediaCollection.find({"_id":mediaid}).count();
                var username,profile_picture,id,fullname,link,low,low
                if(cursorMedia == 0){
                    // console.log(mediaid +" " +access +" media method")
                    if(!access)
                        access = app.instagramToken();
                    //if(Meteor.user())
                        //access = Meteor.user().services.instagram.accessToken;
                    var mediaurl = "https://api.instagram.com/v1/media/" +mediaid +"?access_token=" +access;
                    var data =  Meteor.http.get(mediaurl);
                    // console.log(data.statusCode);
                    if(!data.error)
                    if(data.statusCode == 200){
                        //console.log(data.data.data);
                        mediajson = data.data.data;
                        if(mediajson){
                           username = mediajson.user.username;
                           profile_picture = mediajson.user.profile_picture;
                           id = mediajson.user.id;
                           fullname = mediajson.user.full_name;
                           link = mediajson.link;
                           low = mediajson.images.low_resolution.url;
                           thumb = mediajson.images.thumbnail.url;
                           std = mediajson.images.standard_resolution.url;
                           // console.log(mediajson.link)

                           MediaCollection.insert({"_id":mediaid,"profile_picture":profile_picture,"username":username,"clientid":id,"fullname":fullname,"link":link,"low" : low, "thumb" :thumb, "std" : std,"loud":0,"votes":0,"recomend":0});
                        }
                    }
                    return data;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.media"})
            }
        },
        "onetimemedia" : function(mediaid,access){
            // try{
                //var cursorMedia = Media.findOne({"_id":mediaid});

                // if(cursorMedia){

                // }
                // else{
                    // console.log(mediaid +" " +access +" media method")
                    if(!access)
                        access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733";
                    //if(Meteor.user())
                        //access = Meteor.user().services.instagram.accessToken;
                        var mediaArray = []
                    MediaCollection.find({}).forEach(function(datas){
                        if(datas.thumb)
                            return;
                        // console.log(datas._id)
                        var mediaurl = "https://api.instagram.com/v1/media/" +datas._id +"?access_token=" +access;
                        var data =  Meteor.http.get(mediaurl,app.temp);

                    })
                    return true;
                // }
            // }
            // catch(error){
            //     console.log(error);
            //     ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.media"})
            // }
        },
        "onetimefeed" : function(mediaid,access){
            // try{
                //var cursorMedia = Media.findOne({"_id":mediaid});
                var username,profile_picture,id,fullname,link,low,low
                // if(cursorMedia){

                // }
                // else{
                    // console.log(mediaid +" " +access +" media method")
                    if(!access)
                        access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733";
                    //if(Meteor.user())
                        //access = Meteor.user().services.instagram.accessToken;
                        var mediaArray = []
                    var cursorMedia = null;
                    Feed.find({}).forEach(function(data){
                        cursorMedia = MediaCollection.findOne({"_id":data.likeid});
                        if(cursorMedia)
                        Feed.update({"_id":data._id},{$set:{"low":cursorMedia.thumb}})
                    });
                    return true;
                // }
            // }
            // catch(error){
            //     console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.media"})
            // }
        },
        "getFeed" : function (id, accessToken){
            //try{
                this.unblock();
                app.feedFacebook(app.getFacebookUser(id));
                var cursorMe = app.getMe(id);
                if(cursorMe)
                if(cursorMe.instagramToken){
                    app.parseFeed(id, accessToken);
                }

                // if(Meteor.user() != null || Meteor.user() != undefined){
                //     if(Meteor.user()){
                //         if(Meteor.user().services.instagram){
                //             var access = Meteor.user().services.instagram.accessToken;
                //             var id = Meteor.user().services.instagram.id;
                //         }
                //         else{}

                //         // console.log(url);
                //         //not finished?

                //         app.parseFeed(id,access)
                //         return true;
                //     }
                //     return -1;
                // }
                // if(id && !access){
                //     var dataid=app.getInstagram(id);
                //     //console.log(dataid.access)
                //     var url = "https://api.instagram.com/v1/users/self/feed?count=10&access_token=" +dataid.access;
                //     var cursorMe = Me.findOne({"_id":dataid.id});
                //     if(cursorMe){
                //         if(cursorMe.nexturl)
                //             url = cursorMe.nexturl;
                //     }
                //     var data = Meteor.http.get(url,{"params":{"ACCESS_TOKEN":dataid.access,"action":"follow"}});
                //     console.log(dataid.id)
                //     console.log(dataid.access)
                //     app.parseFeed(data,dataid.id,dataid.access)
                //     return true;
                // }
            // }
            // catch(error){
            //     console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getFeed"})
            // }
        }/*,
        "oneTimeFollowsSetup" : function(){
          Follows.remove({});
          var MeCursor = Me.find({});
          var MeArray = [];
          var i=0;
          MeCursor.forEach(function(data){
            MeArray[i++] = data;
          });
          for(var i=0,il=MeArray.length;i<il;i++){
              for(var j=0,jl=MeArray.length;j<jl;j++){
                  if(MeArray[i] != MeArray[j]){
                      var insert = {"hits" : 0 ,"followid":MeArray[j]._id, "userid":MeArray[i]._id,"full_name":"not yet","profile_picture":MeArray[j].profile_picture,"username":MeArray[j].username}
                      Follows.insert(insert);
                  }
              }
          }

        }*/,
        "removeExtraFollows" : function(clientid){
            var meArray = [];
            var cursorMe = Me.find({});
            cursorMe.forEach(function(data){
                meArray.push(data._id);
            });
            var cursorFollows = Follows.find({"userid":clientid});
            cursorFollows.forEach(function(data){
                var flag = false;
                for(var i=0,il=meArray.length;i<il;i++){
                    if(meArray[i] == data.followid){
                        flag = true;
                    }
                }
                if(!flag){
                    Follows.remove({"_id":data._id});
                }
            });
        },
        "testingAPI" : function(id,temp_profile_picture){
            // var id = Meteor.user().services.instagram.id;
            // var access = Meteor.user().services.instagram.accessToken;
            // temp_profile_picture = newProfilePictureCheck(id,access);
            var startTime = new Date().getTime();

            app.updateProfilePictureDependecies(id,temp_profile_picture);
            var endTime = new Date().getTime();

            // if(temp_profile_picture.length>10) //Double Check Risky Shot
            // if(profile_picture != temp_profile_picture){
            //     updateProfilePictureDependecies(id,temp_profile_picture);
            //     profile_picture = temp_profile_picture;
            // }
            return endTime - startTime;
        },
        // "duplicateVoteCheck" : function(likeid,clientid,date){
        //     var cursorVotes = null;
        //     cursorVotes = Votes.find({"likeid":likeid,"followid":clientid});
        //         var smallDate = date;
        //     cursorVotes.forEach(function(data){
        //         if(data.date > smallDate)
        //             smallDate = data.date;
        //     });
        //     cursorVotes = Votes.find({"likeid":likeid,"followid":clientid});
        //     cursorVotes.forEach(function(data){
        //         if(smallDate > data.date){
        //             Votes.remove({"_id":data._id});
        //         }
        //     });

        // },
        "getTextForNewsletters" : function(id){
            //adminText = "If you are unable to see the images. Please click on Display image link. <br>" ;
            var youiestId = 363620479;
            if(id)
                youiestId = id;
            var access = "487690035.1fb234f.99f3c0ee04bc4a83a1719fb3aaa521ed";
            var recent = "https://api.instagram.com/v1/users/" +youiestId +"/media/recent?access_token=" +access;
            var data = Meteor.http.get(recent);
            var myText = "";
            app.adminText = "";

            if(data){
                if(data.statusCode == 200){
                    var imageArray = data.data.data;
                    if(imageArray.length > 0){
                        var caption = imageArray[0].caption;
                        if(caption)
                            caption = caption.text;
                        else
                            caption = "";
                        myText = caption;
                        app.adminText += caption;

                    }

                }
                if(data.statusCode == 200){
                        /*caption = data.data.data;
                         if(caption.length > 0){
                            var caption1 = imageArray[0].caption.from;
                            if(caption1){
                                caption1 = caption1.profile_picture;
                            }
                            else
                                caption1 = "";
                            youiestPic = caption1;
                        }*/
                        var imagesArray = data.data.data;
                        if(imagesArray.length > 0){
                            var images = imagesArray[0].images.thumbnail;
                            if(images)
                                images = images.url;
                            else
                                images = "";
                            app.youiestPic = images;

                        }
                    }
                    if(data.statusCode == 200){
                        caption = data.data.data;
                         if(caption.length > 0){
                            var caption1 = imageArray[0].caption.from;
                            if(caption1){
                               app.YouestUsername = caption1.full_name;
                            }
                        }
                    }
            }
            return  myText;
        },
        "registrationid" : function(registrationid,type,clientid){
            if(registrationid == "OK")
                return;
            var pushid = [];
             if(Meteor.user() != null || Meteor.user() != undefined || clientid){
                if(Meteor.user()){
                    if(Meteor.user().services.instagram){
                        var id = Meteor.user().services.instagram.id;
                    }
                    else{

                    }
                }
                    if(clientid)
                        id = clientid;
                    if(id){
                        // var cursorMe = Me.findOne({"_id":id});
                        // console.log(cursorMe);
                        /// removed old registration id and inserted new one
                        var cursorMe = Me.findOne({"_id":id});
                        if(cursorMe){
                            // if(cursorMe.pushid){
                            //     if(cursorMe.pushid.length){
                            //         pushid = cursorMe.pushid
                            //         pushid.push(registrationid);
                            //     }
                            // }
                            pushid = registrationid;
                        }
                        // if(pushid.length !=0){
                        //     pushid.push(registrationid);
                        // }
                        Me.update({"_id":id},{$set : {"pushid":pushid,"pushtype":type}});
                    }
                    Meteor.setTimeout(function(){
                        // app.pushToUser(registrationid,"You will receive updates from Tapmate",type);
                        // Email.send({
                        //     from: 'Tapmate <tapmate@youiest.com>',
                        //     to:   "nicolsondsouza@gmail.com",
                        //     subject : type,
                        //     text : registrationid
                        // });
                    },100);
                    return "Tapmate Success";

                return false;
              }
        },
        "notificationMethod" : function(message,senderid){

        },
        "sendMail" : function(){
            //Meteor.call("getTextForNewsletters");
            //app.emailDailyGen("625237041","hastenf@gmail.com")
            //resetMe("day");
            app.sentmailtome();
            //calcTime();
            // maileveryday();
            //app.myVotesOfWeek("625237041");
            //app.emailGeneration("625237041","hastenf@gmail.com");
        },
        "removeGlobalFeed" : function(){
            // GlobalFeed.remove({});
        },
        "additionalFollows" : function () {
            //  depricated function
            // var cursorMe = Me.find({});
            // cursorMe.forEach(function(data){
            //     var allFollow = {"hits" : 999 ,"followid":data._id, "userid":data._id,"full_name":"not yet","profile_picture":data.profile_picture,"username":data.username};
            //     Follows.insert(allFollow);
            // })

        },
        "usersVotesAdd" : function(clientid){
            this.unblock();
            app.usersVote(clientid,"580988446");
            var secondFollow = app.getSecondFollows(clientid);
            app.usersVote(clientid,secondFollow);
        },
        "newuseradjustment" : function (){
            var MeCursor = Me.find({});
            var confirmArray = [];
            MeCursor.forEach(function(data){
                var cursorFollows = Follows.findOne({"followid":data._id, "userid":data._id});
                if(cursorFollows)
                    return;
                var allFollow = {"hits" : 100 ,"followid":data._id, "userid":data._id,"full_name":"not yet","profile_picture":data.profile_picture,"username":data.username};
                confirmArray.push(allFollow);
                Follows.insert(allFollow);
            });
            return confirmArray;
        },
        "getUserIdFromUsername" : function(username){
            return Me.findOne({"username":username});
        },
        "getsurvey": function(id) {

            //console.log("getsurvey");
            var surveyArray = [];
            var votesCursor = Votes.find({"followid" : id,"place":1},{sort :{"date":-1}, limit:10});
            var duplicateArray = [];
            var duplicateFlag = false;
            votesCursor.forEach(function(data){
                var cursorFeed = Feed.findOne({"likeid":data.likeid});
                // var allFollow = {"_id" : data._id,"followid":data.followid,"likeid":data.likeid,"low":data.low};
                if(cursorFeed)
                    data.low = cursorFeed.low;
                duplicateFlag = false;
                for(var i=0,il=duplicateArray.length;i<il;i++){
                    if(duplicateArray[i] == data.likeid){
                        duplicateFlag = true;
                    }
                }
                if(!duplicateFlag){
                    surveyArray.push(data);
                    duplicateArray.push(data.likeid)
                }

            });
            return surveyArray;
        },
        "getVotes": function(likeid) {

            //console.log("getsurvey");
            var surveyArray = [];
            var votesCursor = Votes.find({"likeid":likeid});
            votesCursor.forEach(function(data){
                surveyArray.push(data);
            });
            return surveyArray;
        },
        "likesFeed" : function(clientid){
            this.unblock();
            var cursorMe = app.getMe(clientid);
            if(cursorMe)
            if(cursorMe.instagramToken){
                app.likesParser(clientid,cursorMe.instagramToken);
            }
        },
        "recentMediaFetch" : function(clientid){
            this.unblock();
            var cursorMe = app.getMe(clientid);
            if(cursorMe)
            if(cursorMe.instagramToken){
                app.recentMediaParser(clientid,cursorMe.instagramID,cursorMe.instagramToken);
            }
                // var popularurl = "https://api.instagram.com/v1/media/popular";
                // var id, access;
                //  if(Meteor.user() != null || Meteor.user() != undefined){
                //     if(Meteor.user()){
                //         if(Meteor.user().services.instagram){
                //         id = Meteor.user().services.instagram.id;
                //         access = Meteor.user().services.instagram.accessToken;
                //     }
                //     else{}

                //     }
                //  }


                // if(ID)
                //     id = ID;
                // if(ACCESS)
                //     access = ACCESS;
                // var searchurl = "https://api.instagram.com/v1/users/" +id +"/media/recent?access_token="+access;
                // data = Meteor.http.get(searchurl);
                // app.recentMediaParser(data,id,access);
                // // searchParser(data,id,access,keyword);
                // console.log("seachKeyword finished")
                return true;
        },
        "emailtest" : function(){
            if(Meteor.user() != null || Meteor.user() != undefined){
                if(Meteor.user()){
                    Accounts.sendEnrollmentEmail(Meteor.user(),"nicolsondsouza@gmail.com");
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        "verifyemails":function(emailtoken){
            var cursorMe = Me.find({"emailtoken":emailtoken});
            if(cursorMe){
                if(cursorMe.emailverify){
                    return "Already verified";
                }
                else{
                    Me.update({"_id":cursorMe._id},{$set : {"emailverify":true}});
                    return "Email verified"
                }
            }
            return "Verification failed";
        },
        "verifyPicture":function(emailtoken){
            console.log(emailtoken)
            var cursorEmailCollection = EmailCollection.findOne({"emailtoken":emailtoken});
            var likeid = null;

            if(cursorEmailCollection){
                    // console.log(cursorEmailCollection);
                    // return Meteor.call("addMeInGroup",emailtoken);
                    // do some updating
                    var email = cursorEmailCollection.email;
                    var cursorFollowsGroup = FollowsGroup.findOne({"_id":cursorEmailCollection.groupid});

                    // console.log(cursorEmailCollection.groupid)
                    // console.log(cursorFollowsGroup)
                    if(cursorFollowsGroup){
                        // update the group icon
                        // cursorFollowsGroup
                        var follows = cursorFollowsGroup.follows;
                        var picture = cursorFollowsGroup.picture;
                        var emails = cursorFollowsGroup.email;
                        var verify = cursorFollowsGroup.verify;
                        console.log("updated picture")
                        for(var i=0,il=emails.length;i<il;i++){
                            // console.log(email +" " +emails[i])
                            if(email == emails[i]){
                                // console.log("already in group " +email);
                                picture[i] = "images/face.jpg";
                            }
                        }
                        // id = getGuestId();
                        // follows.push(id);
                        // picture.push("images/question.jpg");
                        // emails.push(email);
                        // verify.push(false);
                        FollowsGroup.update({"_id":cursorEmailCollection.groupid},{ $set : {"follows":follows,"picture":picture,"email":emails,"verify":verify}});
                    }
                    EmailCollection.update({"_id":cursorEmailCollection._id},{$set : {"emailverify":true}});
                    return {"clientid":cursorEmailCollection.clientid,"likeid":cursorEmailCollection.likeid};
            }
            return null;
        },
        "addMeInGroup" : function(emailtoken){
          // var id = null; //Meteor.user().services.instagram.id;
          // console.log(id);
          // // FollowsGroup.remove({})
          // var cursorEmailCollection = EmailCollection.findOne({"emailtoken":emailtoken});
          //   var likeid = null;
          //   var email = cursorEmailCollection.email;


          //   id = getGuestId();

          //   return 0;
        },
        "guestFeed":function(likeid){
            return;
            // no longer in use no more guest concept here
            // var cursorFeed = Feed.findOne({"likeid":likeid});
            // if(cursorFeed){
            //     Feed.remove({"clientid":"guest","likeid":likeid});
            //     Feed.insert({"clientid":"guest","likeid":likeid,"low":cursorFeed.low,"display":"y"});
            // }

        },
        "updateGuestToUser" : function(previousClientId,clientid){
            console.log(previousClientId,clientid);
            var cursorFollowsGroup = FollowsGroup.find({});
            var i=0,il=0;
            var updateFlag = false;
            cursorFollowsGroup.forEach(function(data){
                var follows = data.follows;
                var picture = data.picture;
                for(i=0,il=follows.length;i<il;i++){
                    if(follows[i] == previousClientId){
                        follows[i]
                        updateFlag = true;
                        picture[i] = Meteor.user().profile.picture;
                    }
                }
                if(updateFlag){
                    FollowsGroup.update({"_id":data._id},{ $set : {"follows":follows,"picture":picture}});
                }
            });
        },
        "testResult" : function(){
            return testResult;
        },
        "runFunction" : function(fun){
            Follows.find({}).forEach(function(data){
                if(data.userid == data.followid){
                    Follows.update({"_id":data._id},{$set : {"hits":9999}});
                }
            })
        },
        "getBase" : function(){
            return Meteor.getBase('http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg');
        },
        "getLanguage" : function(lang,version){
                if(language.version == version){
                    return {"version":version}
                }
                else
                    return language;
        },
        "tryToMerge" : function(previousid){
            console.log(tryToMerge);
            // console.log(Meteor.user());
            return true;
        },
        "testMerging" : function(){
            var previousid = "8HoBSPdYY6n5QHLpu";
            var currentid = "FMQ6LB55SoDptxQPn";
            var previousUsersCursor = Meteor.users.findOne({"_id":previousid});
            // console.log(previousUsersCursor);
            var currentUsersCursor = Meteor.users.findOne({"_id":currentid});
            // console.log(currentUsersCursor);
            Meteor.users.update({"_id":currentid},{ $set : {"services.password" : previousUsersCursor.services.password}});
            // Meteor.users.update({"_id":previousid},{ $set : {"services.instagram" : currentUsersCursor.services.instagram}});
            return currentUsersCursor;
        },
        "guestFirstTimeLogin" : function(guestid){
            console.log("guestFirstTimeLogin");
            var profile_picture = "./face/face1.png";
            var fullname = guestid;

            var ClientId = guestid;
            var cursorMe = null;
            var username = guestid;
            var access = null;

            var firstTimeFlag = false;
            var cursorMe = Me.findOne({"_id":ClientId})
            if(!cursorMe){
                firstTimeFlag = true;
                var insert = {"_id":ClientId,"followid":ClientId,"profile_picture":profile_picture,"username" :username,"recomended":0,"score":0,"timesLoggedin":0,"movedme":0,"movedrecomm":0,"votes":0,"vor":0,"recomending":0,"logout":0,"follownew":0,"swipeleft":0,"swiperight":0,"alreadyloggedin":0,"heatscore":0}

                // new users face wan't coming bug fix
                newFollow = {"hits" : 100 ,"followid":ClientId, "userid":ClientId,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                Follows.insert(newFollow);

                // var SessionInsert = {"_id":ClientId,"username" :username,"InDate":0,"OutDate":0,"sessionTime":0,"height":0,"width":0}
                // UserSession.insert(SessionInsert);
                Me.insert(insert);
                //if(DebugFace){
                //}


            }
            newFollow = {"hits" : 100 ,"followid":ClientId, "userid":ClientId,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                Follows.insert(newFollow);
            app.addlocallfollows(ClientId);

            // Meteor.setTimeout(function(){
            //             Meteor.call("globalfeed",ClientId,null);
            //             Meteor.call("popular",ClientId,null);


            //         },100);
            return {"id" : ClientId , "profile_picture" :profile_picture,"username" :username,"firstTimeFlag":firstTimeFlag};


        },
        "convertGuestToUser" : function(previousClientId,currentClientId){
            if(previousClientId && currentClientId)
            app.convertGuestToUser(previousClientId,currentClientId);
        },
        "checkOldCollection" : function(oldCollectionArray,clientid){
            var cursorFeed = Feed.find({"clientid" : clientid,"display":"y"},{sort :{"type":1}, limit:40});
            var outDatedCollection = [];
            // console.log(oldCollectionArray);
            cursorFeed.forEach(function(data){
                var trueFlag = false;
                for(var i=0,il=oldCollectionArray.length;i<il;i++){
                    if(oldCollectionArray[i] == data._id)
                        trueFlag = true;
                }
                if(!trueFlag)
                    outDatedCollection.push(data._id)
            });
            // console.log(outDatedCollection)
            return outDatedCollection;
        },
        // HASH MANIA CARRY FORWard
        "verifyHashEmail" : function(email){

            // try{
                console.log("verifyHashEmail " +email)
                var cursorMe = Me.findOne({"_id":email});
                var emailtoken = Random.id();
                if(cursorMe){
                    Me.update({"_id":cursorMe._id},{$set :{"email":email,"emailtoken":emailtoken}})
                }
                else{
                    Me.insert({"_id":email,"email":email,"emailtoken":emailtoken,"verified":false})
                }
                console.log("http://localhost:3000/verifyHashEmail/"+emailtoken);
                Email.send({
                            from: 'Tapmate <tapmate@youiest.com>',
                            to:   email,
                            subject : "Welcome to Tapmate " +email,
                            text : ROOTURL +"/verifyHashEmail/"+emailtoken
                        });
                return true;
            // }
            // catch(error){
            //     console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.seachKeyword"})
            // }
        },
        "verifyHashEmailToken" : function(emailtoken,password){
            var cursorMe = Me.findOne({"emailtoken":emailtoken});
            if(cursorMe){
                // ,"emailtoken":"" can use for future
                Me.update({"_id":cursorMe._id},{$set :{"verified":true,"password":password}});
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
            return false;
        },
        "loginWithHashRepublic" : function(email,password){
            var cursorMe = Me.findOne({"_id":email,"password":password});
            if(cursorMe){
                return cursorMe;
            }
            return false;
        },
        "mergedMyFace" : function(emailtoken){
            // console.log(emailtoken)
            var cursorMe = Me.findOne({"emailtoken":emailtoken});
            if(cursorMe){
                // ,"emailtoken":"" can use for future

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
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
        },
        "mergedMyFacebookFace" : function(emailtoken,clientid,username,userid,email,profilePictureUrl,authResponse){
            console.log("mergedMyFacebookFace");
            var cursorUserHashMania = Me.findOne({"emailtoken":emailtoken});
            if(clientid){
                cursorUserHashMania = Me.findOne({"_id":clientid});
            }
            if(cursorUserHashMania){
                        var insert = {}
                        insert.fbID = userid;
                        insert.fbUsername = username;
                        insert.fbToken = authResponse;
                        insert.fbFace = profilePictureUrl;
                        insert.fbEmail = email;
                        insert.fbFullname = username;
                        insert.face = profilePictureUrl;
                        Me.update({"_id":cursorUserHashMania._id},{$set :insert});
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
        },
         "testHashPush" : function(message){

            pushid = "APA91bGq79KW4oJTIkCcyZJpNhMwa3y7luCEv3og_SuMaTAQjFt8f49AQQeHNGdv0nv6iZBbBTKD7Yn9RNvMM2VJaiyhDBFtW2p76MrAXEJiOHdRZzr23VN3LDuIfEh8E_9SfcRElvGuSyXCit7WtzkG-LadqEKKNQ";
            // pushid = "APA91bFCaNkK1LfJ7PWXtpVLVrRd_rW9Dw8_ToKKqhKs527VlhM3vb6tkB8EL-g_-zgV5qfc-zwwzHVDQvFWZhhOy67zwrEZXWFgSEePk2lXYQjxHj-4H51WZcmprSs55EdQuCwcqWNGo6b2lj8RrZ4wvvk_evbrPcAaxlJPDozz789Gi8fS9fE";
            // return app.getFacebookFace("802306386446088")
            app.pushToUser(pushid,message,"android","luffy") //registrationid,mymessage,type,keyword
        },
        "mergedMyGoogleFace" : function(emailtoken){
            var cursorMe = Me.findOne({"emailtoken":emailtoken});
            if(cursorMe){
                // ,"emailtoken":"" can use for future

                if(Meteor.user()){
                        if(Meteor.user().services.google){
                            var insert = {}
                            insert.googleID = Meteor.user().services.google.id;
                            insert.googleToken = Meteor.user().services.google.accessToken;
                            insert.googleFace = Meteor.user().services.google.picture
                            insert.googleFullname = Meteor.user().services.google.name;
                            // console.log(insert)
                            Me.update({"_id":cursorMe._id},{$set :insert});
                        }

                    }
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
        },
        "firstUserFaceBug" : function(){
            Follows.find({}).forEach(function(data){
                if(data.followid == data.userid){
                    Follows.update({"_id":data._id},{$set:{"hits":999}});
                }
            })
            return true;
        },
        "addDatesInFeed" : function(){
            Feed.find({}).forEach(function(data){
                if(!data.date){
                    Feed.update({"_id":data._id},{$set : {"date": new Date().getTime()}});
                }
            });
            return true;
        },
        "getFeedIds" : function(options){
            var array = [];
            Feed.find({"clientid" : options.clientid,"type":options.type}
            ,{sort :{"date":-1},skip:options.page * (app.pagenationLimit - 10),limit:app.pagenationLimit})
            .forEach(function(data){
                array.push(data._id);
            });
            return array;
        },
        "ping" : function(){
            console.log("Ping " +this.connection.clientAddress +" " +Meteor.userId())
            return true;
        },
        "followsUpgrade" : function(){
            Follows.find({}).forEach(function(data){
                Follows.update({"_id":data._id},{$set:{"date" : new Date().getTime()}})
            });
            return true;
        },
        "checkFeed" : function(feedId){
            this.unblock();
            var cursorFeed = Feed.findOne({"_id":feedId});
            if(cursorFeed){
                var cursorVotes = Votes.findOne({"likeid":cursorFeed.likeid,"clientid":cursorFeed.clientid});
                if(cursorVotes){
                    Feed.update({"_id":feedId},{$set : {"display":"n"}});
                }
            }
        },
        "checkSeenStatus" : function(clientid,likeid){
            var feedscheck = Votes.findOne({"followid":clientid,"likeid":likeid})
            if(!feedscheck){
                // console.log("no votes");
                feedscheck = Feed.findOne({"likeid":likeid, "clientid" : clientid, "display":"n"})
            }
            if(feedscheck){
                // console.log(feedscheck.likeid)
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   'Decivote <decivote@gmail.com>',
                    subject : "Seen Image poped again",
                    text : "clientid : "+ clientid + " and likeid : " + likeid
                });
                return true;
            }else{
                return false;
            }

        },
        "fastfeed" : function(options){
            this.unblock();
            return app.fastfeed(options);
        }
    });



/////Method ENDS///
