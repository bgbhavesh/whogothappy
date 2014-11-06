Score = new Meteor.Collection("score");
Meteor.subscribe("score");

Template.score.events({


});
Template.score.helpers({
	myScore : function(){
		return Score.find()
	}
}) 