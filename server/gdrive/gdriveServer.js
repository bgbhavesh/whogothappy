var path = Npm.require('path');
var Future = Npm.require(path.join('fibers', 'future'));
app.language = {};
app.language.en ={};
app.settings = {}

var lastupdate = new Date().getTime();
// Meteor.methods({
// 	"sendLang" : function(lan){

// });
// Language.remove({});
Meteor.startup(function(){
	// if(app.debug)
	// 	return;
	Meteor.setTimeout(function(){
		var lan = "en";
		langArray = ["fr","es","ar","sv","fa","fi","tl","ko","ru","iw","de","ja","it","is","pl","el","ur","en"];
		// if(app.debug)
		// 	return false;
		//var fut = new Future(); 
		// this looks like it's called when meteor.startup, not every hour
		// this doesn't work... drive isn't updating app
		// console.log(Spreadsheets);
		// var GoogleSpreadsheet = Spreadsheets;
		app.language = {};
		app.language.en ={};
		app.settings = {};
       	try{
       		var my_sheet = new GoogleSpreadsheet('1Sn3TQLUaILVjp5KMy1cvDsfaH3ISUtkHAUg7VmMsAj8');
			my_sheet.getRows( 1, bindFunction);
       	}
       	catch(Error){
       		console.log(Error)
			//fut.return({});
       	}
		//return fut.wait();
	},100);
})



var bindFunction = Meteor.bindEnvironment(function(err, row_data){
	// return;
	// console.log(row_data);
	if(row_data){
		for(var j=0,jl=langArray.length;j<jl;j++){
		lan = langArray[j];
			for(var i=0,il=row_data.length;i<il;i++){
			var key = row_data[i].key;
			if(!key)
				continue;
			key = key.split(".");
				// console.log(key[0]);
				if(lan){
				if(lan == "fr"){
					if(key[0] == "settings"){
						if(!app.settings[key[0]])
							app.settings[key[0]] = {};
						app.settings[key[0]][key[1]] = row_data[i].en;
						// console.log(key[1])
					}
					if(!app.language.en[key[0]])
						app.language.en[key[0]] = {};

						if(row_data[i].frm)
							app.language.en[key[0]][key[1]] = row_data[i].frm;//if manual
						else
							app.language.en[key[0]][key[1]] = row_data[i].fr;
				}else if(lan == "es"){
					if(key[0] == "settings"){
						if(!app.settings[key[0]])
							app.settings[key[0]] = {};
						app.settings[key[0]][key[1]] = row_data[i].en;
						// console.log(key[1])
					}
					if(!app.language.en[key[0]])
						app.language.en[key[0]] = {};

						if(row_data[i].esm)
							app.language.en[key[0]][key[1]] = row_data[i].esm;//if manual
						else
							app.language.en[key[0]][key[1]] = row_data[i].es;
				}else if(lan == "ar"){
					if(key[0] == "settings"){
						if(!app.settings[key[0]])
							app.settings[key[0]] = {};
						app.settings[key[0]][key[1]] = row_data[i].en;
						// console.log(key[1])
					}
					if(!app.language.en[key[0]])
						app.language.en[key[0]] = {};

						if(row_data[i].arm)
							app.language.en[key[0]][key[1]] = row_data[i].arm;//if manual
						else
							app.language.en[key[0]][key[1]] = row_data[i].ar;
				}else{
					if(key[0] == "settings"){
						if(!app.settings[key[0]])
							app.settings[key[0]] = {};
						app.settings[key[0]][key[1]] = row_data[i].en;
						// console.log(key[1])
					}
					if(!app.language.en[key[0]])
						app.language.en[key[0]] = {};
					app.language.en[key[0]][key[1]] = row_data[i].en;
				}
			}
		}//i loop ends
		if(app.settings)
		app.settings = app.settings.settings;
		app.language.en.lastupdate = lastupdate;
		// console.log(app.language.en);
		// console.log("lang_" +lan);
		app.language.en._id = "lang_" +lan;
			
		// Meteor.bindEnvironment(function(){
		var language = app.language.en;
			// Meteor.bindEnvironment(function(){
				// console.log(language); 
		app.insertLanguage(language);
			// })();
			// Meteor.setTimeout(function(){ 
			// 	console.log(language._id); 
			// 	app.insertLanguage(language);
			// },100);
		// })();
		
		// Fiber(function(){
		// 		
		// }).run();	
		
	
	} // j loop ends
	// lan
	// console.log(app.language.en)
	// 1 should get all columns from sheet
	// 2 if enMan manually entered english exists, use it
	// 3 if not sue machine translation column 
	// 4 enter each language into db objects
	// 5 depending on apps language, insert from db into html
	// all text in app needs to be variables ..
	// 6 publish this method as a package under youiest llc  acct
	// console.log(app.settings)
	//fut.return(app.language.en);
	}
})


// Meteor.methods({
// 	"updateStatistic" : function(data){
// 		//var fut = new Future();
// 		console.log(data)
// 		var my_sheet = new GoogleSpreadsheet('1zrGln6KaqQpfkByGTRXoVaE9ywsdOle9e4Dc57nAP8U');
// 		my_sheet.setAuth('decivote@gmail.com','Wibing2republic', function(err){
// 			if (err) 
// 				console.log(err);

// 			 my_sheet.addRow(5, {
// 				details: data
// 			});
// 		});
// 	},
// 	// "uploadDataToSheet" : function(){
// 	// 	var my_sheet = new GoogleSpreadsheet('1-KuqgOLQu_8qv0plak91pZYprm4pqn3P9xBUefv__TU');
// 	// 	var sheetno = null;
// 	// 	var MeArray = [];
// 	// 	var i=0;
// 	// 	var cursor = Meteor.users.find();
// 	// 	cursor.forEach(function(data) {
// 	// 		MeArray[i++] = data; 
// 	// 	});
// 	// 	// for(var i=0,il=MeArray.length;i<il;i++){
// 	// 	// 	if(MeArray[i].emails)
// 	// 	// 		console.log(MeArray[i].emails[0].address)
// 	// 	// }
// 	// 	my_sheet.setAuth('decivote@gmail.com','Wibing2republic', function(err){
// 	// 		if (err) console.log( err );
// 	// 		for(var i=0,il=MeArray.length;i<il;i++){
// 	// 				my_sheet.addRow( 1, { 
// 	// 			    	clientId: MeArray[i]._id,
// 	// 					username: MeArray[i].username,
// 	// 					maxScore: MeArray[i].profile.maxScore,
// 	// 					lastPlayed: MeArray[i].profile.lastPlayed,
// 	// 					lastScore: MeArray[i].profile.lastScore,
// 	// 					lastTried: MeArray[i].profile.lastTried,
// 	// 					lastWrong:  MeArray[i].profile.lastWrong,
// 	// 					playContinuty: MeArray[i].profile.playContinuty
// 	// 			    });   
// 	// 			}
// 	// 	});
// 	// },
// 	// "updateScore" : function(tme){
// 	// 	//var fut = new Future();
// 	// 	var my_sheet = new GoogleSpreadsheet('1-KuqgOLQu_8qv0plak91pZYprm4pqn3P9xBUefv__TU');




// 	// 	my_sheet.addRow(1, { 
// 	// 		clientId: "cid",
// 	// 		score: "scr",
// 	// 		time: "tme"
// 	// 	});


		
// 	// 	// my_sheet.getRows( 2, function(err, row_data){
// 	// 	// 	console.log(err);
// 	// 	// 	console.log(row_data);
// 	// 	// });


		
// 	// 	// ///add worksheet
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wibing2republic', function(err){
// 	// 	// 	// my_sheet.getInfo( function(err, ss_info){
				
// 	// 	// 	// });
// 	// 	// 	my_sheet.addTitle(1,2,2,"sdnvlkfdbdfbdfbdfbdfbdfbdfbsdnlv",function(err, data){
// 	// 	// 		if (err) console.log( err );
// 	// 	// 	});
// 	// 	// });

// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
// 	// 	// 	my_sheet.getInfo( function(err, ss_info){
// 	// 	// 		if (err) console.log( err );
// 	// 	// 		ss_info.worksheets[0].getRows( function( err, rows ){
// 	// 	// 			console.log("skdlnvlksndlknvlksdnlkv")
// 	// 	// 			rows[1].addTitle(1,2,2,"sdnvlkfdbdfbdfbdfbdfbdfbdfbsdnlv");
// 	// 	//         });
// 	// 	// 	});
		   
// 	// 	// });



// 	// 	// /////add row
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wibing2republic', function(err){
// 	// 	// 	// console.log("add row");
// 	// 	// 	// console.log(score);
// 	// 	// 	if (err) 
// 	// 	// 		console.log(err);

// 	// 	//     my_sheet.addRow(ss_info.worksheets.length, { 
// 	// 	// 		clientId: "cid",
// 	// 	// 		score: "scr",
// 	// 	// 		time: "tme"
// 	// 	// 	});
// 	// 	// });






// 	// 	// ////////////display result/////////////////
// 	// 	// my_sheet.getInfo( function(err, ss_info){
// 	// 	// 	if (err) {
// 	// 	// 		console.log( "err" );
// 	// 	// 		console.log( err );
// 	// 	// 	}
// 	// 	// 	// console.log(ss_info);
// 	// 	// 	// console.log(ss_info.worksheets.length);
// 	// 	// 	var worksheetsno = ss_info.worksheets.length - 1;
// 	// 	// 	console.log(worksheetsno);
// 	// 	// 	// // you can use the worksheet objects to add or read rows
// 	// 	// 	for(var i=0,il=worksheetsno;i<il;i++){
// 	// 	// 		ss_info.worksheets[i].getRows( function(err, rows){
// 	// 	// 			console.log( ss_info.worksheets[i].title + ' has '+rows.length + 'rows' );
// 	// 	// 		});
// 	// 	// 	};
			
			
// 	// 	// });

// 	// 	// ///add worksheet
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wibing2republic', function(err){
// 	// 	// 	if (err) 
// 	// 	// 		console.log(err.data);
// 	// 	// 	else
// 	// 	// 		my_sheet.addWorkSheet();
// 	// 	// });


// 	// 	// ////////////display result/////////////////
// 	// 	// my_sheet.getInfo( function(err, ss_info){
// 	// 	// 	if (err) console.log( err );
// 	// 	// 	console.log(ss_info);
// 	// 	// 	console.log( ss_info.title + ' is loaded' );
// 	// 	// 	// you can use the worksheet objects to add or read rows
// 	// 	// 	ss_info.worksheets[0].getRows( function(err, rows){
// 	// 	// 		console.log( ss_info.worksheets[0].title + ' has '+rows.length + 'rows' );
// 	// 	// 	});
			
// 	// 	// });



// 	// 	//////////////display result/////////////////
// 	// 	// my_sheet.getInfo( function(err, ss_info){
// 	// 	// 	if (err) console.log( err );

// 	// 	// 	console.log( ss_info.title + ' is loaded' );

// 	// 	// 	// you can use the worksheet objects to add or read rows
// 	// 	// 	ss_info.worksheets[0].getRows( function(err, rows){
// 	// 	// 		console.log( ss_info.worksheets[0].title + ' has '+rows.length + 'rows' );
// 	// 	// 	});
// 	// 	// });


// 	// 	// ///add worksheet
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wibing2republic', function(err){
// 	// 	// 	if (err) 
// 	// 	// 		console.log(err.data);
// 	// 	// 	else
// 	// 	// 		my_sheet.addWorkSheet();
// 	// 	// });




// 	// 	// //////delete all rows///////////////////
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
// 	// 	// 	my_sheet.getInfo( function(err, ss_info){
// 	// 	// 		if (err) console.log( err );
// 	// 	// 		ss_info.worksheets[0].getRows( function( err, rows ){
// 	// 	// 			for(var j=0,jl=rows.length;j<jl;j++){
// 	// 	// 				rows[j].del();
// 	// 	// 				rows[j].save();
// 	// 	// 			}
// 	// 	//         });
// 	// 	// 	});
		   
// 	// 	// });
// 	// 	// //////update rows ////////////////////
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
// 	// 	// 	my_sheet.getInfo( function(err, ss_info){
// 	// 	// 		if (err) console.log( err );
// 	// 	// 		var i = 0;
// 	// 	// 		ss_info.worksheets[0].getRows( function( err, rows ){
// 	// 	// 			Object.keys(score).forEach(function(key){
// 	// 	// 				rows[i].name = key;
// 	// 	//             	rows[i].value = score[key];
// 	// 	//             	rows[i].save();
// 	// 	//             	i++;
// 	// 	// 				// console.log("INDEX: " + index + " VALUE: " + value);
// 	// 	// 			});
// 	// 	//         });
// 	// 	// 	});
		   
// 	// 	// });

		


// 	// 	// //////update rows
// 	// 	// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
// 	// 	// 	my_sheet.getInfo( function(err, ss_info){
// 	// 	// 		if (err) console.log( err );
// 	// 	// 		ss_info.worksheets[0].getRows( function( err, rows ){
// 	// 	//             rows[0].name = 'new val';
// 	// 	//             rows[0].value = 'new val';
// 	// 	//             rows[0].save();
// 	// 	//             // rows[0].del();
// 	// 	//         });
// 	// 	// 	});
		   
// 	// 	// });


		
// 	// }

// });
