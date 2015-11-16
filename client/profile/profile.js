Template.profile.helpers({
    user : function(){
        return Meteor.users.findOne();
    }
})