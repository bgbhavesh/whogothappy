app.fbNativeLogin = function() {
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
}

function me(response) {
    FB.api('/me?fields=picture,name,email', function(user) {
        var authResponse = response.authResponse
        alert(authResponse);
        app.createFacebookUser(user,authResponse);
    });
}

function facebookWallPost(word) {
    var params = {
    method: 'feed',
    name: 'WORDdance',
    link: 'http://thumb.dance/',
    caption: 'Facebook Comment',
    description: ''
    };
    console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
}