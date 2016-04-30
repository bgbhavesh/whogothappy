app.shareWithAny = function(){
	var message = app.lang.facebook.shareFirst +" You ";
    if(Meteor.user()){
        message = app.lang.facebook.shareFirst +" " +Meteor.user().username +" ";
    }
    message += "got " +app.totalscore;
    message += " points! ";
    message += app.lang.facebook.shareEnd;
    
    // console.log(message);
    if(app.phonegap){
        app.onShareAny(message);
    }
    else{
        // FB.ui({
        // method: 'share',
        //     href: app.appUrl,
        //     display : 'iframe',
        //     caption : message,
        // }, function(response){});    
    }
}