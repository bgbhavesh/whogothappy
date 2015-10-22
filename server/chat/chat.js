app.makeChat = function(chatId){
  var chat = new Chat.Model(chatId);
  Chat.insert(chat);
}

Meteor.methods({
  "addChatNotification": function(userId, followId, chatValue, chatLength, chatId){
    this.unblock();
    app.addChatNotification(userId, followId, chatValue, chatLength, chatId);
  }
});

app.addChatNotification = function(userId, followId, chatValue, chatLength, chatId){
  var follow = Follows.findOne({"userid": followId, "followid": userId});
  if(!follow)
    return;
  Follows.update(follow._id, {$inc: {"chatNotification": 1}});
  TapmateNotification.insert({
    "senderid": followId,
    "message": chatValue || "",
    "notify": false,
    "pushType": "chat",
    "title": Meteor.user().getName(),
    "route": "/chat/"+chatId,
  });

  if(chatLength > 50)
    app.sliceChat(userId, followId, chatValue, chatLength, chatId);
}
app.sliceChat = function(userId, followId, chatValue, chatLength, chatId){
  var chat = Chat.findOne(chatId);
  if(!chat)
    return;
  chat = chat.chats;
  for(var i=0,il=chat.length - 20;i<il;i++){
    Chat.update(chatId, {
      $pull: {"chats": {'_id': chat[i]._id}},
      $push: {"oldChat": chat[i]}
    });
  }
}