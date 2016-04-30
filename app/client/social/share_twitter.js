app.shareWithTwitter = function(){    
    var message = app.lang.facebook.shareFirst +" You ";
    if(Meteor.user()){
        message = app.lang.facebook.shareFirst +" " +Meteor.user().username +" ";
    }
    message += "got " +app.totalscore;
    message += " points! ";
    message += app.lang.facebook.shareEnd;
    
    if(app.phonegap){
        app.onShareTwitter(message);
    }
    else{
		var url = "https://twitter.com/intent/tweet?text="+message +"&via="+app.name +"&url="+window.encodeURIComponent(app.appUrl);
		window.open(url);  
    }
}