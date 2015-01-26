Meteor.publish(null, function () {
    return Cases.find({});
})