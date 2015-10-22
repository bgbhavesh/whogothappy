Meteor.startup(function(){
  if(app.debug)
    return;
  // Follows.find().forEach(function(follow){
  //   if(!follow.chatId){
  //     Follows.update(follow._id, {$set: {"chatId":
  //       app.getChatId(follow.userid,follow.followid)
  //     }})
  //   }
  // });
  Chat.find().forEach(function(chat){
    for(var i=0,il=chat.chats.length;i<il;i++){
      var update = {};
      update["oldChat.$.chatHTML"] = app.convertChatToHTML(chat.chats[i].chatValue);
      Chat.update({"_id": chat._id, "chats._id": chat.chats[i]._id}, {$set: update});
    }
    for(var i=0,il=chat.chats.length;i<il;i++){
      var update = {};
      update["oldChat.$.chatHTML"] = app.convertChatToHTML(chat.chats[i].chatValue);
      Chat.update({"_id": chat._id, "chats._id": chat.chats[i]._id}, {$set: update});
    }
  });
});