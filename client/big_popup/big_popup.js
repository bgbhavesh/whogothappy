Template.big_popup.events({
  "click .justImage": function(evt, tpl){
    app.onTapBig({
      evt: evt,
      tpl: tpl,
      data: this
    });
  },
  "click .bigImage": function(evt, tpl){
    app.onTapBig({
      evt: evt,
      tpl: tpl,
      data: this
    });
  },
  "click .onClosePopup": function(evt, tpl){
    app.onMarkAsRead();
  },
  "click .download.icon": function(evt, tpl){
    app.onDownloadImage();
  },
  'click .onSharePicture': function(){
    app.onSharePicture();
  }
});
Template.big_popup.helpers({
  "isBig": function(){
    return app.routeParam("imageId");
  },
  "maxHeight": function(){
    return window.innerHeight-100;
  }
});
Template.big_popup.rendered = function(){
  app.onResize();
}

app.onPopupBigImageLoad = function(evt){
  $(".popupDimmer").removeClass("active");
  $(evt).css({
    "z-index": "1",
    "height": $(".justImage").css("height"),
    "width": $(".justImage").css("width"),
  });
};
app.onPopupImageLoad = function(){
  $(".popupDimmer").removeClass("active");
}
app.onPopupImageError = function(){
  $(".popupDimmer").removeClass("active");
}

app.onDownloadImage = function(){
  if(Meteor.isCordova){
    window.open($(".justImage").attr("src"), '_system');
  }
}