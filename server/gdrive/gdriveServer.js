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
	return;
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
			// 	console.log(language._id); 
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