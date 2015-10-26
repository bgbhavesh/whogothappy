


// Template.game.helpers({
//   "images": function(){
//     Session.get("refreshId");
//     return app.dummyImages();;
//   }
// });

Template.game.events({
  "click .imageContainer img": function(evt, tpl){
    if(app.isClickable){
      app[app.gameLevel].validate({evt: evt, tpl: tpl});
      app.isClickable = false;
    }
  },
  "click .onStartGame": function(){
    app.onSetupGame();
  }
});