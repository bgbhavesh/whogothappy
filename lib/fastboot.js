// Meteor.Router = Router;
// if(!Meteor.isServer){
//     if(window.location.href.match("file:"))
//         Meteor.isCordova = true;
// }
// if(Meteor.isCordova){
// 	Session.set("phonegap",true);
// }
// if(!Meteor.settings){
//     Meteor.settings = {};
// 	Meteor.settings.public = {
//         "nicolson" : "helloworld",
//         "redirect" : "http://youtap.meteor.com/_oauth/instagram?close=close&response_type=code",
//         "clientid" : "6bda8578dd0f4cc2bdfcaa225c72889e",
//         "secret" : "bb5e315798e64bcb926d12c1519e0d62",
//         "DDP" : "ddp+sockjs://ddp--****-youtap.meteor.com/sockjs",
//         "redirectServer" : "http://youtap.meteor.com/_oauth/instagram?close=close",
//         "redirectClose" : "http://youtap.meteor.com/_oauth",
//         "fbredirect" : "http://youtap.meteor.com/facebook?close",
//         "fbid" : "317297441740673",
//         "fbsecret" :"6061ce735c0469c412fa4abc8b22e52c",
//         "fbclient": "7c5254d6b3bada6e80917b228dd9333e",
//         "fbpost" : "http://youtap.meteor.com/app/"
//     };
//     //  Meteor.settings.public = {
//     //     "nicolson" : "helloworld",
//     //     "redirect" : "http://localhost:3000/_oauth/instagram?close=close&response_type=code",
//     //     "clientid" : "f28d28f5785443349d0a60d0e8b9f98a",
//     //     "secret" : "359db797bbdf45f0ae09d648a87943b9",
//     //     "DDP" : "",
//     //     "redirectServer" : "http://localhost:3000/_oauth/instagram?close=close",
//     //     "fbredirect" : "http://localhost:3000/facebook?close",
//     //     "fbid" : "679347035440335",
//     //     "fbsecret" :"a62d337e67d6c941c3846205362cfdb1",
//     //     "fbclient": "e68372f627dc83545241f553e98dad20",
//     //     "fbpost" : "http://youtap.meteor.com/app/"
//     // }
// }



// if(!Meteor.isServer){
//     // Likes = new Meteor.Collection("likes");
//     //Follows = new Meteor.Collection("follows");
//     Follows = new GroundDB("follows");
//     // Recents = new Meteor.Collection("recents");
//     // Recommend = new Meteor.Collection("likesonpictures");
//     Me = new Meteor.Collection("myself");
//     Votes = new Meteor.Collection("votes");
//     Comments = new Meteor.Collection("comments");
//     // Popular = new Meteor.Collection("popular");
//     // GlobalFeed = new Meteor.Collection("globalfeed");
//     MediaCollection = new Meteor.Collection("media");

//     //Testing
//     Feed = new Meteor.Collection("feed");
//     // GroundDB(Feed);
//     // Search = new Meteor.Collection("search");
//     SponserKeyword = new Meteor.Collection("sponserkeyword");
//     ErrorUpdate = new Meteor.Collection("error");
//     MiniGame = new Meteor.Collection("minigame");
//     TapmateNotification = new Meteor.Collection("notification");
//     UsersVote = new Meteor.Collection("usersvote");
//     Chat = new Meteor.Collection("chat");
//     FollowsGroup = new Meteor.Collection("followsgroup");
//     UserSession = new Meteor.Collection("usersession");
//     GroupVoteRecommend = new Meteor.Collection("groupvoterecommend");
//     MethodTimer = new Meteor.Collection("methodtimer");
//     VideoFeed = new Meteor.Collection("videofeed");
//     Toast = new Meteor.Collection("toast");

//     // test local db

//     // localdb = new LocalDB();
//     // localdb.addCollection({"collection":Follows,"collectionName":"follows"});
//     // // LocalDB.prototype.saveCollection
//     // LocalDB.restoreCollection();
// }

//     FastFeed = new Meteor.Collection("fastfeed");
// app.app={};
// app.app.url = "http://youtap.meteor.com";
// app.app.welcome="Welcome to Tapmate";
