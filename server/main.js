Meteor.startup(function(){
	locatationIntervalId = setInterval(app.changeCase, 600000);
	locatationIntervalId = setInterval(app.uploadDataToSheet, 86400000);
	// Meteor.users.remove({});
	// Meteor.setTimeout(function(){
	// 	for(var i=0;i<65535;i++){
	// 		try{
	// 			var result = Meteor.call("http://192.168.1.111:"+i);
	// 			console.log(i);
	// 			console.log(result);
	// 		}catch(err){
	// 			// console.log("err " +i);
	// 		}
	// 	}
	// 	console.log("ended");
	// });
	// console.log(Meteor.users.findOne({}));
});