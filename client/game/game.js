app.dummyUser = [
  "http://semantic-ui.com/images/avatar2/large/kristy.png",
  "http://semantic-ui.com/images/avatar2/large/matthew.png",
  "http://semantic-ui.com/images/avatar2/large/molly.png",
  "http://semantic-ui.com/images/avatar2/large/elyse.png"
];
app.dummyImages = function(){
  app.dummyImage = [];
  for(var i=0,il=16;i<il;i++)
    app.dummyImage.push(app.dummyUser[app.randomNumber(0,3)]);
  return app.dummyImage;
}
setInterval(function(){
  $(".cards .card").transition('flash');
  var images = app.dummyImages();
  $(".cards .card .image img").each(function(i,ele){
    $(ele).attr("src",images[i])
  });
},5000);
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
  }
});