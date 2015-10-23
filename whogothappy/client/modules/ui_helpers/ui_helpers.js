UI.registerHelper("user", function(){
  return Meteor.user();
});

UI.registerHelper("router", function(){
  var current = Router.current();
  if(current && current.params)
    return current.params;
  else
    return {};
});

UI.registerHelper("users", function(){
  return Meteor.users.findOne(this.createdBy);
});
