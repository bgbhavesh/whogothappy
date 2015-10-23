UI.registerHelper("user", function(){
  return Meteor.user();
});

UI.registerHelper("router", function(){
  var current = Router.current();
  if(current && current.params)
    return current.params;
  else
    return {};
});

UI.registerHelper("feed", function(){
  return Feed.find({
    "clientid" : Meteor.userId(),
    "display":"y"
  },
  {
    sort :{"date":1},
    limit:30
  });
});

UI.registerHelper("image", function(){
  return {
    "feed": Feed.findOne({"likeid": app.routeParam("imageId")}),
    "bigImage": MediaCollection.findOne({"_id": app.routeParam("imageId")})
  }
});
UI.registerHelper("imageFun", function(){
  var cursorVote = Votes.findOne({
      "followid": Meteor.userId(),
      "likeid": app.routeParam("imageId")
    });
  if(cursorVote)
  return {
    "votes": Votes.find({"likeid": app.routeParam("imageId")}),
    "recommending": Feed.find({
        "likeid": app.routeParam("imageId"),
        "type": 1,
        "whoid": Meteor.userId()
      }),
    "recommended": Feed.find({
      "likeid": app.routeParam("imageId"),
      "type": 1,
      "clientid": Meteor.userId()
    })
  }
  else{
    return {};
  }
});
UI.registerHelper("follows", function(){
  return Follows.find({"userid": Meteor.userId()});
});

UI.registerHelper("users", function(){
  return Meteor.users.findOne(this.createdBy);
});
