Meteor.methods({
  "onSendPush": function(feedId, followId){
    var feed = Feed.findOne(feedId);
    var messageNotify = Meteor.user().getName() + " has sent you a picture";
    TapmateNotification.insert({
      "senderid": followId,
      "message": messageNotify,
      "notify": false,
      "low": feed.low,
      "likeid": feed.likeid,
      "route": "/image/"+feed.likeid,
    });
  },
  "getPushId": function(options){
    if(Meteor.userId()){
      console.log(options)
      Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.pushId":options.pushId,"profile.pushDevice":options.pushDevice}});
      Meteor.call("onTestPush", options);
    }
  },
  "onTestPush": function(options){
    if(options.pushDevice == "android"){
      app.pushServer.sendAndroid(
        text.settings.pushDescription,
        [options.pushId],
        "Title",
        "Welcome message",
        1
      );
    }
    else{
      app.pushServer.sendIOS(
        text.settings.description || "Description",
        options.pushId,
        "Title",
        "Welcome message",
        1
      );
    }
  }
});