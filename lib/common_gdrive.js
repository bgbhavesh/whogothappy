if(Meteor.isServer){
	app.pushToDriveArray = [];
	Meteor.methods({
		"pushToDrive" : function(message){
			app.pushToDrive(message);
			// app.pushToDriveArray.push(message);
		}
	});
	Meteor.setInterval(function(){
		app.updateStatistic("data");
	},60000);
	app.updateStatistic =  function(){
		//var fut = new Future();
		// console.log(data)
		var my_sheet = new GoogleSpreadsheet('1zrGln6KaqQpfkByGTRXoVaE9ywsdOle9e4Dc57nAP8U');//https://docs.google.com/spreadsheets/d/1zrGln6KaqQpfkByGTRXoVaE9ywsdOle9e4Dc57nAP8U/edit#gid=0
		my_sheet.setAuth('decivote@gmail.com','Youiestguidethewibe', function(err){
			if (err){
				console.log(err);
				return;
			}
			// my_sheet.addRow(1, {
			// 		details: "test message"
			// });	
			for(var i=0,il=app.pushToDriveArray.length;i<il;i++){
				my_sheet.addRow(1, {
					details: app.pushToDriveArray[i]
				});
			}
			
		});
	}
	// Meteor.startup(function(){
	// 	app.updateStatistic();
	// })
}

app.pushToDrive = function(message){
	if(Meteor.isServer){
		app.pushToDriveArray.push(message);
	}
	else{
		Meteor.call("pushToDrive",message);
	}
}


