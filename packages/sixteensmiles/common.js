app = {};
collection = {};
collection.Word = new Meteor.Collection("word");
collection.Feedback = new Meteor.Collection("feedback");
collection.Log = new Meteor.Collection("logs");
if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000") || Meteor.absoluteUrl.defaultOptions.rootUrl.match("192.168.")){
	app.debug = true;
	log = console.log.bind(console);
}	
else{
	app.debug = false;
	log = function(){
		var string = "";
		var level = "";
		for(var i=0,il=arguments.length;i<il;i++){
			if(typeof arguments[i] == "object"){
				if(app.isJsonString(arguments[i])){
					string = JSON.stringify(arguments[i]);
				}
				else{
					if(arguments[i].toString() == "[object Object]")
						string = arguments[i];
					else
						string = arguments[i].toString();
				}
			}
			else{
				// console.log(arguments[0])
				// console.log(arguments[1])
				string = arguments[0];
				level = arguments[1];
			}
			if(level){
				var insert = {"log":string,"level":level,"date": new Date().getTime()};
			}else{
				var insert = {"log":string,"level":1,"date": new Date().getTime()};
			}
			
			if(Meteor.isClient)
				insert.side = "client";
			else
				insert.side = "server";
			if(Meteor.userId())
				insert.userId = Meteor.userId();
			
			collection.Log.insert(insert);
		}
	}
	// will think of this later
}

app.isJsonString = function (str) {
	var startTime = new Date().getTime();
    log("isJsonString " +startTime,1);
    try {
        JSON.parse(str);
        log("isJsonString " +(new Date().getTime() - startTime),1);
    } catch (e) {
        return false;
    }
    return true;
}