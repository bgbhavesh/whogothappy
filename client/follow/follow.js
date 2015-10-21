Template.follow.events({
  "click .onUnFollow": function(){
    return Follows.remove(this._id);
  },
  "click .onStartChat": function(){
    this.setNotification();
  }
});

Template.follow.helpers({
  // "chatId": function(){
  //   return app.getChatId(Meteor.userId(), this.followid);
  // }
});
app.onFollow = function(opt){
  if(opt.data.followid != Meteor.userId()){
    Meteor.call("follow", Meteor.userId(), opt.data.followid);
    app.onAnimateButton(opt, "follow");
  }
}

app.onLike = function(opt){
  if(opt.data.followid == Meteor.userId()){
    app.onAnimateButton(opt, "heart");
  }
}

app.onClickVote = function(opt){
  app.onFollow(opt);
  app.onLike(opt);
}

app.onAnimateButton = function(opt, button){
    $(".imageButton."+button)
      .attr("style", $(opt.evt.currentTarget).attr("style"))
      .removeClass("invisible");
    setTimeout(function(){
      $(".imageButton."+button)
        .addClass("invisible");
    },2000);
}