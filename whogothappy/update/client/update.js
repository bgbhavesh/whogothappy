app.updateApp = function(){
	console.log("Sending server to update the code.");
	Meteor.call("updateApp",function(err,data){
		console.log("Server received the message.");	
		console.log("error : " +err);
		console.log("success : " +data);
		console.log("Sit back and relax while the app is updated!");
	});
}