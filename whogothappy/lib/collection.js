Score = new Meteor.Collection("score");
Streak = new Meteor.Collection("streak");
ImageClicked = new Meteor.Collection("imageClicked")
ImageMissed = new Meteor.Collection("imagemissed")

if(Meteor.isClient){
	Ground.Collection(Meteor.users);
	Ground.Collection(Score);
	Ground.Collection(Streak);
}

User = Meteor.users;

User.helpers({
  "getDefaultTime": function(){
    if(this && this.profile && this.profile.defaultTime)
      return this.profile.defaultTime;
    else
      return 10;
  }
});
