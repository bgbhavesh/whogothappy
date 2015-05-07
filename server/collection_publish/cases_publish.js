Meteor.publish(null,function(){
	// setTimeout(function(){
		return Cases.find({});
	// },60000);
})
Meteor.publish(null,function(){
	// setTimeout(function(){
		return ImageClicked.find({});
	// },60000);
})