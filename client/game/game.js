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
  app.dummyImage = [];
  for(var i=0,il=16;i<il;i++)
    app.dummyImage.push(app.dummyUser[app.randomNumber(0,10)]);
  return app.dummyImage;
}
setInterval(function(){
  $(".dimmer").addClass("active");
  setTimeout(function(){$(".dimmer").removeClass("active");},1000);
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