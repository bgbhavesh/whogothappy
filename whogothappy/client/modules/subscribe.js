app.onSubscribeHome = function(){
  return [
    Meteor.subscribe("onefeed", Meteor.userId()),
  ];
}
app.onSubscribeHome();
app.onSubscribeImage = function(){
  return [
    Meteor.subscribe("image", app.routeParam("imageId")),
    Meteor.subscribe("recommending", app.routeParam("imageId")),
    Meteor.subscribe("recommended", app.routeParam("imageId")),
  ];
}