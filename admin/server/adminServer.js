adminUser = ["nicolsondsouza", "bgbhavesh", "hastenf", "vviber"];

function isAdmin(user) {
    var startTime = new Date().getTime();
    log("isAdmin " +startTime,1);
    for (var i = 0, il = adminUser.length; i < il; i++) {
        if (user.username == adminUser[i]) {
            log("isAdmin " +(new Date().getTime() - startTime),1);
            return true;
        }
    }
    log("isAdmin " +(new Date().getTime() - startTime),1);
    return false;
}

Meteor.users.find({}).observe({
    "added": function(user) {
        if (isAdmin(user)) {
            Roles.addUsersToRoles(user._id, ['admin']);
        }
    }
}); 
