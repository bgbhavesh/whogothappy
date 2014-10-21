

var inital = "Meteor Shell Logs";
Log.remove({});
Log.insert({Log : inital});
var stderr = function (data) {
    message = 'err : '+data;
    Log.insert({Log : message});
}
var stdout = function (data) {
    message = 'log : '+data;
    Log.insert({Log : message});
}
var onBindEnvironmentError = function(error) {
    console.log('Error in bindEnvironment:', error);
}

var stderrWrapper = null;
var stdoutWrapper = null;

Meteor.startup(function () {
    stderrWrapper =  Meteor.bindEnvironment(stderr,onBindEnvironmentError);
    stdoutWrapper =  Meteor.bindEnvironment(stdout,onBindEnvironmentError);
});

Meteor.methods({
    "updateApp" : function (command) {
        var setTime = new Date().getTime();
        log("updateApp" + setTime,1);
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
        log("updateApp" + (new Date().getTime() - setTime),1);
        return true;
    }
});
