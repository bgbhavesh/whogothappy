// app.shareWithFacebook = function(){
// 	if(app.phonegap){

// 	}
// 	else{
// 		FB.ui({
// 		method: 'share',
// 			href: app.app.url,
// 			display : 'iframe',
// 		}, function(response){});
// 	}

// }

app.shareWithFacebook = function () {
    var message = app.lang.facebook.shareFirst + " You ";
    if (Meteor.user()) {
        message = app.lang.facebook.shareFirst + " " + Meteor.user().username + " ";
    }
    message += "got " + app.totalscore;
    message += " points! ";
    message += app.lang.facebook.shareEnd;

    console.log(app.phonegap);
    if (app.phonegap) {
        app.onShareFacebook(message);
    }
    else {
        FB.ui({
            method: 'feed',
            link: app.appUrl,
            caption: message,
        }, function (response) {
        });
        // FB.ui({
        // method: 'share',
        //     href: app.appUrl,
        //     display : 'iframe',
        //     caption : message,
        // }, function(response){});    
    }
}
