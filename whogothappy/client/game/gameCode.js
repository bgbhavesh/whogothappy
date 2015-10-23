app.gameIntervalId = null;
app.gameTimeoutId = null;
app.getSetupTimeoutId = null;
app.onSetupGame = function(){
  $(".onStartGame").text("Loading Game..");
  clearTimeout(app.getSetupTimeoutId);
  app.getSetupTimeoutId = setTimeout(function(){
    $(".onStartGame").text("Loading Assets..");
    setTimeout(function(){
      app.onStartGame();
    },1000);
  },1000);
}
app.onStartGame = function(){
  app.onStopGame();
  app.onEverySecond();
  app.gameIntervalId = setInterval(function(){
    app.onEverySecond();
  },Meteor.user().getSpeed() * 1000);
  $(".dimmer.startGame").removeClass("active");

  var gameTime = Meteor.user().getTime() * 60 * 1000;
  if(app.debug)
    gameTime = 10 * 1000;
  app.gameTimeoutId = setTimeout(function(){
    app.onStopGame();
  },gameTime);
  $(".onStartGame").text("START");
};

app.onEverySecond = function(){
  $(".dimmer.pauser").addClass("active");
  setTimeout(function(){$(".dimmer.pauser").removeClass("active");},1000);
  $(".cards .card").transition('flash');
  var images = app.dummyImages();
  $(".cards .card .image img").each(function(i,ele){
    $(ele).attr("src",images[i])
  });
}

app.onStopGame = function(){
  clearInterval(app.gameIntervalId);
  clearTimeout(app.gameTimeoutId);
  $(".dimmer.pauser").removeClass("active");
  $(".dimmer.startGame").addClass("active");
}