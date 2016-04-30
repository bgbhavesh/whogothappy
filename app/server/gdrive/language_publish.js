Meteor.publish("language",function(language){
	// console.log(language);
	return Language.find({"_id":language});
});