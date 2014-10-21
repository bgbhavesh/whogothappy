adminUser = ["nicolsondsouza", "bgbhavesh", "hastenf", "vviber"];
adminUserFacebook = ["100000002030165","100000488108267","100000002030165","100000002030165"];
//                      nicolsondsouza   bgbhavesh         hastenf            vViber
function isAdmin(user) {
    var setTime = new Date().getTime();
    log("isAdmin" + setTime,1);
    for (var i = 0, il = adminUser.length; i < il; i++) {
        if (user.username == adminUser[i]) {
            log("isAdmin" + (new Date().getTime() - setTime),1);
            return true;
        }
    }
    for (var i = 0, il = adminUserFacebook.length; i < il; i++) {
        if (user._id == adminUserFacebook[i]) {
            log("isAdmin" + (new Date().getTime() - setTime),1);
            return true;
        }
    }
    log("isAdmin" + (new Date().getTime() - setTime),1);
    return false;
}

Meteor.users.find({}).observe({
    "added": function(user) {
        var setTime = new Date().getTime();
        log("added" + setTime,1);
        if (isAdmin(user)) {
            Roles.addUsersToRoles(user._id, ['admin']);
        }
        log("added" + (new Date().getTime() - setTime),1);
    }
});
