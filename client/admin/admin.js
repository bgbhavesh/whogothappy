Template.admin.helpers({
	"cases" : function(){
		var cas = Cases.findOne();
		if(cas)
			return cas.twoHundered;
		else
			[];
	},
	"case" : function(){
		// console.log(this);
		return this;
	}
});

Template.admin.events({
	"click #resetCases" : function(){
		Meteor.call("resetTwoHundered",function(err,data){});
	}
});