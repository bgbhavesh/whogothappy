
app.phonegap = Meteor.isCordova;
// app.fbNativeLogin = function() {
//         FB.login( function(response) { 
//         if (response.authResponse) {
//             //alert('logged in now');
//             // console.log('login response:' + response.authResponse);
//             app.me(response);
//         } else {
//             //alert('not logged in on login');
//             // console.log('login response:' + response.error);
//             app.facebookCallback(true);
//         }
//     },
//     {scope: "email"}
//     );
// }
app.fbNativeLogin = function() {
    if(Meteor.isCordova){
        facebookConnectPlugin.login( ["public_profile", "email", "user_friends"], 
            function (response) { 
                // alert("first");
                // alert(JSON.stringify(response));
                app.meupdate(response); 
            },
            function (response) { 
                // alert("second");
                // alert(JSON.stringify(response)) ;
                app.meupdate(response); 
            });
    }
    else{
        FB.login( function(response) { 
            if (response.authResponse) {
                //alert('logged in now');
                // console.log('login response:' + response.authResponse);
                app.me(response);
            } else {
                //alert('not logged in on login');
                // console.log('login response:' + response.error);
                app.facebookCallback(true);
            }
        },
        {scope: "email"}
        ); 
            
    }

}

function me(response) {
    FB.api('/me?fields=id,picture,name,email', function(user) {
        var authResponse = response.authResponse
        // alert(authResponse);
        console.log(user)
        app.createFacebookUser(user,authResponse);
    });
}

app.me = me;


app.meupdate = function(response){
    var authResponse = response.authResponse;
    // alert("new me update");
    facebookConnectPlugin.api( "me/?fields=picture,name", ["public_profile"],
        function (user) { 
            // alert("capture the next alert");
            // alert(JSON.stringify(user)); 
            // alert(authResponse);
            
            app.createFacebookUser(user,authResponse);
        },
        function (user) { 
            // alert(JSON.stringify(response)) 
            app.createFacebookUser(user,authResponse);
        });
}
function facebookWallPost(word) {
    var params = {
        method: 'feed',
        name: 'WhoGotHappy',
        link: app.ROOT_URL,
        caption: 'Facebook Comment',
        description: ''
    };
    //console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
}
app.facebookWallPost = facebookWallPost;

app.facebookStarup = function(){
    if(Meteor.isCordova){
        // if (device.platform == 'android' || device.platform == 'Android') {
        //     $("head").append('<script type="text/javascript" src="/phonegap/facebook-js-sdk.js"/>');
        //     $("head").append('<script type="text/javascript" src="/phonegap/cdv-plugin-fb-connect.js"/>');
        // }
        // else{
            $("head").append('<script type="text/javascript" src="/phonegap/facebook-ios-sdk.js"/>');
        // }
    }
}
Meteor.startup(app.facebookStarup);

app.getFacebookAppId = function(){
    if(app.debug)
        return "399034973608261"
    else
        return "906351116043661";
}


// Meteor.startup(function(){
    // app.facebookStarup
    if(!Meteor.isCordova){
        window.fbAsyncInit = function() {
                FB.init({
                  appId      : app.getFacebookAppId(),
                  xfbml      : true,
                  version    : 'v2.2'
                });
              };

        (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        app.fbInit = function(){}
    }
    else{
        app.fbInit = function(){
            // FB.init({ 
            //     appId: "906351116043661", 
            //     nativeInterface: CDV.FB, 
            //     useCachedDialogs: false 
            // });
        }
        $("head").append('<script type="text/javascript" src="/phonegap/facebook-ios-sdk.js"/>');
    }    
// })

// console.log(app.fbInit);