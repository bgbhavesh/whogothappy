Template.users.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
});
Template.users.helpers({
	userlist : function(){
		return Meteor.users.find()
	}
}) 