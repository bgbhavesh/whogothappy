Feed =  new Mongo.Collection("feed");

if(Meteor.isServer){
  Feed._ensureIndex({"clientid":1, "display":1});
}