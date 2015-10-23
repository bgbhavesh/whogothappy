User = Meteor.users;

User.helpers({
  "getName": function(){
    return this.profile.full_name || this.username;
  },
  "getPicture": function(){
    return this.profile.profile_picture;
  }
});

User.allow({
  update: function (userId, doc, fields, modifier) {
    return Roles.userIsInRole(userId, "admin", "default");
  },
  remove: function (userId, doc) {
    return Roles.userIsInRole(userId, "admin", "default");
  }
});