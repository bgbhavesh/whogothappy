adminUser = ["nicolsondsouza", "bgbhavesh", "hastenf", "vviber"];

function isAdmin(user) {
    var starttime = new Date().getTime();
    log("isAdmin " +starttime,1);
    for (var i = 0, il = adminUser.length; i < il; i++) {
        if (user.username == adminUser[i]) {
            return true;
        }
    }
    log("isAdmin " + (new Date().getTime() - starttime),1);
    return false;
}

Meteor.users.find({}).observe({
    "added": function(user) {
        if (isAdmin(user)) {
            Roles.addUsersToRoles(user._id, ['admin']);
        }
    }
});
