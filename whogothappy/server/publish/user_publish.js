
app.sub.user = {"profile": 1, "username": 1, "roles": 1};

Meteor.publish("find_friends", function(pageNum){
  return Meteor.users.find({}, {
    "skip": pageNum * 50,
    "limit": 10,
    "fields": app.sub.user,
    "sort": {"profile.createdAt": -1}
  });
});