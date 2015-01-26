Score = new Meteor.Collection("score");
Streak = new Meteor.Collection("streak");

if (Meteor.isClient) {
    Ground.Collection(Meteor.users);
    Ground.Collection(Score);
    Ground.Collection(Streak);
}
