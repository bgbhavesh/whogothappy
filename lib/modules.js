app.formatData = function(insert){
  var userId = null;
  var date = app.getDate();
  try{
    userId = Meteor.userId();
  }
  catch(err){}
  insert.createdBy = insert.createdBy || userId;
  insert.modifiedBy = userId;

  insert.createdAt = insert.createdAt|| date;
  insert.modifiedAt = date;
  insert._id = insert._id || Random.id();
}

app.routeParam = function(key){
  var value = "";
  var current = Router.current();
  if(current && current.params && current.params[key])
    value = current.params[key];
  return value;
}

app.regex.link = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
app.convertChatToHTML = function(comment){
  var commentHTML = "";

  if(!comment)
    return commentHTML;

  var splitComment = comment.split(" ");
  for(var i=0,il=splitComment.length;i<il;i++){
    // if(splitComment[i].charAt(0) == "@"){
    //   var split = splitComment[i].split("@");
    //   splitComment[i]=" <a href='" +preUrl  +split[1] +"/username" +"'>"+splitComment[i]+"</a>"; // +splitComment[i]
    // }
    // if(splitComment[i].charAt(0) == "#"){
    //   var split = splitComment[i].split("#");
    //   splitComment[i]=" <a href='" +preUrl +split[1] +"/hash" +"'>"+splitComment[i]+"</a>"; // +splitComment[i]
    // }
    if(app.regex.link.test(splitComment[i])){
      splitComment[i]=" <a href='" +splitComment[i] +"' target='_blank'>"+splitComment[i]+"</a>";
    }

    if(i != 0)
      commentHTML+= " "+splitComment[i];
    else
      commentHTML+= splitComment[i];
  }

  return commentHTML;
}

app.getChatId = function(userId, followId){
  var chatId = null;
  userId = Number(userId);
  followId = Number(followId);

  if(userId < followId)
    chatId = userId +"_" + followId;
  else
    chatId = followId +"_" + userId;
  return chatId;
}