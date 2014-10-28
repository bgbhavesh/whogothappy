app.fbNativeLogin = function() {
    var starttime = new Date().getTime();
    log("app.fbNativeLogin started",null,arguments,1);
    FB.login( function(response) { 
    if (response.authResponse) {
        //alert('logged in now');
        console.log('login response:' + response.authResponse);
        me(response);
    } else {
        //alert('not logged in on login');
        console.log('login response:' + response.error);
    }
    },
    { 
        scope: "email,publish_actions,read_stream" }
    );
    log("app.fbNativeLogin ended",new Date().getTime() - starttime,arguments,1);
}

function me(response) {
    var starttime = new Date().getTime();
    log("me started",null,arguments,1);
    FB.api('/me?fields=picture,name,email', function(user) {
        var authResponse = response.authResponse
        alert(authResponse);
        app.createFacebookUser(user,authResponse);
    }); 
    log("me ended",new Date().getTime() - starttime,arguments,1);
}

function facebookWallPost(word) {
    var starttime = new Date().getTime();
    log("facebookWallPost started",null,arguments,1);
    var params = {
    method: 'feed',
    name: 'WORDdance',
    link: 'http://thumb.dance/',
    caption: 'Facebook Comment',
    description: ''
    };
    console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
    log("facebookWallPost ended",new Date().getTime() - starttime,arguments,1);
}