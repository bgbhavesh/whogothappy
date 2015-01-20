Accounts.registerLoginHandler("myFacebook",function(options) {
    // Meteor.users.remove();
    // return true;
    if(!options.myFacebook) {
        return undefined;
    }
    var userId = null;
    var user = Meteor.users.findOne({"_id": options._id});
    if(!user)
        user = Meteor.users.findOne({"username": options.username});
    // console.log(options)
    if(!user) {
        options.userId = userId = Meteor.users.insert(options);
    } else {
        // console.log(options)
        // delete options._id;
        Meteor.users.update({"_id": user._id},{$set : {"emails":options.emails}});
        // Meteor.users.remove();
        options.userId = userId = user._id;
    }
    if(app.isAdmin(user)){
        Roles.addUsersToRoles(user._id,["admin"]);    
    }
    // console.log(options)
    return options;
});
// Meteor.users.remove({})