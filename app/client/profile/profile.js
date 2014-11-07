Template.profile.helpers({
    user : function(){
        // app.updateTheProfile();
        return Meteor.users.findOne();
    }
})