Meteor.publish("onefeed",function(){
  try{
    return [
      Feed.find({"clientid" : this.userId,"display":"y"}, {sort: {"date": 1}, limit: 30}),
      Follows.find({"userid": this.userId})
    ]
  }
  catch(error){
    app.onError(error);
  }
});

Meteor.publish("history",function(pageNum){
  try{

      return Feed.find({"clientid" : this.userId,"display":"n"}, {
        "skip": pageNum * 50,
        "limit": 50,
        "sort": {"date": -1}
      });
  }
  catch(error){
    app.onError(error);
  }
});