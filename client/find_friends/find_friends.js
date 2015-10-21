// followid
Session.setDefault("find_friends", []);
Template.find_friends.helpers({
  "follows": function(){
    return Meteor.users.find();
  }
});

Template.find_friends.events({
  "click .onFollow": function(){
    var find_friends = Session.get("find_friends");
    var new_friends = []
    for(var i=0,il=find_friends.length;i<il;i++)
      if(find_friends[i]._id != this._id)
      new_friends.push(find_friends[i]);
    Session.set("find_friends", new_friends);
    return Meteor.call("follow", Meteor.userId(), this._id);
  },
  "click .nextPrev": function(evt, tpl){
    app.nextPrev({evt: evt, "route": "find_friends"});
  },
  "click .onRemove": function(){
    app.onRemove({data: this});
  },
  "click .onMakeAdmin": function(){
    app.onMakeAdmin({data: this});
  },
  "click .removeAdmin": function(){
    app.removeAdmin({data: this});
  }
});

app.onRemove = function(opt){
  if(Meteor.userId() != opt.data._id)
    Meteor.call("onRemoveUser", opt.data._id);
};
app.onMakeAdmin = function(opt){
  if(Roles.userIsInRole(Meteor.userId(), "admin", "default")){
    return Roles.addUsersToRoles(opt.data._id, "admin", "default");
  }
}
app.removeAdmin = function(opt){
  if(Roles.userIsInRole(Meteor.userId(), "admin", "default")){
    return Roles.removeUsersToRoles(opt.data._id, "admin", "default");
  }
}

