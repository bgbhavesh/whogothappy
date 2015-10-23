app.onMarkAsRead = function(opt){
  var cursorFeed = Feed.find({
    "likeid": app.routeParam("imageId") || opt.data._id,
    "display": "y"
  });
  cursorFeed.forEach(function(data){
    Feed.update(data._id, {$set: {"display": "n"}});
  });
};