Meteor.publish(null,function(){
	// setTimeout(function(){
		return Cases.find({});
	// },60000);
})