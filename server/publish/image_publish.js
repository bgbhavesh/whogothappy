Meteor.publish("image",function(likeid){
  try{
    return [
      Feed.find({"likeid": likeid}, {limit: 1}),
      Votes.find({"likeid": likeid})
    ]
  }
  catch(error){
    app.onError(error);
  }
});
Meteor.publish("bigImage",function(likeid){
  try{
    return MediaCollection.find({"_id": likeid});
  }
  catch(error){
    app.onError(error);
  }
});
