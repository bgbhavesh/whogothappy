Template.users.events({
    // 'click .clickEvent': function () {
    // 	Session.set("placeId",null);
    // 	Session.set("placeId",this.place_id);
    // 	Session.set("placeName",this.name);
    // }
});
Template.users.helpers({
    userlist: function () {
        // var starttime = new Date().getTime();
        //    log("Template.views_EdgeSwapper.users.userlist started",null,arguments,1);
        //    log("Template.views_EdgeSwapper.users.userlist ended",new Date().getTime() - starttime,arguments,1);
        return Meteor.users.find()
    }
}) 