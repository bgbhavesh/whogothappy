// app.get = function(key){
// 	var value = window.localStorage.getItem(key);
// 	if(app.isJsonString(value)){
// 		return JSON.parse(value);
// 	}
// 	else{
// 		return value;
// 	}
// }
// app.set = function(key,value){
// 	if(typeof value == "object"){
// 		value = JSON.stringify(value);
// 	}
// 	return window.localStorage.setItem(key,value);
// }

// app.visualEffect = function(id,effect){
// 	$("#" +id).children("i").remove();
// 	var html = $("#" +id).html();
// 	$("#" +id).html(html +effect);
// }