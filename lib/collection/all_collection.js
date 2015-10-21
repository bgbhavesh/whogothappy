
// Likes = new Mongo.Collection("likes");

// Recents = new Mongo.Collection("recents");
// Recommend = new Mongo.Collection("likesonpictures");
// Popular = new Mongo.Collection("popular");
// GlobalFeed = new Mongo.Collection("globalfeed");
// Search = new Mongo.Collection("search");

Votes = new Mongo.Collection("votes");
Me = new Mongo.Collection("myself");
Comments = new Mongo.Collection("comments");
TapMatrixUser = new Mongo.Collection("tapmatrixuser");
Contest = new Mongo.Collection("contest");
MediaCollection =  new Mongo.Collection("media");
ErrorUpdate = new Mongo.Collection("error");
SponserKeyword = new Mongo.Collection("sponserkeyword");
MiniGame = new Mongo.Collection("minigame");
Tapmate = new Mongo.Collection("tapmate");
TapmateNotification = new Mongo.Collection("notification");
UsersVote = new Mongo.Collection("usersvote");

FollowsGroup =  new Mongo.Collection("followsgroup");
UserSession =  new Mongo.Collection("usersession");
//Testing collection
EmailCollection = new Mongo.Collection("email");
GroupVoteRecommend = new Mongo.Collection("groupvoterecommend");
IpAddress = new Mongo.Collection("ipaddress");
MethodTimer = new Mongo.Collection("methodtimer");
Toast = new Mongo.Collection("toast");

Meteor.startup(function(){
if(Meteor.isClient){
  Ground.Collection(Follows);
  Ground.Collection(Feed);
}
});