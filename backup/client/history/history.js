Template.history.helpers({
  "feedHistory": function(){
    return Feed.find({"display": "n"});
  }
});

Template.history.events({
  "click .nextPrev": function(evt, tpl){
    app.nextPrev({"evt": evt, "route": "history"});
  },
  "error img": function(evt, tpl){
    return Feed.remove(this._id);
  }
});