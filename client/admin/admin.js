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
// app.adminSetUi = function(){
// 	var cursor = Cases.findOne({})
// 	if(cursor)
// 		var data = cursor.twoHundered
// 	for (var i = 0; i < data.length; i++) {
// 		return data[i];
// 	};
// }