// app id 1469999833231618
// secret fbca837fd8bce281a1b781346399aaad
// client id c0f06585160bc1d80f064bdef92123c8

// http://localhost:3000/_oauth/instagram?close=close&code=965b416f7d8f49edac0a58c5f408e66f&state=64c164b5-a6c3-4738-a9c7-04725463a6d2
var querystring = Npm.require('querystring');

Router.map(function () {
  this.route('serverRoute', {
    where: 'server',
    path: '/facebook',
    action: function () {
        var query = this.request.query;
        app.facebook(query);
        this.response.writeHead(200, {'Content-Type': 'text/html'});
        this.response.end(Handlebars.templates['close']());
    }
  });
});
// Meteor.Router.add('/facebook', 'GET', function() {
//     var query = this.request.query;
//     //console.log(query);
//     app.facebook(query);
//     return Handlebars.templates['close']();
//     // return "first facebook";
// });
// Meteor.Router.add('/facebook/*', 'GET', function() {
//     //app.facebook(this);
//     return Handlebars.templates['close']();
//     // return "second facebook";
//      // Accounts.loginServiceConfiguration.insert({
//     //         service: 'facebook',
//     //         appId: '679347035440335',
//     //         secret: 'a62d337e67d6c941c3846205362cfdb1',
//     //         clientId : "e68372f627dc83545241f553e98dad20",
//     //         scope : "basic,email,user_birthday,publish_actions,user_location,age_range"
//     //     });
// });
app.facebook = function(query){
    //console.log(query);
    
    var result = null;
    var code = null,state = null;

    var config = {
            service: 'facebook',
            appId: Meteor.settings.public.fbid,
            secret: Meteor.settings.public.fbsecret,
            clientId : Meteor.settings.public.fbclient,
            scope : "basic,email,user_birthday,publish_actions,user_location,age_range"
        };
    if(query){
        result = query;
        if(result){
            code = result.code;
            state = result.state;
        }
    }
    //console.log(code)
    // return;
    var results = Meteor.http.get(
    "https://graph.facebook.com/oauth/access_token", {
      params: {
        client_id: config.appId,
        redirect_uri: Meteor.settings.public.fbredirect,
        client_secret: config.secret,
        code: result.code
      }
    });

    // console.log(results);
    var response = results.content;

    if (result.error) {
        throw new Error("Failed to complete OAuth handshake with Facebook. " +
        "HTTP Error " + result.statusCode + ": " + response);
    }
    var error_response;
    try {
        // Just try to parse so that we know if we failed or not,
        // while storing the parsed results
        error_response = JSON.parse(response);
    } catch (e) {
        error_response = null;
    }
    if (error_response) {
        throw new Error("Failed to complete OAuth handshake with Facebook. " + response);
    } else {
    // Success!  Extract the facebook access token and expiration
    // time from the response
    var parsedResponse = querystring.parse(response);
    var fbAccessToken = parsedResponse.access_token;
    var fbExpires = parsedResponse.expires;

    if (!fbAccessToken) {
        console.log("Failed to complete OAuth handshake with facebook " +
                      "-- can't find access token in HTTP response. " + response);
    }
        // Me.update({"_id":state},{$set : {"facebooktoken":fbAccessToken,"facebookexpires":fbExpires}})
        var facebookInfo = {
            fbAccessToken: fbAccessToken,
            fbExpires: fbExpires
        };
        // console.log(facebookInfo);
    }
    

        
        var data = Meteor.http.get("https://graph.facebook.com/me", {
            params: {access_token: facebookInfo.fbAccessToken}}).data;
        
        var facebookFace = getFacebookFace(data.id);

        

        // var cursorUserHashMania = Me.findOne({"emailtoken":state});
        // if(!cursorUserHashMania)
        //     cursorUserHashMania = Me.findOne({"_id":state});
        
        var cursorUserHashMania = Me.findOne({"_id":data.id}); //facebookID

        //console.log(cursorUserHashMania)
        // console.log(typeof data.id);
        if(cursorUserHashMania){
            

            Me.update({"_id":cursorUserHashMania._id},{$set :facebookInfo});
            
            var update = {fbAccessToken: facebookInfo.fbAccessToken,fbExpires: facebookInfo.fbExpires,"facebookID":data.id,"facebookEmail":data.email,"facebookName":data.name,"facebookLink":facebookFace,"face":facebookFace,"state":state,"clientid":data.id,"email":data.email,"username":data.username}

            // {"facebookID":data.id,"facebookEmail":data.email,"facebookName":data.name};
            
            // Me.update({"_id":cursorUserHashMania._id},{$set :update});                    
                        
            // update = {"facebookLink":facebookFace,"face":facebookFace};

            Me.update({"_id":cursorUserHashMania._id},{$set :update}); 
            console.log("update facebook");
        }
        else{
            // insert information new client
            var insert = {"_id": "" +data.id,"fbAccessToken": facebookInfo.fbAccessToken,"fbExpires": facebookInfo.fbExpires,"facebookID":data.id,"facebookEmail":data.email,"facebookName":data.name,"facebookLink":facebookFace,"face":facebookFace,"state":state,"clientid":data.id};
            insert = app.setAdditionFacebook(insert);
            Me.insert(insert);
            console.log("insert facebook");
        }
    // Meteor.http.get(
    // "https://graph.facebook.com/oauth/access_token", {
    //   params: {
    //     //client_id: config.appId,
    //     redirect_uri: Meteor.absoluteUrl("_oauth/facebook?close"),
    //     //client_secret: config.secret,
    //     code: "abc"
    //   }
    // });
    // app.postOnFacebook(state,"Tapmate is here!");
    
}

function postOnFacebook(clientid,message,img,whofbid,likeid){
    if(app.debug)
        return true;
    console.log("postOnFacebook");

    var cursorMe = whofbid
    if(cursorMe){
        var facebooktoken = cursorMe;
        facebookfb.setAccessToken(facebooktoken);
        var body = message;
        facebookfb.api('me/feed', 'post', { message: body,"link":"http://youtap.meteor.com/#big/" +likeid,"picture":img}, function (res) {
          if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return true;
          }
          console.log('Post Id: ' + res.id);
        });
    }
    return true;
}

app.postOnFacebook = postOnFacebook;

function getFacebookFace(id){
    //https://graph.facebook.com/redbull
    var result = Meteor.http.get("https://graph.facebook.com/"+ +id +"/picture?type=normal&redirect=false");
        // var result = Meteor.http.get("http://www.facebook.com/profile.php?id=100000002030165");
        return result.data.data.url;
        // console.log(result.data);
        // console.log(result.data.picture.data.url)
        // return result.data.picture.data.url;
}

app.getFacebookFace = getFacebookFace;


// Garbage of post on facebok
    // var dd = new Date().getDate();
    // var cursorClient = Me.findOne({"_id":clientid});
    // // Me.update({"_id":clientid},{$set : {"postOnFbCount":1}});
    // // console.log(cursorClient.LastpostOnFb+"/"+cursorClient.postOnFbCount)
    // if(cursorClient){
    //     if(cursorClient.LastpostOnFb  == dd){
    //         if(cursorClient.postOnFbCount<4){
    //             Me.update({"_id":clientid},{$inc : {"postOnFbCount":1}});
    //             if(!cursorClient.facebooktoken){
    //                 // console.log(cursorClient.postOnFbCount);
    //                 var facebooktoken = whofbid;
    //                 facebookfb.setAccessToken(facebooktoken);
    //                 var body = message;
    //                 facebookfb.api('me/feed', 'post', { message: body,"link":"http://youtap.meteor.com/app/"+clientid,"picture":img}, function (res) {
    //                   if(!res || res.error) {
    //                     console.log(!res ? 'error occurred' : res.error);
    //                     return;
    //                   }
    //                   console.log('Post Id: ' + res.id);
    //                 });
    //             }
    //         }
    //     }else{
    //         Me.update({"_id":clientid},{$set : {"postOnFbCount":1}});
    //         Me.update({"_id":clientid},{$set : {"LastpostOnFb":dd}});
    //         if(!cursorClient.facebooktoken){
    //             // console.log("postOnFacebook else");
    //             var facebooktoken = whofbid;
    //             facebookfb.setAccessToken(facebooktoken);
    //             var body = message;
    //             facebookfb.api('me/feed', 'post', { message: body,"link":"http://youtap.meteor.com/app/"+clientid,"picture":img}, function (res) {
    //               if(!res || res.error) {
    //                 console.log(!res ? 'error occurred' : res.error);
    //                 return;
    //               }
    //               console.log('Post Id: ' + res.id);
    //             });
    //         }
    //     }

        // var cursorMe = Me.findOne({"_id":whofbid});
        // if(cursorMe.fbAccessToken){
        //     var facebooktoken = cursorMe.fbAccessToken;
        //     facebookfb.setAccessToken(facebooktoken);
        //     var body = message;
        //     facebookfb.api('me/feed', 'post', { message: body,"link":"http://youtap.meteor.com/app/"+clientid,"picture":img}, function (res) {
        //       if(!res || res.error) {
        //         console.log(!res ? 'error occurred' : res.error);
        //         return;
        //       }
        //       console.log('Post Id: ' + res.id);
        //     });
        // }
    
    // work in progress

    // var img = "http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg";
    // var https = Npm.require('https'); //Https module of Node.js
    // var fs = Npm.require('fs'); //FileSystem module of Node.js
    // // var FormData = Npm.require('form-data'); //Pretty multipart form maker.
    // // console.log(fs.createReadStream('./public/images/logo.png'));
    // // return;
    // var ACCESS_TOKEN = cursorMe.facebooktoken;
    
    // var form = new FormData(); //Create multipart form
    // form.append('file', fs.createReadStream('first.jpg')); //Put file
    // form.append('message', "Tapmate"); //Put message
     
    // //POST request options, notice 'path' has access_token parameter
    // var options = {
    //     method: 'post',
    //     host: 'graph.facebook.com',
    //     path: '/me/photos?access_token='+ACCESS_TOKEN,
    //     headers: form.getHeaders(),
    // }
     
    // //Do POST request, callback for response
    // var request = https.request(options, function (res){
    //      console.log(res);
    // });
     
    // //Binds form to request
    // form.pipe(request);
     
    // //If anything goes wrong (request-wise not FB)
    // request.on('error', function (error) {
    //      console.log(error);
    // });