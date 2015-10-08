if(Meteor.isServer){
	app.pushToDriveArray = [];
	Meteor.methods({
		"pushToDrive" : function(message,caseId,result,gameId){
			app.pushToDrive(message,caseId,result,gameId);
			// app.pushToDriveArray.push(message);
		},
		"manuallyUpdateDrive" : function(){
			// app.updateStatistic();
		}
	});
	Meteor.setInterval(function(){
		app.updateStatistic("data");
	},60000);
	app.updateStatistic =  function(){
		if(app.debug)
			return;
		//var fut = new Future();
		// console.log(data)
		var my_sheet = new GoogleSpreadsheet('1zrGln6KaqQpfkByGTRXoVaE9ywsdOle9e4Dc57nAP8U');//https://docs.google.com/spreadsheets/d/1zrGln6KaqQpfkByGTRXoVaE9ywsdOle9e4Dc57nAP8U/edit#gid=0
		my_sheet.setAuth('decivote@gmail.com','Youiestguidethewibe', function(err){
			if (err){
				console.log("error in app.updateStatistic");
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
app.challangeToDrive = function(iD,data,gameId){
	var my_sheet = new GoogleSpreadsheet('1zrGln6KaqQpfkByGTRXoVaE9ywsdOle9e4Dc57nAP8U');
	my_sheet.setAuth('decivote@gmail.com','Youiestguidethewibe', function(err){
		if (err){
			console.log("err in app.challangeToDrive");
			return;
		}
		my_sheet.addRow(1, {
			gameId: gameId,
			details: "challange",
			challangeby: data.username,
			challangeto: iD,
			totalscore: data.score,
			clicked: data.clicked,
			corrected: data.corrected,
			wrong: data.wrong,
			totaltime: data.gameEnd

		});
	});
}

