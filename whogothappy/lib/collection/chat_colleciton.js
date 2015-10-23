Chat = new Mongo.Collection("chat");

Chat.helpers({
});
Chat.Model = function(chatId){

  var chat = {};
  chat._id = chatId;
  chat.chats = [];

  app.formatData(chat);
  return chat;
}

Chat.chatMode = function(chatValue){
  var subChat = {};
  subChat.chatValue = chatValue;
  subChat.chatHTML = app.convertChatToHTML(chatValue);
  app.formatData(subChat);
  return subChat;
}