// Streak = new Meteor.Collection("streak");
Meteor.publish("streak", function(id) {
	return Streak.find();
})
Meteor.publish("imageclicked", function(id) {
	return ImageClicked.find();
})
// Streak.remove({});