var inital = "Meteor Shell Logs";
Log.remove({});
Log.insert({Log : inital});
var stderr = function (data) {
    var starttime = new Date().getTime();
    log("stderr started",null,arguments,1);
    message = 'err : '+data;
    Log.insert({Log : message});
    log("stderr ended",new Date().getTime() - starttime,arguments,1);
}
var stdout = function (data) {
    var starttime = new Date().getTime();
    log("stdout started",null,arguments,1);
    message = 'log : '+data;
    Log.insert({Log : message});
    log("stdout ended",new Date().getTime() - starttime,arguments,1);
}
var onBindEnvironmentError = function(error) {
    var starttime = new Date().getTime();
    log("onBindEnvironmentError started",null,arguments,1);
    console.log('Error in bindEnvironment:', error);
    log("onBindEnvironmentError ended",new Date().getTime() - starttime,arguments,1);
}

var stderrWrapper = null;
var stdoutWrapper = null;

Meteor.startup(function () {
    stderrWrapper =  Meteor.bindEnvironment(stderr,onBindEnvironmentError);
    stdoutWrapper =  Meteor.bindEnvironment(stdout,onBindEnvironmentError);
});

Meteor.methods({
    "updateApp" : function (command) {
        Meteor.setTimeout(updateApp,500);
        return "update in progress!";
    }
    "updateDone" : function (command) {
        return "updateDone";
    }
});

function updateApp(){
    var starttime = new Date().getTime();
    log("Meteor.methods.updateApp started",null,arguments,1);
    if(!command)
        command = "sh /root/shell/sixteensmiles.sh";
    if(command == "clear"){
        Log.remove({});
        Log.insert({Log : inital});
        log("updateApp" + (new Date().getTime() - setTime),1);
        return;
    }

    var message = "";
    var explode = command.split(' ');
    var cmd = explode[0];
    var args = explode.splice(1, explode.length);
    
    var spawn = Npm.require('child_process').spawn;

    if (args.length == 0)
        ls    = spawn(cmd);
    else
        ls    = spawn(cmd , args);
    try{

    }
    catch(err){
        console.log(err);
    }
    ls.stdout.on('data', stdoutWrapper);

    ls.stderr.on('data',stderrWrapper);
    log("Meteor.methods.updateApp ended",new Date().getTime() - starttime,arguments,1);
}