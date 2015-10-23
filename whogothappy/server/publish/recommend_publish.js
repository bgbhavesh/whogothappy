Meteor.publish("recommending",function(imageId){
  try{
    return Feed.find({
        "likeid": imageId,
        "type": 1,
        "whoid": this.userId
      });

  }
  catch(error){
    app.onError(error);
  }
});

Meteor.publish("recommended",function(imageId){
  try{
    return Feed.find({
      "likeid": imageId,
      "type": 1,
      "clientid": this.userId
    });
  }
  catch(error){
    app.onError(error);
  }
});