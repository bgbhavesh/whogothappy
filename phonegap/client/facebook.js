app.fbNativeLogin = function() {
    var startTime = new Date().getTime();
    log("fbNativeLogin " +startTime,1);
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
    log("fbNativeLogin " +(new Date().getTime() - startTime),1);
}

function me(response) {
    var startTime = new Date().getTime();
    log("me " +startTime,1);
    FB.api('/me?fields=picture,name,email', function(user) {
        var authResponse = response.authResponse
        alert(authResponse);
        app.createFacebookUser(user,authResponse);
    });
    log("me " +(new Date().getTime() - startTime),1);
}

function facebookWallPost(word) {
    var startTime = new Date().getTime();
    log("facebookWallPost " +startTime,1);
    var params = {
    method: 'feed',
    name: 'WORDdance',
    link: 'http://thumb.dance/',
    caption: 'Facebook Comment',
    description: ''
    };
    console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
    log("facebookWallPost " +(new Date().getTime() - startTime),1);
}