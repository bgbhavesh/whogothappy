Meteor.publish("chat",function(chatId){
  try{
    if(Chat.find(chatId).count() == 0){
      app.makeChat(chatId);
    }
    return [
      Chat.find(chatId, {"fields": {"oldChat": -1, "chats": 1}}),
      // , {"fields": {"chats":{$slice: 10}}} this works but not reactive
      Meteor.users.find({
        "_id": {$in:
          [chatId.split("_")[0], chatId.split("_")[1]]
        }},
        {"fields": app.sub.user}
      )
    ];
  }
  catch(error){
    app.onError(error);
  }
});