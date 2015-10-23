app.dummyUser = [
  "http://semantic-ui.com/images/avatar2/large/kristy.png",
  "http://semantic-ui.com/images/avatar2/large/matthew.png",
  "http://semantic-ui.com/images/avatar2/large/molly.png",
  "http://semantic-ui.com/images/avatar2/large/elyse.png",
  "http://semantic-ui.com/images/avatar/large/elliot.jpg",
  "http://semantic-ui.com/images/avatar/large/jenny.jpg",
  "http://semantic-ui.com/images/avatar/large/steve.jpg",
  "http://semantic-ui.com/images/avatar/large/daniel.jpg",
  "http://semantic-ui.com/images/avatar/large/helen.jpg",
  "http://semantic-ui.com/images/avatar/large/veronika.jpg",
  "http://semantic-ui.com/images/avatar/large/stevie.jpg",
];
app.dummyImages = function(){
  var truePosition = app.randomNumber(0,15);
  app.dummyImage = [];
  for(var i=0,il=16;i<il;i++){
    if(truePosition)
      app.dummyImage.push(app.dummyUser[app.randomNumber(0,10)]);
    else
      app.dummyImage.push(app.dummyUser[app.randomNumber(0,10)]);
  }
  return app.dummyImage;
}


// Template.game.helpers({
//   "images": function(){
//     Session.get("refreshId");
//     return app.dummyImages();;
//   }
// });

var toggle = 1;
Template.game.events({
  "click .cards .card": function(evt, tpl){
    if(toggle % 2 == 0)
      $(evt.currentTarget).transition('tada');
    else
      $(evt.currentTarget).transition('shake');
    toggle++;
  },
  "click .onStartGame": function(){
    app.onSetupGame();
  }
});