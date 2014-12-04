Score = new Meteor.Collection("score");
Streak = new Meteor.Collection("streak");


GroundDB(Meteor.users);
GroundDB(Score);
GroundDB(Streak);