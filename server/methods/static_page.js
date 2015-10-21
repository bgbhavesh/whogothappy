Meteor.methods({
  "landingPage": function(){
    return Assets.getText("landingPage.html");
  }
});