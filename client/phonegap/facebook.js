// if(Meteor.isClient){
//   app.fbInit = function(){}
//   // app.fbInit = function(){
//   //     window.fbAsyncInit = function() {
//   //             FB.init({
//   //               appId      : app.getFacebookAppId(),
//   //               xfbml      : true,
//   //               version    : 'v1.0'
//   //             });
//   //           };

//   //     (function(d, s, id){
//   //      var js, fjs = d.getElementsByTagName(s)[0];
//   //      if (d.getElementById(id)) {return;}
//   //      js = d.createElement(s); js.id = id;
//   //      js.src = "http://connect.facebook.net/en_US/sdk.js";
//   //      fjs.parentNode.insertBefore(js, fjs);
//   //     }(document, 'script', 'facebook-jssdk'));
//   // }
// }
// else{
//     app.fbInit = function(){
//         FB.init({ 
//             appId: "906351116043661", 
//             nativeInterface: CDV.FB, 
//             useCachedDialogs: false 
//         });
//     }
// }


app.fbNativeLogin = function() {
    try{


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
            scope: "email" } //,publish_actions,read_stream //new bug for ios
        );
        log("app.fbNativeLogin ended",new Date().getTime() - starttime,arguments,1);
    }
    catch(err){
        alert(err);
    }
}
app.getFacebookAppId = function(){
    if(app.debug)
        return "679347035440335"
    else
        return "906351116043661";
}



function me(response) {
    var starttime = new Date().getTime();
    log("me started",null,arguments,1);
    FB.api('/me?fields=picture,name,email', function(user) {
        var authResponse = response.authResponse;
        //alert(JSON.stringify(user));
        app.createFacebookUser(user,authResponse);
    }); 
    log("me ended",new Date().getTime() - starttime,arguments,1);
}

function facebookWallPost(word) {
    var starttime = new Date().getTime();
    log("facebookWallPost started",null,arguments,1);
    var params = {
        method: 'feed',
        name: 'SixteenSmiles',
        link: 'http://whogothappy.com/',
        caption: 'HappyFace',
        description: ''
    };
    FB.ui(params, function(obj) { alert(obj);});
    log("facebookWallPost ended",new Date().getTime() - starttime,arguments,1);
    // alert("complete");
}
app.facebookWallPost = facebookWallPost;




Meteor.startup(function(){
if(!Meteor.isCordova){
    window.fbAsyncInit = function() {
            FB.init({
              appId      : app.getFacebookAppId(),
              xfbml      : true,
              version    : 'v1.0'
            });
          };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "http://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    app.fbInit = function(){}
}
else{
   app.fbInit = function(){
        FB.init({ 
            appId: "906351116043661", 
            nativeInterface: CDV.FB, 
            useCachedDialogs: false 
        });
    } 
}    
})
