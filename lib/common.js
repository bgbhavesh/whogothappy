Log = new Meteor.Collection("Log");
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