app.onError = function(error){
  var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
            console.log(insert);
            ErrorUpdate.insert(insert);
}