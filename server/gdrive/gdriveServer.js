var path = Npm.require('path');
var Future = Npm.require(path.join('fibers', 'future'));
app.language = {};
app.language.en ={};
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
			if(app.debug)
				return false;
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
							app.language.en[key[0]][key[1]] = row_data[i].french;
						}else if(lan == "es"){
							if(!app.language.en[key[0]])
								app.language.en[key[0]] = {};
							app.language.en[key[0]][key[1]] = row_data[i].spanishManual;
						}else{
							if(!app.language.en[key[0]])
								app.language.en[key[0]] = {};
							app.language.en[key[0]][key[1]] = row_data[i].value;
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
	}
});