app.MeteorStartupObserver()

app.MeteorStartupObserver = function(){
    console.log("sdknvlknslkd");
    Cases.find({}).observe({
        "added" : function(first){
            addCases(first);
        }
    });

}
function addCases(first){
    console.log(first)
}