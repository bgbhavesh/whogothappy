Template.admin.helpers({
	"cases" : function(){
		var cas = Cases.findOne();
		if(cas)
			return cas.twoHundered;
		else
			[];
	},
	"case" : function(){
		// console.log(this);
		return this;
	}
});

Template.admin.events({
	"click #resetCases" : function(){
		Meteor.call("resetTwoHundered",function(err,data){});
	}
});
// app.adminSetUi = function(){
// 	var cursor = Cases.findOne({})
// 	var linefirst = "";
// 	var linesecond = "";
// 	if(cursor)
// 		var data = cursor.twoHundered
// 	for (var j = 0; j < 2; j++) {
// 		//data.length
// 		var group = data[j]
// 		console.log(group.length)
// 		var countrow = 0;
// 		for (var i = 0; i < group.length; i++) {
// 			countrow++;
// 			if(countrow == 1 || countrow == 5 || countrow == 11 )
// 			{
// 				arrayFirst += "<tr>"
// 				arraySecond += "<tr>"
// 			}
// 			arrayFirst += "<td>"+group[i].first+"</td>"
// 			arraySecond += "<td>"+group[i].second+"</td>"
// 			if(countrow%4 == 0 ){
// 				// console.log(i);
// 				arrayFirst += "</tr>"
// 				arraySecond += "</tr>"
// 			}
// 			var arrayFirst = "";
// 			var arraySecond = "";
// 			// arrayFirst += "<tr>"
// 			// arraySecond += "<tr>"
// 			// if(i%4 != 0){
// 			// 	arrayFirst += "<td>"+group[i].first+"</td>"
// 			// 	arraySecond += "<td>"+group[i].second+"</td>"
// 			// }
// 			// else{
// 			// 	arrayFirst += "<td>"+group[i].first+"</td>"
// 			// 	arraySecond += "<td>"+group[i].second+"</td>"
// 			// 	arrayFirst += "<tr>"
// 			// 	arraySecond += "<tr>"
// 			// 	linefirst = arrayFirst;
// 			// 	linesecond = arraySecond;
// 			// }
			 
// 			// $("table").append(linefirst);
// 		}
		
// 		// arrayFirst = ""
// 		// arraySecond = ""
// 		// return arrayFirst
// 		// return arraySecond
// 	}
// }