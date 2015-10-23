Template.home.events({
  'click #snapButton': function (evt, tpl) {
    // increment the counter when button is clicked
    // Session.set("counter", Session.get("counter") + 1);
    app.openSnapLeft();
  },
});

Template.home_body.events({
  "error img": function(evt, tpl){
    return Feed.remove(this._id);
  },
  "click .markAsRead": function(evt, tpl){
    // return app.onMarkAsRead({data: this});
    return Feed.update(this._id, {$set: {"display": "n"}});
  }
})
app.onFeedImageLoad = function(evt){
  console.log(this, evt)
  // $(evt)
  //   .siblings(".feedImageDimmer")
  //   .remove();
}