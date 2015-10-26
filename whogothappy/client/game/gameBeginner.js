app.beginner = {};
app.beginner.image = [
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
  "http://semantic-ui.com/images/avatar/large/chris.jpg",
  "http://semantic-ui.com/images/avatar/large/ade.jpg",
  "http://semantic-ui.com/images/avatar/large/justen.jpg",
  "http://semantic-ui.com/images/avatar/large/nan.jpg",
  "http://semantic-ui.com/images/avatar/large/matt.jpg",
  "http://semantic-ui.com/images/avatar/large/joe.jpg",
  "http://semantic-ui.com/images/avatar/large/christian.jpg",
  "http://semantic-ui.com/images/avatar/large/laura.jpg",

];
app.beginner.get = function(){
  var truePosition = app.randomNumber(0,15);
  var images = [];
  for(var i=0,il=16;i<il;i++){
    if(i == truePosition)
      images.push(app[app.gameLevel].image[app.randomNumber(0,18)]);
    else
      images.push(app[app.gameLevel].image[truePosition]);
  }
  return images;
}

app.beginner.validate = function(opt){
  var ele = opt.evt.currentTarget;
  var clickedPicture = $(ele)
    // .children(".image").children("img")
    .attr("src");

  if($("img[src='" +clickedPicture +"']").length == 1){
    $(ele).transition('tada');
    app.scoredPoints += app.config.points[app.gameLevel];
  }
  else{
    $(ele).transition('shake');
  }


  app.setScore();
}