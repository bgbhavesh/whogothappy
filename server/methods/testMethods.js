Meteor.methods({
  "resetDB": function(){
    Follows.remove({});
    Votes.remove({});
    Me.remove({});
    Comments.remove({});
    TapMatrixUser.remove({});
    Contest.remove({});
    MediaCollection.remove({});
    ErrorUpdate.remove({});

    SponserKeyword.remove({});
    MiniGame.remove({});
    Tapmate.remove({});
    TapmateNotification.remove({});
    UsersVote.remove({});
    Chat.remove({});
    FollowsGroup.remove({});
    UserSession.remove({});
    Feed.remove({});
    EmailCollection.remove({});
    GroupVoteRecommend.remove({});
    IpAddress.remove({});
    MethodTimer.remove({});
    Toast.remove({});
    User.remove({});
  }
});

Meteor.startup(function(){
  // console.log(Meteor.users.find().count())
});