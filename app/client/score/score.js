Meteor.subscribe("score");
Meteor.subscribe("streak");
Meteor.subscribe("imageclicked");

Template.score.events({


});
Template.score.helpers({
	myScore : function(){
		return Score.find()
	}
}) 