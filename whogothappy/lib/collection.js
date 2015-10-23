Score = new Meteor.Collection("score");
Streak = new Meteor.Collection("streak");
ImageClicked = new Meteor.Collection("imageClicked")
ImageMissed = new Meteor.Collection("imagemissed")

// if(Meteor.isClient){
// 	Ground.Collection(Meteor.users);
// 	Ground.Collection(Score);
// 	Ground.Collection(Streak);
// }

User = Meteor.users;

User.helpers({
  "getTime": function(){
    if(this && this.profile)
      return this.profile.time || 10;
    else
      return 10;
  },
  "getLevel": function(){
    if(this && this.profile)
      return this.profile.level || "beginner";
    else
      return "beginner";
  },
  "getSpeed": function(){
    if(this && this.profile)
      return this.profile.speed || 5;
    else
      return 5;
  },
});
