Meteor.publish(null,function(){
	return collection.Log.find({},{sort:{"date":-1},limit:50});
})