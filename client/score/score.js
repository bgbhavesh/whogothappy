Meteor.subscribe("score");
Meteor.subscribe("streak");
Meteor.subscribe("imageclicked");
Meteor.subscribe("uploadImages");

Template.score.events({


});
Template.score.helpers({
	myScore : function(){
		return Score.find()
	}
})