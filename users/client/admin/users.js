Template.users.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
});
Template.users.userlist = function(){
	// Session.get("reactivePlace");
	return Meteor.users.find()
}