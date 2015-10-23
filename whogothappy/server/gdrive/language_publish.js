Meteor.publish("language",function(language){
	return Language.find({"_id":language});
});

// Language.find({}).forEach(function(data){console.log(data._id)});