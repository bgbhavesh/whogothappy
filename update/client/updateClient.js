app.updateApp = function(){
	console.log("Please wait while we update!");
	Meteor.call("updateApp",function(err,data){
		if(err){
			console.log("update failed!");
			console.log(err);
		}
		else{
			console.log("server received update request!");
			console.log(data);	
		}
	})
}