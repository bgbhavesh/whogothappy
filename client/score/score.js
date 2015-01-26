Meteor.subscribe("score");
Meteor.subscribe("streak");

Template.score.events({});
Template.score.helpers({
    myScore: function () {
        return Score.find()
    }
}) 