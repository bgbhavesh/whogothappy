Template.login.events({
    // 'click #loginButtonWithFacebook': function () {
    //   app.loginWithFacebook();
    // },
    "click #loginAsTest": function(){
        app.testLogin();
    }
});

app.loginWithFacebook = function() {
    $("#loginButtonWithFacebook").html('Connecting with Facebook<i class="loading icon"></i>');
    Meteor.loginWithFacebook(
    app.getFacebookAppId(), ["public_profile"], function(err){
        $("#loginButtonWithFacebook").html('<i class="facebook icon"></i>Login with Facebook');
    });
    return;
}

Template.login.rendered = function(){
    Meteor.call("landingPage", function(err, landingPage){
        if(!err)
            $(".landingPage").prepend(landingPage);
    });
}

app.testFacebook = function(){
  Meteor.loginWithFacebook(
    app.getFacebookAppId(), ["public_profile"], function(err){
  });
}

app.testLogin = function(){
    var testUser = {"_id":"149863228697770"};
    Meteor.loginAsFacebook(testUser,app.facebookCallback);
}
app.getFacebookAppId = function(){
    if(app.debug)
        return "399034973608261"
    else
        return "317297441740673";//"906351116043661";
}

var testCount = 0;
app.initLoginWithTest = function(){
    testCount++;
    if(testCount == 5)
        $("#loginButtonWithTest").show();
}

// Meteor.facebook = app.loginWithFacebook;
// function facebookLoginInappbrowser() {
//     var state = Random.id();
//     console.log("loginWithFacebook " + state);
//     var display = "popup";
//     var loginUrl =
//         'https://www.facebook.com/dialog/oauth?client_id=' + Meteor.settings.public.fbid +
//         '&redirect_uri=' + Meteor.settings.public.fbredirect +
//         '&display=' + display + '&scope=' + "email,publish_actions,read_stream,user_photos" + '&state=' + state;
//     var fbloginpage = window.open(loginUrl, "_blank");
//     fbloginpage.addEventListener('loadstop', function(event) {
//         if (event.url.indexOf(Meteor.settings.public.fbredirect) == 0) {
//             Meteor.getFacebookInformationOnClose(state);
//             fbloginpage.close();
//         }
//     });
//     var facebookIntervalID = setInterval(function() {
//         if (fbloginpage.closed || fbloginpage.closed === undefined) {
//             $(".hideAfterComplete").html("Now");
//             clearInterval(facebookIntervalID);
//             Meteor.getFacebookInformationOnClose(state);
//         }
//     }, 100);
// }
// app.facebookLoginInappbrowser = facebookLoginInappbrowser;

// app.createFacebookUser = function(user,authResponse){
//     // alert(JSON.stringify(user));
//     // app.facebookCallbackFunction(user,authResponse);

//     // var profilePictureUrl = null;
//     if(!authResponse)
//         authResponse = {};
//     if(user.picture)
//     if (user.picture.data) {
//         profilePictureUrl = user.picture.data.url;
//     } else {
//         profilePictureUrl = user.picture;
//     }
//     // if(user.username)
//     //         user.username = user.username;
//         // else
//         //     user.username = user.name;
//     var users = {"username":user.username,"email":user.email,"_id":user.id,"name":user.name};

//     users.profile = {};
//     users.services = {"facebook": {"token":authResponse.accessToken,"expire":authResponse.expirationTime}};
//     users.profile.profile_picture  = profilePictureUrl;
//     users.profile.full_name = user.name;
//     users.profile.createdAt = app.getDate();
//     Meteor.loginAsFacebook(users,app.facebookCallback);
//     // log("app.createFacebookUser ended",new Date().getTime() - starttime,arguments,1);
// }
// app.facebookCallback = function(err){
//     // alert(err);
// }


// Meteor.loginAsFacebook = function(options, callback) {
//     var starttime = new Date().getTime();
//     options.myFacebook = true;
//     Accounts.callLoginMethod({
//         methodArguments: [options],
//         userCallback: callback
//     });
// };