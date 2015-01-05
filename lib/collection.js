Score = new Meteor.Collection("score");
Streak = new Meteor.Collection("streak");

if(Meteor.isClient){
	GroundDB(Meteor.users);
	GroundDB(Score);
	GroundDB(Streak);
}
