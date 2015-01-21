if(Meteor.isServer){
	app.pushToDriveArray = [];
	Meteor.methods({
		"pushToDrive" : function(message){
			app.pushToDrive(message);
			// app.pushToDriveArray.push(message);
		}
	});
	Meteor.setInterval(function(){
		
	},60000);
}

app.pushToDrive = function(message){
	if(Meteor.isServer){
		app.pushToDriveArray.push(message);
	}
	else{
		Meteor.call("pushToDrive",message);
	}
}
