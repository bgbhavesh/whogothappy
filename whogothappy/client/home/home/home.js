Template.home.events({
  'click #snapButton': function (evt, tpl) {
    app.openSnapLeft();
  },
});

app.onFeedImageLoad = function(evt){
  // console.log(this, evt)
}