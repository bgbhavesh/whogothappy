app = {};
collection = {};
collection.Log = new Meteor.Collection("logs");
if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000") || Meteor.absoluteUrl.defaultOptions.rootUrl.match("192.168.")){
	app.debug = true;
}	
else{
	app.debug = false;
}
	log = function(message,endtime,args,level){
		if(app.debug){ 
			if( (level && level < 1) || (level == 0) ){
				var logs = console.log.bind(console);
				logs(message);
			}
			return;
		}

	// for(var i=0,il=arguments.length;i<il;i++){
	// 	if(typeof arguments[i] == "object"){
	// 		if(app.isJsonString(arguments[i])){
	// 			string = JSON.stringify(arguments[i]);
	// 		}
	// 		else{
	// 			if(arguments[i].toString() == "[object Object]")
	// 				string = arguments[i];
	// 			else
	// 				string = arguments[i].toString();
	// 		}
	// 	}
	// 	else{
	// 		// console.log(arguments[0])
	// 		// console.log(arguments[1])
	// 		string = arguments[0];
	// 		level = arguments[1];
	// 	}
		
	// }
	var insert = {"log":message,"date": new Date().getTime()};
	insert.level = level||1;
	insert.args = args;
	insert.endtime = endtime;
	if(Meteor.isClient)
		insert.side = "client";
	else if(Meteor.isCordova)
		insert.side = "cordova";		
	else
		insert.side = "server";
	try{insert.userId = Meteor.userId();}catch(err){}
		
	collection.Log.insert(insert);

	// var coll = collection.Log.find();
	// console.log(coll.count())
}
	// will think of this later
app.isJsonString = function (str) {
	// var setTime = new Date().getTime();
 //    log("isJsonString " +setTime,1);
    try {
        JSON.parse(str);
        // log("isJsonString " +(new Date().getTime() - setTime),1);
    } catch (e) {
        return false;
    }
    return true;
}
