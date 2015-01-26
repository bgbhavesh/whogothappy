// Streak = new Meteor.Collection("streak");
Meteor.publish("streak", function (id) {
    return Streak.find();
})
// Streak.remove({});