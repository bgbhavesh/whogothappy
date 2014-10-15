adminUser = ["nicolsondsouza", "bgbhavesh", "hastenf", "vviber"];

function isAdmin(user) {
    for (var i = 0, il = adminUser.length; i < il; i++) {
        if (user.username == adminUser[i]) {
            return true;
        }
    }
    return false;
}

Meteor.users.find({}).observe({
    "added": function(user) {
        if (isAdmin(user)) {
            Roles.addUsersToRoles(user._id, ['admin']);
        }
    }
});
