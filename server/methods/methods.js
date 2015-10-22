Meteor.methods({
  "updateRecommend": function(feedId, followId){
    var cursorFeed = Feed.findOne({"clientid" : followId,"display":"y"}, {sort: {"date": 1}});
    if(cursorFeed){
      if(cursorFeed.date)
        Feed.update(feedId, {$set: {date: (cursorFeed.date - 100)}});
      else
        Feed.update(feedId, {$set: {date: 100}});
    }
    Meteor.call("onSendPush", feedId, followId);
  },
  "find_friends": function(){
    return app.find_friends();
  },
  "onRemoveUser": function(userId){
    if(Meteor.userId() != userId)
      Meteor.users.remove(userId);
  }
});

app.find_friends = function(){
  var followIds = [];
  followIds.push(Meteor.userId());
  Follows
    .find({"userid": Meteor.userId()})
    .forEach(function(follow){
      followIds.push(follow.followid);
    });
  return Meteor.users
    .find({"_id": {$nin: followIds}},{"fields": app.sub.user, limit: 10})
    .fetch();
}
