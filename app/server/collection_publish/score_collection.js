// Score = new Meteor.Collection("score");
Meteor.publish("score", function(id) {
	return Score.find();
})