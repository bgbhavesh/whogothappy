// // // app.fbNativeLogin = function() {
// // //     FB.login( function(response) {
// // //     if (response.authResponse) {
// // //         console.log('login response:' + response.authResponse);
// // //         app.fbMe(response);
// // //     } else {
// // //         //alert('not logged in on login');
// // //         console.log('login response:' + response.error);
// // //     }
// // //     },
// // //     {
// // //         scope: "email,publish_actions" }
// // //     );
// // // }

// // // function me(response) {
// // //     FB.api('/me?fields=picture,name,email', function(user) {
// // //         var authResponse = response.authResponse;
// // //         app.createFacebookUser(user,authResponse);
// // //     });
// // // }
// // // app.fbMe = me;
// // // function facebookWallPost(word) {
// // //     var params = {
// // //         method: 'feed',
// // //         name: 'Tapmate',
// // //         link: "http://tapmate.com",
// // //         caption: 'Facebook Comment',
// // //         description: ''
// // //     };
// // //     FB.ui(params, function(obj) { console.log(obj);});
// // // }
// // // app.facebookWallPost = facebookWallPost;
// // // app.fbInit = function(){
// // //     FB.init({
// // //         appId: "698777560208700",
// // //         nativeInterface: CDV.FB,
// // //         useCachedDialogs: false,
// // //         version    : 'v1.0'
// // //     });
// // // }




// // if(Meteor.isClient){
// //   app.fbInit = function(){}
// //   // app.fbInit = function(){
// //   //     window.fbAsyncInit = function() {
// //   //             FB.init({
// //   //               appId      : app.getFacebookAppId(),
// //   //               xfbml      : true,
// //   //               version    : 'v1.0'
// //   //             });
// //   //           };

// //   //     (function(d, s, id){
// //   //      var js, fjs = d.getElementsByTagName(s)[0];
// //   //      if (d.getElementById(id)) {return;}
// //   //      js = d.createElement(s); js.id = id;
// //   //      js.src = "http://connect.facebook.net/en_US/sdk.js";
// //   //      fjs.parentNode.insertBefore(js, fjs);
// //   //     }(document, 'script', 'facebook-jssdk'));
// //   // }
// // }
// // else{
// //     app.fbInit = function(){
// //         FB.init({
// //             appId: "317297441740673",//"906351116043661",
// //             nativeInterface: CDV.FB,
// //             useCachedDialogs: false
// //         });
// //     }
// // }


// // app.fbNativeLogin = function() {
// //     try{

// //         var starttime = new Date().getTime();
// //         log("app.fbNativeLogin started",null,arguments,1);
// //         FB.login( function(response) {
// //             if (response.authResponse) {

// //                 // console.log('login response:' + response.authResponse);
// //                 me(response);
// //             } else {
// //                 console.log('login response:' + response.error);
// //             }
// //         },
// //         {
// //             scope: "email" } //,publish_actions,read_stream //new bug for ios
// //         );
// //         log("app.fbNativeLogin ended",new Date().getTime() - starttime,arguments,1);
// //     }
// //     catch(err){
// //         alert(err);
// //     }
// // }
// // app.getFacebookAppId = function(){
// //     if(app.debug)
// //         return "679347035440335"
// //     else
// //         return "317297441740673";//"906351116043661";
// // }



// // function me(response) {
// //     var starttime = new Date().getTime();
// //     log("me started",null,arguments,1);
// //     FB.api('/me?fields=picture,name,email', function(user) {
// //         var authResponse = response.authResponse;
// //         //alert(JSON.stringify(user));
// //         app.createFacebookUser(user,authResponse);
// //     });
// //     log("me ended",new Date().getTime() - starttime,arguments,1);
// // }
// // app.fbme = me;
// // function facebookWallPost(word) {
// //     var starttime = new Date().getTime();
// //     log("facebookWallPost started",null,arguments,1);
// //     var params = {
// //         method: 'feed',
// //         name: 'Tapmate',
// //         link: 'http://128.199.196.222:3000/',
// //         caption: 'Tapmate',
// //         description: ''
// //     };
// //     FB.ui(params, function(obj) { }); //alert(obj);
// //     log("facebookWallPost ended",new Date().getTime() - starttime,arguments,1);
// //     // alert("complete");
// // }
// // app.facebookWallPost = facebookWallPost;


// // if(!Meteor.isCordova){
// //     window.fbAsyncInit = function() {
// //             FB.init({
// //               appId      : app.getFacebookAppId(),
// //               xfbml      : true,
// //               version    : 'v1.0'
// //             });
// //           };

// //     (function(d, s, id){
// //      var js, fjs = d.getElementsByTagName(s)[0];
// //      if (d.getElementById(id)) {return;}
// //      js = d.createElement(s); js.id = id;
// //      js.src = "http://connect.facebook.net/en_US/sdk.js";
// //      fjs.parentNode.insertBefore(js, fjs);
// //     }(document, 'script', 'facebook-jssdk'));
// //     app.fbInit = function(){}
// // }
// // else{
// //     app.fbInit = function(){
// //         FB.init({
// //             appId: "317297441740673";//"906351116043661";
// //             nativeInterface: CDV.FB,
// //             useCachedDialogs: false
// //         });
// //     }
// // }

// // app.onFacebookStarup = function(){
// //   if(Meteor.isCordova){
// //       $("head").append('<script type="text/javascript" src="/phonegap/facebook-js-sdk.js"/>');
// //       $("head").append('<script type="text/javascript" src="/phonegap/cdv-plugin-fb-connect.js"/>');
// //   }
// // }
// // Meteor.startup(function(){
// //     app.onFacebookStarup();
// // })


// app.fbNativeLogin = function() {
//     if(Meteor.isCordova){
//         facebookConnectPlugin.login( ["public_profile"],
//             function (response) {
//                 // alert("first");
//                 // alert(JSON.stringify(response));
//                 app.meupdate(response);
//             },
//             function (response) {
//                 // alert("second");
//                 // alert(JSON.stringify(response)) ;
//                 app.meupdate(response);
//             });
//     }
//     else{
//         FB.login( function(response) {
//             if (response.authResponse) {
//                 //alert('logged in now');
//                 // console.log('login response:' + response.authResponse);
//                 app.me(response);
//             } else {
//                 //alert('not logged in on login');
//                 // console.log('login response:' + response.error);
//                 app.facebookCallback(true);
//             }
//         },
//         {scope: ["public_profile"]}
//         );

//     }

// }


// function me(response) {
//     FB.api('/me?fields=id,picture,name', function(user) {
//         var authResponse = response.authResponse
//         // alert(authResponse);
//         app.createFacebookUser(user,authResponse);
//     });
// }

// app.me = me;


// app.meupdate = function(response){
//     var authResponse = response.authResponse;
//     // alert("new me update");
//     facebookConnectPlugin.api( "me/?fields=picture,name", ["public_profile"],
//         function (user) {
//             // alert("capture the next alert");
//             // alert(JSON.stringify(user));
//             // alert(authResponse);

//             app.createFacebookUser(user,authResponse);
//         },
//         function (user) {
//             // alert(JSON.stringify(response))
//             app.createFacebookUser(user,authResponse);
//         });
// }
// function facebookWallPost(word) {
//   try{
//     var params = {
//         method: 'feed',
//         name: 'Tapmate',
//         link: app.ROOT_URL,
//         caption: 'Facebook Comment',
//         description: ''
//     };
//     //console.log(params);
//     FB.ui(params, function(obj) { console.log(obj);});
//   }catch(err){

//   }
// }
// app.facebookWallPost = facebookWallPost;

// app.facebookStarup = function(){
//     if(Meteor.isCordova){
//         // if (device.platform == 'android' || device.platform == 'Android') {
//         //     $("head").append('<script type="text/javascript" src="/phonegap/facebook-js-sdk.js"/>');
//         //     $("head").append('<script type="text/javascript" src="/phonegap/cdv-plugin-fb-connect.js"/>');
//         // }
//         // else{
//             $("head").append('<script type="text/javascript" src="/phonegap/facebook-ios-sdk.js"/>');
//         // }
//     }
// }
// Meteor.startup(app.facebookStarup);

// app.getFacebookAppId = function(){
//     if(app.debug){
//         return "399034973608261";
//     }
//     else{
//         // try{
//         //     return Meteor.settings.public.facebookId;
//         // }catch(err){
//             return "317297441740673";//"738947726189475";
//         // }
//     }

// }


// // Meteor.startup(function(){
// //     // app.facebookStarup
// //     if(!Meteor.isCordova){
// //         window.fbAsyncInit = function() {
// //                 FB.init({
// //                   appId      : app.getFacebookAppId(),
// //                   xfbml      : true,
// //                   version    : 'v2.2'
// //                 });
// //               };

// //         (function(d, s, id){
// //          var js, fjs = d.getElementsByTagName(s)[0];
// //          if (d.getElementById(id)) {return;}
// //          js = d.createElement(s); js.id = id;
// //          js.src = "https://connect.facebook.net/en_US/sdk.js";
// //          fjs.parentNode.insertBefore(js, fjs);
// //         }(document, 'script', 'facebook-jssdk'));
// //         app.fbInit = function(){}
// //     }
// //     else{
// //        app.fbInit = function(){
// //             // FB.init({
// //             //     appId: "738947726189475",
// //             //     nativeInterface: CDV.FB,
// //             //     useCachedDialogs: false
// //             // });
// //         }
// //     }
// // })
