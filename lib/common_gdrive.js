if(Meteor.isServer){
	app.pushToDriveArray = [];
	Meteor.methods({
		"pushToDrive" : function(message,caseId,result,gameId){
			app.pushToDrive(message,caseId,result,gameId);
			// app.pushToDriveArray.push(message);
		},
		"manuallyUpdateDrive" : function(){
			app.updateStatistic();
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
			// console.log(app.pushToDriveArray);
			for(var i=0,il=app.pushToDriveArray.length;i<il;i++){
				my_sheet.addRow(1, {
					gameId: app.pushToDriveArray[i].gameId,
					details: app.pushToDriveArray[i].message,
					caseId: app.pushToDriveArray[i].caseId,
					result: app.pushToDriveArray[i].result

				});
			}
			app.pushToDriveArray = [];
		});
	}
	// Meteor.startup(function(){
	// 	app.updateStatistic();
	// })
}

app.pushToDrive = function(message,caseId,result,gameId){
	if(Meteor.isServer){
		var data = [];
		data.message = message;
		data.caseId = caseId;
		data.result = result;
		data.gameId = gameId;
		app.pushToDriveArray.push(data);
	}
	else{
		Meteor.call("pushToDrive",message,caseId,result,gameId);
	}
}


