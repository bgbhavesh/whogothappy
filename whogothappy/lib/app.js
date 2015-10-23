app = {};
app.sub = {};
app.regex = {};

Log = new Meteor.Collection("log");
app.isJsonString = function (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

app.set = function(key,value){
	if(typeof value == "object"){
		value = JSON.stringify(value);
	}
	return window.localStorage.setItem(key,value);
}
app.get = function(key){
	var value = window.localStorage.getItem(key);
	if(app.isJsonString(value)){
		return JSON.parse(value);
	}
	else{
		return value;
	}
}

app.getDate = function(){
	var now = new Date();
  return new Date(
  	now.getUTCFullYear(),
  	now.getUTCMonth(),
  	now.getUTCDate(),
  	now.getUTCHours(),
  	now.getUTCMinutes(),
  	now.getUTCSeconds()).getTime();
}

if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000") || Meteor.absoluteUrl.defaultOptions.rootUrl.match("192.168.")){
	app.debug = true;
	log = console.log.bind(console);
}
else{
	app.debug = false;
	log = function(){
		var string = "";
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
				string = arguments[i];
			}
			var insert = {"log":string,"date": new Date().getTime()};

			if(Meteor.isClient)
				insert.side = "client";
			else
				insert.side = "server";
			try{
				insert.userId = Meteor.userId();
			}
			catch(error){}
			Log.insert(insert);
		}
	}
}
app.insertFeed = function(insert){
	var feedId = null;
	feedId = Feed.insert(insert);
	return feedId;
}

app.getUTCDate = function(time){
	var now = null;
	if(time)
		now = new Date(time)
	else
		now = new Date();
	return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()).getTime();
}

Language = new Meteor.Collection("language");
app.insertLanguage = function(insert){
	// console.log(insert._id);
	var language = Language.findOne({"_id":insert._id});

	insert.modifiedAt = new Date().getTime();

	if(language){
		delete insert._id;
		Language.update({"_id":language._id},{$set:insert});
	}
	else{
		insert.createdAt = new Date().getTime();
		Language.insert(insert);
	}
}