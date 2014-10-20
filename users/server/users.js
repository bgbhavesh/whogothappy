Meteor.publish(null,function(){
	if(Roles.userIsInRole(this.userId, ['admin'],null)){
		return Meteor.users.find({});
	}
});