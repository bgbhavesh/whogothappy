var path = Npm.require('path');
var Future = Npm.require(path.join('fibers', 'future'));
app.language = {};
app.language.en ={};
app.setting = {}
// var data = {};
// Meteor.startup(function(){
// 	var my_sheet = new GoogleSpreadsheet('1Sn3TQLUaILVjp5KMy1cvDsfaH3ISUtkHAUg7VmMsAj8');

// 	my_sheet.getRows( 1, function(err, row_data){
// 		// console.log(row_data[1].hi1);
// 		// console.log(row_data[1].hello1);
// 		for(var i=0,il=row_data.length;i<il;i++){
// 			app.language.en[row_data[i].key] = row_data[i].value;
// 			console.log(row_data[i].key);
// 			console.log(row_data[i].value);
// 		}
//     	// console.log( 'pulled in '+row_data.length + ' rows ')
//     	console.log(app.language.en)
// 	});
// })


Meteor.methods({
	"sendLang" : function(lan){

			// if(app.debug)
			// 	return false;
			var fut = new Future(); 
			// this looks like it's called when meteor.startup, not every hour
			// this doesn't work... drive isn't updating app
	       	var my_sheet = new GoogleSpreadsheet('1Sn3TQLUaILVjp5KMy1cvDsfaH3ISUtkHAUg7VmMsAj8');
			my_sheet.getRows( 1, function(err, row_data){
				if(row_data){
					for(var i=0,il=row_data.length;i<il;i++){
					var key = row_data[i].key;
					key = key.split(".");
					if(lan){
						if(lan == "fr"){
							if(!app.language.en[key[0]])
								app.language.en[key[0]] = {};
							app.language.en[key[0]][key[1]] = row_data[i].fr;
						}else if(lan == "es"){
							if(!app.language.en[key[0]])
								app.language.en[key[0]] = {};
							app.language.en[key[0]][key[1]] = row_data[i].es;
						}else if(lan == "ar"){
							if(!app.language.en[key[0]])
								app.language.en[key[0]] = {};
							app.language.en[key[0]][key[1]] = row_data[i].ar;
						}else{
							if(!app.language.en[key[0]])
								app.language.en[key[0]] = {};
							app.language.en[key[0]][key[1]] = row_data[i].enm;
						}
					}
					
				}
				// console.log(app.language.en)
				// 1 should get all columns from sheet
				// 2 if enMan manually entered english exists, use it
				// 3 if not sue machine translation column 
				// 4 enter each language into db objects
				// 5 depending on apps language, insert from db into html
				// all text in app needs to be variables ..
				// 6 publish this method as a package under youiest llc  acct
				fut.return(app.language.en)
				}
			});
			return fut.wait();
	},
	// "sendSetting" : function(){
	// 		// console.log("fr")
	// 		var fut = new Future(); 
	//        	var my_sheet = new GoogleSpreadsheet('1-KuqgOLQu_8qv0plak91pZYprm4pqn3P9xBUefv__TU');
	// 		my_sheet.getRows( 1, function(err, row_data){
	// 			if(row_data){
	// 				for(var i=0,il=row_data.length;i<il;i++){
	// 					app.setting[row_data[i].key]= {};
	// 					app.setting[row_data[i].key]= row_data[i].value;
	// 				}
	// 				fut.return(app.setting)
	// 			}
	// 		});
	// 		return fut.wait();
	// },
	"updateScore" : function(cid,scr,tme){
		var fut = new Future();
		var my_sheet = new GoogleSpreadsheet('1-KuqgOLQu_8qv0plak91pZYprm4pqn3P9xBUefv__TU');


		//////////////display result/////////////////
		my_sheet.getInfo( function(err, ss_info){
			if (err) console.log( err );

			console.log( ss_info.title + ' is loaded' );

			// you can use the worksheet objects to add or read rows
			ss_info.worksheets[0].getRows( function(err, rows){
				console.log( ss_info.worksheets[0].title + ' has '+rows.length + 'rows' );
			});
		});


		/////add row
		my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
			console.log("add row");
			// console.log(score);
			if (err) 
				console.log(err);

		    my_sheet.addRow( 1, { 
				clientId: cid,
				score: scr,
				time: tme
			});
		});




		// //////delete all rows///////////////////
		// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
		// 	my_sheet.getInfo( function(err, ss_info){
		// 		if (err) console.log( err );
		// 		ss_info.worksheets[0].getRows( function( err, rows ){
		// 			for(var j=0,jl=rows.length;j<jl;j++){
		// 				rows[j].del();
		// 				rows[j].save();
		// 			}
		//         });
		// 	});
		   
		// });
		// //////update rows ////////////////////
		// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
		// 	my_sheet.getInfo( function(err, ss_info){
		// 		if (err) console.log( err );
		// 		var i = 0;
		// 		ss_info.worksheets[0].getRows( function( err, rows ){
		// 			Object.keys(score).forEach(function(key){
		// 				rows[i].name = key;
		//             	rows[i].value = score[key];
		//             	rows[i].save();
		//             	i++;
		// 				// console.log("INDEX: " + index + " VALUE: " + value);
		// 			});
		//         });
		// 	});
		   
		// });

		


		// //////update rows
		// my_sheet.setAuth('decivote@gmail.com','Wiber2wibing', function(err){
		// 	my_sheet.getInfo( function(err, ss_info){
		// 		if (err) console.log( err );
		// 		ss_info.worksheets[0].getRows( function( err, rows ){
		//             rows[0].name = 'new val';
		//             rows[0].value = 'new val';
		//             rows[0].save();
		//             // rows[0].del();
		//         });
		// 	});
		   
		// });


		
	}

});