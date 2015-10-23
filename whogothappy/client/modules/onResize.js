app.onResize = function(){
  setTimeout(function(){
    if($(".cards").height() > window.innerHeight){
      $(".cards").css("max-width", window.innerHeight - 57);
    }
  },100);
}

$(window).resize(app.onResize);

