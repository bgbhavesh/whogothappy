// Cases.find({}).observe({
// 	"added"
// });

app.twoHundered = [];
Cases.find({}).observe({
    "added" : function(first){
        app.twoHundered = first.twoHundered;
        // console.log(app.twoHundered);
        app.caseCount = 0;
        Session.set("startGameFlag",Random.id());
    },
    "changed" : function(first){
        app.twoHundered = first.twoHundered;
        // console.log(app.twoHundered);
        app.caseCount = 0;
        Session.set("startGameFlag",Random.id());
    }
});
// app.startup(app.MeteorStartupObserver);

// app.MeteorStartupObserver = function(){
//     // console.log("")
//     Cases.find({}).observe({
//         "added" : function(first){
//             app.twoHundered = first.twoHundered;
//         },
//         "changed" : function(first){
//         	app.twoHundered = first.twoHundered;
//         }
//     });

// }
app.getCase = function(number){
	if(app.twoHundered[number]){
		return app.twoHundered[number].data;
	}
	else
		return [];
}