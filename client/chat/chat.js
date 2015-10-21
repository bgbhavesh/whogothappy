var timeoutId = null;
Template.chat.helpers({
  "chat": function(){
    return Chat.findOne(app.routeParam("chatId"));
  },
  "scrollBottom": function(){
    if(timeoutId)
      clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      var ele = $(".commentSection .list");
      if(!ele[0])
        return;
      ele.animate({ scrollTop:
        ele[0].scrollHeight});
    },100);
    if(this.createdBy == Meteor.userId())
      return "rFloat";
    else
      return "";
  },
  // "style": function(){
  //   return window.innerHeight - 54 - 38 - 35;
  // }
});

Template.chat.events({
  "keyup #chatValue": function(evt, tpl){
    if(evt.keyCode == 13)
      app.onSendChat();
    $(".showChat p").text(evt.currentTarget.value);
  },
  "click .onSendChat": function(){
    app.onSendChat();
  },
  "click .relaxed.list": function(){
    app.removeChatNotification();
  },
  "focus #chatValue": function(){
    app.onChatFocus();
  },
  "blur #chatValue": function(){
    app.onChatBlur();
  }
});

app.onSendChat = function(){
  var chatValue = $("#chatValue").val();
  if(!chatValue)
    return;
  var chat = Chat.chatMode(chatValue);
  Chat.update(app.routeParam("chatId"), {$push: {chats:chat}});
  $("#chatValue").val("");

  // also notify the user
  app.addChatNotification(chatValue);
}

app.addChatNotification = function(chatValue){
  var chatLength = Number($("#chatValue").attr("data-length"));
  Meteor.call("addChatNotification",
    Meteor.userId(), app.getChatFollowId(),
    chatValue, chatLength, app.routeParam("chatId"));
  app.removeChatNotification();
}

app.chatFollowId = null;
app.setChatFollowId = function(flag){
  if(!app.chatFollowId || flag){
    var followId = app.getChatFollowId();
    app.chatFollowId = Follows.findOne({"followid": followId});
  }
}
app.getChatFollowId = function(){
  var chatId = app.routeParam("chatId");
  chatId = chatId.split("_");
  return Meteor.userId() == chatId[0] ? chatId[1] : chatId[0];
}
app.removeChatNotification = function(){
  try{
    app.chatFollowId.setNotification(0);
  }catch(err){app.setChatFollowId()}
}

app.onChatFocus = function(){
  $(".showChat")
    .removeClass("hidden")
    .addClass("visible");
};
app.onChatBlur = function(){
  $(".showChat")
    .removeClass("visible")
    .addClass("hidden");
};