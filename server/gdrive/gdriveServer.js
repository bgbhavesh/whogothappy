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
			// console.log("fr")
			var fut = new Future(); 
	       	var my_sheet = new GoogleSpreadsheet('1Sn3TQLUaILVjp5KMy1cvDsfaH3ISUtkHAUg7VmMsAj8');
			my_sheet.getRows( 1, function(err, row_data){
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
				fut.return(app.language.en)
			});
			return fut.wait();
	}
});