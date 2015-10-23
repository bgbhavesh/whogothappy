app.twentyFourLastOpen = function(clientid){
	Meteor.setTimeout(function(){
		var cursorMe = Me.findOne({"_id":clientid}); 
        if(cursorMe){
            if(cursorMe.pushid){
                pushToUser(cursorMe.pushid,first.message,cursorMe.pushtype,cursorMe.face,first.likeid);
            }
        }
		app.touchTimeOut(clientid);
	},24 * 60 * 60 * 1000);
}

app.oneHourLastOpen = function(clientid){
	Meteor.setTimeout(function(){
		var cursorMe = Me.findOne({"_id":clientid});
        if(cursorMe){
            if(cursorMe.pushid){
                pushToUser(cursorMe.pushid,first.message,cursorMe.pushtype,cursorMe.face,first.likeid);
            }
        }
		app.touchTimeOut(clientid);
	},60 * 1000);
}

app.fourHourLastOpen = function(clientid){
	Meteor.setTimeout(function(){
		var cursorMe = Me.findOne({"_id":clientid}); 
        if(cursorMe){
            if(cursorMe.pushid){
                pushToUser(cursorMe.pushid,first.message,cursorMe.pushtype,cursorMe.face,first.likeid);
            }
        }
		app.touchTimeOut(clientid);
	},4 * 60 * 1000);
}