Accounts.registerLoginHandler("myFacebook",function(options) {
    if(!options.myFacebook) {
        return undefined;
    }
    var userId = null;
    var user = Meteor.users.findOne({"_id": options._id});
    if(!user) {
        options.userId = userId = Meteor.users.insert(options);
    } else {
        // delete options._id;
        // Meteor.users.update({"_id": user._id},{$set : options});
        options.userId = userId = user._id;
    }

    return options;
});