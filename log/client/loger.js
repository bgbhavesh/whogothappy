// Template.loger.logs = function(){
// 	return collection.Log.find({},{sort:{"date":-1},limit:10});
// };

Template.loger.logs = function(){
	return collection.Log.find({},{sort:{"date":-1},limit:10});
}
// Template.loger.helpers({
// 	logs : function(){
		
// 	}
// }) 