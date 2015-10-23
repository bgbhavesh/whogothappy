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

  // variable initialized
  app.gameLevel = Meteor.user().getLevel();
  app.scoredPoints = 0;
  app.totalPoints = 0;

  // reseting everything
  app.onStopGame();
  app.setScore();
  app.onEverySecond();

  // starting game
  app.gameIntervalId = setInterval(function(){
    app.onEverySecond();
  },Meteor.user().getSpeed() * 1000);

  $(".dimmer.startGame").removeClass("active");

  // when to end game
  var gameTime = Meteor.user().getTime() * 60 * 1000;
  if(app.debug)
    gameTime = 20 * 1000;
  app.gameTimeoutId = setTimeout(function(){
    app.onStopGame();
  },gameTime);

  $(".onStartGame").text("START");
};

app.onEverySecond = function(){
  $(".dimmer.pauser").addClass("active");
  setTimeout(function(){$(".dimmer.pauser").removeClass("active");},1000);
  $(".cards .card").transition('flash');
  var images = app[app.gameLevel].get();
  $(".cards .card .image img").each(function(i,ele){
    $(ele).attr("src",images[i])
  });
  app.isClickable = true;
}

app.onStopGame = function(){
  clearInterval(app.gameIntervalId);
  clearTimeout(app.gameTimeoutId);
  $(".dimmer.pauser").removeClass("active");
  $(".dimmer.startGame").addClass("active");
  $("#headerName").text("WhoGotHappy");
}

app.setScore = function(){
  $("#headerName").text(app.scoredPoints +" / " +app.totalPoints);
}