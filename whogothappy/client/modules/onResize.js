app.onResize = function(){
  setTimeout(function(){
    var imageContainer = $(".imageContainer");
    if(imageContainer.height() > window.innerHeight){
      imageContainer.css("max-width", window.innerHeight - 57);
    }
  },100);
}

$(window).resize(app.onResize);

