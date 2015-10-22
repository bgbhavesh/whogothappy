Follows = new Mongo.Collection("follows");

if(Meteor.isServer){
  Follows._ensureIndex({"userid":1});
}
Follows.helpers({
  "setNotification": function(){
    if(this.chatNotification != 0)
      Follows.update(this._id, {$set: {"chatNotification": 0}})
  }
});
