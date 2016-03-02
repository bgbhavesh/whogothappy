// app.isSeeAll = function(value){
// 	if(value.viewName && value.viewName != "Template.seeall" && value.viewName != "seeall" && value.viewName != "Template.route" && value.viewName != "body" && value.viewName != "Template.__dynamic" && value.viewName != "Template.__dynamicWithDataContext" && value.viewName != "Template.famousInit" && value.viewName != "Template.gamePopUp")
// 		return true;
// 	else
// 		return false;
// }
// Template.__define__("seeall", (function() {
// 	var view = this;
// 	var returnArray = [];
// 	$.each(Template,function(key,value){
// 		if(app.isSeeAll(value)){
// 			returnArray.push(Spacebars.include(view.lookupTemplate(key)));
// 		}
// 	});
// 	return returnArray;
// }));
