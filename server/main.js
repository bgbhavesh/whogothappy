/*
YOUIEST LLC CONFIDENTIAL

[2013] - [2014] Youiest LLC
All Rights Reserved.
NOTICE: All information contained herein is, and remains
the property of Youiest LLC and its suppliers,
if any. The intellectual and technical concepts contained
herein are proprietary to Youiest LLC
and its suppliers and may be covered by U.S. and Foreign Patents,
patents in process, and are protected by trade secret or copyright law.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Youiest LLC.
*/

// var api_key = 'key-038ycoitre5k7ml0dlqijw7zdjqrl5d5';
// var domain = 'tapmatrix.mailgun.org';
// MailGun = Npm.require('mailgun-js')(api_key, domain);
// mailgun = MailGun;
// var data = {
// from: 'Excited User <tapmate@tapmatrix.mailgun.org>',
// to: 'nicolsondsouza@gmail.com',
// subject: 'Hello',
// text: 'Testing some Mailgun awesomness!'
// };
// // mailgun.messages.send(data, function (error, response, body) {
// //   console.log(body);
// // });
// mailgun.routes.list(function(error, response, body) {
// // console.log(error);
// // console.log(response);
// // console.log(body);
// });
// Meteor.Paypal.config({
//     'host': 'api.sandbox.paypal.com',
//     'port': '80',
//     'client_id': 'AcCjaBBUDmxhZA5lhpWRxZsDgYX6-LtmhxrKno2QbT0gGWcVe_nsAOCIlZQB',
//     'client_secret': 'EN7PmhCcbgFS_QKLUM5btRdCak45svabne4n6GfXEPBPOoL6m3KeyqolLTsk'
// });
// Meteor.Paypal.authorize({
//         name: 'Buster Bluth',
//         number: '4111111111111111',
//         type: 'visa',
//         cvv2: '123',
//         expire_year: '2015',
//         expire_month: '01'
//     },
//     {
//         total: '100.10',
//         currency: 'USD'
//     },
//     function(error, results){
//         if(error)
//             console.log(error);
//         else{
//             console.log(results)
//         }
//         //results contains:
//         //  saved (true or false)
//         //  if false: "error" contains the reasons for failure
//         //  if true: "payment" contains the transaction information
// });
// paypal.configure({
//   'host': 'api.sandbox.paypal.com',
//   'port': '',
//   'client_id': 'AcCjaBBUDmxhZA5lhpWRxZsDgYX6-LtmhxrKno2QbT0gGWcVe_nsAOCIlZQB',
//   'client_secret': 'EN7PmhCcbgFS_QKLUM5btRdCak45svabne4n6GfXEPBPOoL6m3KeyqolLTsk'
// });
// var card_data = {
//   "type": "visa",
//   "number": "4417119669820331",
//   "expire_month": "11",
//   "expire_year": "2018",
//   "cvv2": "123",
//   "first_name": "Joe",
//   "last_name": "Shopper"
// };
// paypal.credit_card.create(card_data, function(error, credit_card){
//   if (error) {
//     console.log(error);
//     throw error;
//   } else {
//     console.log("Create Credit-Card Response");
//     console.log(credit_card);
//   }
// })

// console.log(Package)

// LocalCollection._recomputeResults = function (query, oldResults) {                                    // 876
//   if (!oldResults)                                                                                    // 877
//     oldResults = query.results;                                                                       // 878
//   if (query.distances)                                                                                // 879
//     query.distances.clear();                                                                          // 880
//   query.results = query.cursor._getRawObjects({                                                       // 881
//     ordered: query.ordered, distances: query.distances});                                             // 882
//                                                                                                       // 883
//   if (!query.paused) {                                                                                // 884
//     LocalCollection._diffQueryChanges(                                                                // 885
//       query.ordered, oldResults, query.results, query);                                               // 886
//   }                                                                                                   // 887
// };

process.env.MAIL_URL = 'smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587';


Meteor.myRedirect = function(res, query){
    var state = query.state;
    var url = state.split("-URL-")[1];
    //  <a href="' +url +'">url</a><a href="' +"file:///android_asset/www/index.html" +'">tapate </a><a href="' +"index.html" +'">tapatsdfde </a>
    res.writeHead(200, {'Content-Type': 'text/html'});
    var content =
        '<html><head><script>window.close(); //window.location = "' +url +'";</script></head><body></body></html>';
    res.end(content, 'utf-8');
    // res.writeHead(302, {'Location': state.split("-URL-")[1]});
    //   res.end();
    //   return;

}
// //////////////

// Oauth._renderOauthResults = function(res, query) {                                      // 162
//     console.log("here")
//   Meteor.myRedirect(res,query);   return;                                               // 163
//   // just serve a blank page                                                            // 164
//   if (query.error) {                                                                    // 165
//     Log.warn("Error in Oauth Server: " + query.error);                                  // 166
//     closePopup(res);                                                                    // 167
//   } else if ('close' in query) { // check with 'in' because we don't set a value        // 168
//     closePopup(res);                                                                    // 169
//   } else if (query.redirect) {                                                          // 170
//     // Only redirect to URLs on the same domain as this app.                            // 171
//     // XXX No code in core uses this code path right now.                               // 172
//     var redirectHostname = url.parse(query.redirect).hostname;                          // 173
//     var appHostname = url.parse(Meteor.absoluteUrl()).hostname;                         // 174
//     if (appHostname === redirectHostname) {                                             // 175
//       // We rely on node to make sure the header is really only a single header         // 176
//       // (not, for example, a url with a newline and then another header).              // 177
//       res.writeHead(302, {'Location': query.redirect});                                 // 178
//     } else {                                                                            // 179
//       res.writeHead(400);                                                               // 180
//     }                                                                                   // 181
//     res.end();                                                                          // 182
//   } else {                                                                              // 183
//     res.writeHead(200, {'Content-Type': 'text/html'});                                  // 184
//     res.end('', 'utf-8');                                                               // 185
//   }                                                                                     // 186
// };

/////////////////
// App = {};

function sendEmailMailGun(senderName,to,html){
    var data = {
        from: 'Tapmate <tapmate@tapmate.mailgun.org>',
        to: to,
        subject: senderName +' wants to you add in the group.',
        text: html
    };
    // console.log(html)
    Email.send(data, function (error, response, body) {
      // console.log(body);
    });
}
app.sendEmailMailGun = sendEmailMailGun;
function emailAlreadyExists(email){
    var cursorMe = Me.findOne({"email":email});
    if(cursorMe){
        return cursorMe._id;
    }
    var cursorEmailCollection = EmailCollection.findOne({"email":email});
    if(cursorEmailCollection){
        return cursorEmailCollection.clientid;
    }
    return false;
}
app.emailAlreadyExists = emailAlreadyExists;
function createGroupAsPerEmail(email,clientid,groupid){
    var id = null;
    // var email = null;
    // var cursorEmailCollection = EmailCollection.findOne({"email":email});

    // if(cursorEmailCollection){
        // if(id != cursorEmailCollection.clientid){
            var cursorFollowsGroup = FollowsGroup.findOne({"_id":groupid});
            if(cursorFollowsGroup){
                var follows = cursorFollowsGroup.follows;
                var picture = cursorFollowsGroup.picture;
                var emails = cursorFollowsGroup.email;
                var verify = cursorFollowsGroup.verify;

                for(var i=0,il=emails.length;i<il;i++){
                    if(email == emails[i]){
                        console.log("already in group " +email);
                        return email;
                    }
                }
                id = getGuestId();
                follows.push(id);
                picture.push("images/question.jpg");
                emails.push(email);
                verify.push(false);
                FollowsGroup.update({"_id":groupid},{ $set : {"follows":follows,"picture":picture,"email":emails,"verify":verify}});
                return id;
            }
            else{
                var follows = [];
                id = getGuestId();
                follows.push(id);
                var picture = [];
                picture.push("images/question.jpg");
                var emails = [];
                emails.push(email);
                var verify = [];
                verify.push(false);
                var insert = {"clientid":clientid,"follows" :follows ,"picture":picture,"_id":groupid,"email":emails,"verify":verify};
                FollowsGroup.insert(insert);
                return id;
            }

        // }

    // }
}
app.createGroupAsPerEmail = createGroupAsPerEmail;
function sendSecondEmail(ccArr,clientid,subject,groupId,from_string,clientid,groupid){
    var cursorFeed = Feed.findOne({"likeid":subject})
    for(var i=0,il=ccArr.length;i<il;i++){
        // console.log(ccArr[i]);
        var emailtoken = Random.id();
        var cursorEmailCollection = EmailCollection.findOne({"email":ccArr[i]});
        var emailAddress = parseEmail(ccArr[i]);
        var id = null;
            // console.log(emailAddress)
            if(!emailAddress)
                continue;
            else{
                id = emailAlreadyExists(emailAddress);
                if(id){
                    // if(cursorEmailCollection){
                    //     EmailCollection.update({"_id":cursorEmailCollection._id},{$set:{"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"whoid":clientid,"groupid":groupId}});
                    // }
                    // else{
                    //     EmailCollection.insert({"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"groupid":groupId,"whoid":clientid})
                    // }
                    continue;
                }
                else{
                    id = createGroupAsPerEmail(emailAddress,clientid,groupid)
                }
            }

        if(cursorEmailCollection){
            EmailCollection.update({"_id":cursorEmailCollection._id},{$set:{"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"whoid":clientid,"groupid":groupId}});
        }
        else{
            EmailCollection.insert({"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"groupid":groupId,"whoid":clientid})
        }
        var myhtml = "nothing";
        if(app.debug)
            myhtml = "<a href='http://localhost:3000/email/" + emailtoken+"'>" +"http://localhost:3000/email/" + emailtoken +"</a>";
        else
            myhtml = "<a href='http://youtap.meteor.com/email/" + emailtoken +"'>"  +"http://youtap.meteor.com/email/" + emailtoken +"</a>";
        // console.log(myhtml)
        if(!app.debug)
        sendEmailMailGun(from_string,emailAddress,myhtml)
    }
}
app.sendSecondEmail = sendSecondEmail;
// found algo on stackoverflow
function FindEmails(input) {
  var regex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm
  var result = input.match(regex);
  return result;
}
app.FindEmails = FindEmails;
function parseEmail(rawEmail){
    var backupEmail = rawEmail.substr(0,rawEmail.length);//new String(rawEmail);

    rawEmail = rawEmail.split("<")
    if(rawEmail.length){
        if(rawEmail.length >0){
            if(rawEmail[1]){
               rawEmail = rawEmail[1].split(">");
                if(rawEmail[0]){
                    rawEmail = rawEmail[0];
                    // console.log("before")
                    if(rawEmail.match("tapmate.mailgun.org")){
                        // console.log("first first inside")
                        return null;
                    }
                    else{
                        // console.log("first second inside")
                        // console.log(rawEmail[0])
                        return rawEmail;
                    }
                }
            }
        }
    }
    // console.log(backupEmail)
    rawEmail = FindEmails(backupEmail);
    // console.log(rawEmail)

    if(rawEmail)
    if(rawEmail.length){
        // console.log("crossed here " +rawEmail.length);
        if(rawEmail[0]){
            rawEmail = rawEmail[0];
            // console.log(rawEmail);
            // console.log(rawEmail.match("tapmate.mailgun.org"));
            // console.log("match")
            if(rawEmail.match("tapmate.mailgun.org")){
                // console.log("returning")
                return null;
            }
            else{
                return rawEmail;
            }
        }
    }
    // console.log(backupEmail +" email parsefailed." )
    return null;
}
app.parseEmail = parseEmail;
function parseSubject(subject){
  var backupSubject = subject;
  subject = subject.split(",");
  // console.log(subject)
  // console.log(subject.length);
  if(subject.length == 2){
    return subject;
  }

  // console.log(backupSubject +" subject parsefailed." );
  return [0,0];
}
app.parseSubject = parseSubject;
var testingText = "";
// Meteor.Router.add('/hello', 'GET', function() {
//     return Handlebars.templates['hello']({ name: 'Chris',"game":["first","second","third"]})
//     return "hello world";
// });
// Meteor.Router.add('/admin/table/:id', 'GET', function() {
//     if(this.params.id=="tapmateyouiest"){
//         var users = [];
//         var cursorRecPic = Me.find({});
//         cursorRecPic.forEach(function(data){
//             if(!data._id.match("guest"))
//                 users.push(data);
//         });
//         return Handlebars.templates['admin']({
//             totalUser : users.length,
//             "users" : users
//         })
//     }else{

//     }

// });
// Meteor.Router.add('/profile/:id', 'GET', function() {
//     var param = this.params;
//     var data = null;
//     var profId = "";
//     // console.log(param.id)
//     // console.log(isNaN(param.id));
//     if(isNaN(param.id)){
//         data = Me.findOne({"username":param.id});
//         profId = data._id;
//     }else{
//         data = Me.findOne({"_id":param.id})
//         profId = param.id;
//     }
//     var recPic=[];
//     var feedPic=[];
//     var votePic=[];
//     var cursorRecPic = Feed.find({"clientid":profId,"display":"n"},{sort : {"date": -1},limit:4});
//     cursorRecPic.forEach(function(data){
//         recPic.push(data.low);
//     });
//     var cursorFeedPic = Feed.find({"clientid":profId,"display":"y"},{sort : {"date": -1},limit:4});
//     cursorFeedPic.forEach(function(data){
//         feedPic.push(data.low);
//     });
//     var cursorVotePic = Votes.find({"followid":profId},{sort : {"date": -1},limit:4});
//     cursorVotePic.forEach(function(data){
//         votePic.push(data.low);
//     });
//     return Handlebars.templates['profile'](
//         { profile_picture: data.profile_picture,
//             score: data.score,
//             heatscore: data.heatscore,
//             votes1: data.votes,
//             username : data.username,
//             "recent":recPic,
//             "feeds":feedPic,
//             "votes":votePic,})
//     return "profile";
// });
// Meteor.Router.add('/new_message', 'POST', function() {
//     var account, allTo, attachmentCount, ccArr, ccParam, contact, contacts, current_time, from, fromName, from_string, from_whom, hasVoted, i, knote, knote_id, mail, mail_id, match_subjects, new_message, option, stripSubject, subject, to, toArr, toParam, topic, topic_id, user, username, votedContact, voting;

//     new_message = this.request.body;
//     from = new_message["sender"];
//     from_string = new_message["from"];
//     from_whom = from_string.substring(0, from_string.indexOf('<') - 1) || from;
//     subject = new_message["subject"];
//     toParam = new_message["To"];

//     ccParam = '';
//     ccArr = [];
//     if (new_message["Cc"]) {
//       ccParam = new_message["Cc"];
//     }
//     toArr = toParam.split(',');
//     ccArr = ccParam.split(',');

//     // console.log("toArr " +toArr);
//     // console.log("ccArr " +ccArr);

//     var clientid = null;
//     subject = parseSubject(subject);
//     clientid = subject[1];
//     subject = subject[0];
//     var groupId = Random.id();
//     sendSecondEmail(ccArr,clientid,subject,groupId,from_string,clientid,groupId)
//     ccArr = toArr;
//     sendSecondEmail(ccArr,clientid,subject,groupId,from_string,clientid,groupId)

//   // return [204, 'No Content'];
// });
// Meteor.Router.add('/app/:id', 'GET', function() {
//     var ip = getIP(this);
//     var IPURL = "http://api.hostip.info/get_html.php?ip=" +ip;
//     var id = this.params.id;
//     Meteor.setTimeout(function(){
//         var localIP = ip;
//         result = Meteor.http.get(IPURL);
//         var cursorIpAddress = IpAddress.findOne({"ip":localIP})
//         if(!cursorIpAddress)
//             IpAddress.insert({"ip":localIP,"id":id,"location":result.content})
//         // console.log(result.content);
//     },100);

//     return Handlebars.templates['app']({});
// });
// Meteor.Router.add('/app', 'GET', function() {
//     // console.log(this.userId);
//     return Handlebars.templates['app']({});
// });
// Meteor.Router.add('/instance', 'GET', function() {
//     // console.log("here");
//     // console.log(this.request.query)
//     var json = this.request.query;
//     if(json){
//         json
//     }
//     // app.testingText = this;
// });
// Meteor.Router.add('/faq', 'GET', function() {
//     console.log("faq");
//     // return Handlebars.templates['faq']({});
//     return faqdata;
// });

app.parseSubject = parseSubject;
function getIP(object){
    if(object)
        if(object.request)
            if(object.request.headers)
                return object.request.headers["x-forwarded-for"];
}
process.env.NEW_RELIC_NO_CONFIG_FILE = true;
process.env.NEW_RELIC_LICENSE_KEY  = "c5eed512550319e5462080d41b051c507f01cabb";
process.env.NEW_RELIC_APP_NAME  = "Tapmate";
process.env.NEW_RELIC_LOG_LEVEL = "debug";

// DebugFace = true;
// var relic = Npm.require('newrelic');
// var myjson = {
//   app_name : ["Tapmate"],
//   license_key : 'c5eed512550319e5462080d41b051c507f01cabb',
//   host : 'collector.newrelic.com',
//   port : 80,
//   proxy_host : '',
//   proxy_port : '',
//   ignore_server_configuration : false,
//   agent_enabled : true,
//   apdex_t : 0.100,
//   capture_params : false,
//   ignored_params : [],
//   logging : {
//     level : 'info',
//     filepath : require('path').join(process.cwd(), 'newrelic_agent.log')
//   },
//   error_collector : {
//     enabled : true,
//     ignore_status_codes : [404]
//   },
//   transaction_tracer : {
//     enabled : true,
//     transaction_threshold : 'apdex_f',
//     top_n : 20
//   },
//   debug : {
//     internal_metrics : false,
//     tracer_tracing : false
//   },
//   rules : {
//     name : [],
//     ignore : []
//   },
//   enforce_backstop : true
// };

app.getIP = getIP;
function testingFunction(){
    // var count = Votes.find({"likeid":undefined}).count();

    // console.log(count)
    // console.log();
    // console.log(METEOR_SETTINGS)
    // Votes.remove({})
    // var mediaid = "517162064100233539_487690035";
    // var comment = "Hello Tapmate";
    // console.log("comment on instagram " +mediaid +" " +comment);
    // access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733";
    // // access = Meteor.user().services.instagram.accessToken;
    // var url = "https://api.instagram.com/v1/media/" +mediaid +"/comments/?access_token="+access;

    // var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"TEXT":comment,"text":comment}});
    // console.log(result);


    // Meteor.users.remove({})
    // Meteor.users.find({}).observe({
    //     "added" : function(first){
    //         // console.log("first");
    //         // console.log(first);
    //     }
    // })
    // var result = Accounts.createUser({"email":"nicolsondsouza@yahoo.com","password":"123"});
    // console.log(result)
    // Votes.remove({})
    // console.log(Meteor.Router)
    // FollowsGroup.remove({});
    // EmailCollection.remove({});
    // Tapmate.remove({})
}
app.testingFunction = testingFunction;
var ACCESSTOKEN = null;

TOKEN = "487690035.f28d28f.59143bb52afa4405a536448686c5b44c";
var instagramTokens = [
                        "1314594135.f28d28f.99efee954d7a4f4182ed746da1c21941",
                        "625237041.f28d28f.93d9be9de690489aafafbd3c0f677595"
                        ]
var instagramTokenCount = 0;
app.instagramToken = function(){
    instagramTokenCount = instagramTokenCount % instagramTokens.length;
    instagramTokenCount ++;
    return instagramTokens[instagramTokenCount];
}
var ClientId = null;
ClientId = null;

var faqdata = null;
var cursor = null;
var countDownDays = 0;
var countDownHours = 0;
var countDownMins = 0;
var countDownSecs = 0;
var countDownTimeoutId  = null;
var ContestID = null;
app.adminText = "";
app.subjectEmail = "";
var contestEndFlag = false;
app.youiestPic= '';
var globalClientId = -1;
var Fiber = Npm.require('fibers');
app.YouestUsername="";
var routeMessage = ["first message","second message","a"];
var routeCounter = 0;
// Meteor.Router.add({
//   '/client/:id': function(clientid){
//       console.log(clientid);
//       if(routeCounter>2)
//         routeCounter=0;
//       return routeMessage[routeCounter++];
//   },
//   '/about': function() {
//     console.log("about");
//   },
//   "*" : function(){

//   }
// });
function testNewUser(userId){
    // // if(DebugFace)
    //     return true;
    // Meteor.users.find({}).forEach(function(data){
    //     if(app.isTapmate(data) == "instagram")
    //     if(data.services.instagram.id == userId){
    //         Meteor.users.remove({"_id":data._id})
    //     }
    // });
    Me.remove({"_id":userId});
    Me.remove({"clientid":userId});
    Me.remove({"facebookID":userId});
    Follows.find({"followid":userId}).forEach(function(data){
        Follows.remove({"_id":data._id});
    });
    Follows.find({"userid":userId}).forEach(function(data){
        Follows.remove({"_id":data._id});
    });
    Meteor.users.remove({"services.instagram.id":userId});
}
app.testNewUser = testNewUser;
if (Meteor.isServer) {
app.MeteorStartup = function(){
    Meteor.setTimeout(app.MeteorStartupTimeout,100);
}
Meteor.startup(app.MeteorStartup);

app.MeteorStartupTimeout = function () {
        // app.likesParser("625237041","625237041.f28d28f.93d9be9de690489aafafbd3c0f677595")
        app.testFacebook();
        app.testVimeo();
        PushTips.onStart();
        // Feed.remove({})
        // if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000"))
        //     DebugFace = true;
        // console.log(DebugFace)
        // console.log(querystring);

        // if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000"))
        //     DebugFace = true;
        // testNewUser();
        // getBase();
        // Feed.find({"clientid":null}).forEach(function(data){
        //     Feed.remove({"_id":data._id});
        // })

        Meteor.setTimeout(app.MeteorStartupObserver,10000);
        // Chat.remove({});
        // Me.remove({});
        // Follows.remove({});
        testingFunction();
        if(!app.debug){
            // Meteor.setTimeout(function(){Kadira.connect('5tquiL5EbzFXEtqyo', 'af850a7e-c7fc-4e2b-badb-9975f6d797ea');},100);
            Votes.find({"likeid":undefined}).forEach(function(data){Votes.remove({"_id":data._id})})
            var faqUrl= 'https://docs.google.com/forms/d/1DThl_Na98IgHYIOLIJaoJDIX9Luj08z4IIp__80oqYo/viewform';
            faqdata = Meteor.http.get(faqUrl).content;
        }
        // console.log("dmsdkmd")
        // var result = Meteor.http.post("https://test.stellar.org:9001",{"params":{"command": "account_info","id": 24,"account": "gL1nJqGU7YiCuYyUM4PVS9iq9qC3okCJsx^Account1"}});
        // console.log(result);
        // FollowsGroup.remove({});
        // EmailCollection.remove({});

        // FollowsGroup.find().forEach(function(data){console.log(data)});
        // var cursorUsers = Meteor.users.find({});
        // cursorUsers.forEach(function(data){
        //     console.log(data)
        // })

        // console.log(Meteor.myMongoUrl);
        // console.log("here");
        // var cursorFeed = Feed.findOne({"low":"http://distilleryimage8.s3.amazonaws.com/9fefccca4edc11e3907c1296586a1d24_6.jpg"});
        // console.log(cursorFeed)
        // var cursorFeed = Feed.findOne({"low":"http://distilleryimage6.s3.amazonaws.com/3d6d1e304ece11e38aa1125559adfe5f_6.jpg"});
        // http://distilleryimage6.s3.amazonaws.com/4895ea3a4b5411e39a99122380136edc_6.jpg
        // http://distilleryimage6.s3.amazonaws.com/3d6d1e304ece11e38aa1125559adfe5f_6.jpg
        // http://distilleryimage8.s3.amazonaws.com/9fefccca4edc11e3907c1296586a1d24_6.jpg
        // console.log(cursorFeed)
        // Meteor.call("recentMediaFetch","3877984","487690035.f28d28f.59143bb52afa4405a536448686c5b44c");
    // ErrorUpdate.remove({});
    // Feed.remove({});
    // Votes.remove({});
    // Follows.remove({});
    // Me.remove({});

//    console.log ( 'M.url', murl = Meteor.absoluteUrl())
//    console.log ( 'rurl', rurl = process.env.ROOT_URL)
//    console.log ( 'eurl', eurl = process.env.ABSOLUTE_URL)
    //Meteor.absoluteUrl.defaultOptions.rootUrl = "http://174.129.12.79:3000/";
    // Meteor.absoluteUrl.defaultOptions.rootUrl = "http://youtap.meteor.com/";
    //Meteor.absoluteUrl.defaultOptions.rootUrl =  "http://tapmatrix-23170.euw1.actionbox.io:3000/";

    //MONGO_URL= "mongodb://nicolsondsouza:123456789@paulo.mongohq.com:10017/youtap"
  /// REMOVING COLLECTION
    accountsSetup();
    // var cursorContest =  Contest.findOne({});
    // if(cursorContest){
    //     // ContestID = cursorContest._id;
    //     // countDownHours = cursorContest.countDownHours;
    //     // countDownMins = cursorContest.countDownMins;
    //     // countDownSecs = cursorContest.countDownSecs;
    //     // if(countDownHours == 0 && countDownMins == 0 && countDownSecs == 0){}
    //     //else{startCounting();}
    // }
    // else
    //     ContestID = Contest.insert({"countDownHours":0,"countDownMins":0,"countDownSecs":0});

    // if(!DebugFace)
    //     checkContest();
    /*
        http://zulfait.blogspot.in/2013/01/meteor-js-send-email-through-gmail.html
        can send email through gmail
    */
    //process.env.MAIL_URL = 'smtp://postmaster%40tapmatrix.mailgun.org:40m6u1yi5lb5@smtp.mailgun.org:587';

    //process.env.MAIL_URL = 'smtp://postmaster%tapmate.mailgun.org:2e8ch6il0kh9@smtp.mailgun.org:587';

    // HASTEN SMTP ADDRESS
    app.fetchLanguageFromDrive();


}
app.MeteorStartupObserver = function(){
    //return ; //pausing for a while
    Votes.find({"checked":false}).observe({
        "added" : function(first){
            checkSecondVote(first);
        }
    });

    GroupVoteRecommend.find({"checked":false}).observe({
        "added" : function(first){
            conditionalGroup(first);
        }
    });

    Feed.find({"checked":false}).observe({
        "added" : function(first){
            conditionalFeeds(first);
        },
    });
    Feed.find({"display":"y"}).observe({
        "removed" : function(first){
            app.onFeedChange(first);
        },
    });
    // ErrorUpdate.find({}).observe({
    //     "added" : function(first){
    //         reportErrorToAdmin(first);
    //     }
    // });

    TapmateNotification.find({"notify":false}).observe({
        "added" : function(first){
            notifyTheUser(first);
        }
    });

}
app.testNewUser = testNewUser;
//////// Observers starts //////

app.onFeedChange = function(first){
    if(app.debug)
        return;
    var clientid = first.userid;
    if(Feed.find({"clientid": clientid, "display":"y"}).count() < 50)
        app.touchTimeOut(clientid);
};

function getGuestId(){
    var cursorTapmate = Tapmate.findOne();
    if(!cursorTapmate){
        Tapmate.insert({"count":-1});
        cursorTapmate = Tapmate.findOne();
    }
    else
        Tapmate.update({"_id":cursorTapmate._id},{$inc:{"count":-1}});

    var count = cursorTapmate.count;
    count--;
    console.log("New guest id assigned " +count);
    return count;
}
app.getGuestId = getGuestId;

function getHost(){
    if(app.debug){
        return "localhost:3000";
    }
    else{
        return "youtap.meteor.com";
    }
}
app.getHost = getHost;

///// The idea for removing duplicate votes automation

function postActUser(id,access){
    Meteor.call("globalfeed",id,access);
    Meteor.call("recentMediaFetch",id,access);
    likesURL = "https://api.instagram.com/v1/users/self/media/liked?access_token=" +access;
    var data = Meteor.http.get(likesURL);
    likesParser(data,id,access);
    var cursorMe = Me.findOne({"_id":id});
        profile_picture = cursorMe.profile_picture;
        temp_profile_picture = newProfilePictureCheck(ClientId,access);
        if(temp_profile_picture.length>10) //Double Check Risky Shot
        if(profile_picture != temp_profile_picture){
            //This won't delay the user // It takes 3 secs or more to process
            meteor.setTimeout(function(){
                updateProfilePictureDependecies(ClientId,temp_profile_picture);
            },100);

            profile_picture = temp_profile_picture;
        }
}
app.postActUser = postActUser;

function checkSecondVote(first){
    var cursorVotes = Votes.find({"followid":first.followid,"likeid":first.likeid});
    if(cursorVotes.count() > 1){
        Votes.remove({"_id":first._id});
        console.log("removed vote");
        return;
    }
    var cursorGroupVoteRecommend = GroupVoteRecommend.findOne({"clientid":first.followid,"likeid":first.likeid});
    if(cursorGroupVoteRecommend){
        var eachFollow = cursorGroupVoteRecommend.follows;
        for(var i=0,il=eachFollow.length;i<il;i++){
            var cursorMe = Me.findOne({"_id":eachFollow[i]});
            if(cursorMe){
                for(var j=0,jl=eachFollow.length;j<jl;j++){
                    var senderMessage = cursorMe.username +" also voted on group pic.";
                    TapmateNotification.insert({"senderid":eachFollow[j],"message":senderMessage,"notify":false});
                }
                // console.log(cursorMe._id +" also voted this pic");
            }
        }
    }
    Votes.update({"_id":first._id},{$set : {"checked":true}});
    updateVoteDependencies(first);
    reminderOtherUserAboutNewVote(first);
}
function reminderOtherUserAboutNewVote(first){
    if(!first)
        return;
    if(isNaN(first.followid))
        return;
    var cursorVotes = Votes.find({"likeid":first.likeid});
    cursorVotes.forEach(function(data){
        if(data.followid != first.followid){
            var cursorMe = Me.findOne({"_id":first.followid});
            if(!cursorMe)
                return;
            var username = cursorMe.username;
            if(!first.low)
                first.low = Feed.findOne({"likeid":first.likeid}).low;
            TapmateNotification.insert({"senderid":data.followid,"message":username +" also voted on pic.","notify":false,"low":first.low,"likeid":first.likeid});
        }
    });
}
var i18n = {};
i18n.__ = function(value){
    return language.toast[value];
}
// console.log(app.language.en)
function updateVoteDependencies(first){
    Me.update({"_id":first.followid},{$inc:{"votes":1,"yvotes":1,"mvotes":1,"wvotes":1,"dvotes":1}});

    // another way to know global feeds
    MediaCollection.update({"_id":first.likeid},{$inc:{"votes":1}});

    var cursorMedia = MediaCollection.findOne({"_id":first.likeid});
    // console.log(cursorMedia);
    activeAnimation = true;
    var cursorRecomm = Feed.find({"likeid":first.likeid,"type":3,"clientid":first.followid});
    //var notifyCount =0;

    cursorRecomm.forEach(function(data){
        var distance = Math.sqrt(((data.left-first.left) * (data.left-first.left)) + ((data.top-first.top) * (data.top-first.top)));;
        //console.log(distance);
        distance = Math.round(distance);
        distance = 50 - distance;
        // Recommend.update({"_id":data._id},{$set:{"distance":distance,"notify":"no"}});
        Meteor.call("incScore",data.whoid,distance);
        //console.log(data);
        var message = data.whousername +" "+i18n.__("got")+" "+distance +" "+i18n.__("ptsfromyourvote");
        //customcheckpoint
        var senderMessage = distance +" "+i18n.__("ptsfrom")+" "+data.followusername ;

        if(cursorMedia){
            senderMessage += " "+i18n.__("by")+" "+cursorMedia.username +" "+i18n.__("pic");
        }
        // console.log(senderMessage);
        TapmateNotification.insert({"senderid":data.whoid,"message":senderMessage,"notify":false,"low":data.low,"likeid":data.likeid});
    });
}
app.checkSecondVote = checkSecondVote;
//// votes done

//

function conditionalGroup(first){
    var cursorGroupVoteRecommend = GroupVoteRecommend.find({"clientid":first.clientid,"likeid":first.likeid});
    if(cursorGroupVoteRecommend.count() > 1){
        GroupVoteRecommend.remove({"_id":first._id});
        console.log("removed group")
        return;
    }
    GroupVoteRecommend.update({"_id":first._id},{$set:{"checked":true}})
}
app.conditionalGroup = conditionalGroup;
//

/// Feeds now



function conditionalFeeds(first){
    var cursorVotes = Votes.findOne({"followid":first.clientid,"likeid":first.likeid});
    if(cursorVotes){
        // Votes.remove({"_id":first._id});
        console.log("removed 1");
        Feed.remove({"_id":first._id});
        return;
    }

    // This condition should fix the gone recommend after few secs.
    if(first.type == 2 || first.type == 3 || first.type == 1){
        Feed.update({"_id":first._id},{$set : {"checked":true}});
        return;
    }

    var cursorFeed = Feed.find({"clientid":first.clientid,"likeid":first.likeid,"display":"y"});
    if(cursorFeed.count() > 1){
        console.log("removed 2");
        Feed.remove({"_id":first._id});
        return;
    }


    // We will keep this later one
    cursorFeed = Feed.find({"clientid":first.clientid,"likeid":first.likeid});
    if(cursorFeed.count() > 1){
        console.log("removed 3");
        Feed.remove({"_id":first._id});
        return;
    }

    Feed.update({"_id":first._id},{$set : {"checked":true}})
}
app.conditionalFeeds = conditionalFeeds;




function reportErrorToAdmin(first){
    notifyTheUser({"senderid":"487690035","message":first.side});
}
app.reportErrorToAdmin = reportErrorToAdmin;

//////// Observers ends //////

/////////// PUSH NOTIFICATION /////


// var apnsProdCert = Assets.getText('PushChatCert.pem');
// var apnsProdKey = Assets.getText('PushChatKey.pem');
// var apnsDevCert = Assets.getText('apnDevCert.pem');
// var apnsDevKey = Assets.getText('apnDevKey.pem');

/// Assets not available in meteor 0.6.4 so converted into plain text and using it
var apnsProdCertText = Assets.getText('cert.pem');
var apnsProdKeyText = Assets.getText('c.pem');
// Tapmate2Youiest
//wiberwibing
var optionsDevelopment = {
    'passphrase': 'tapmate2youiest',
    'certData': apnsProdCertText,
    'keyData': apnsProdKeyText,
    'gateway': 'gateway.push.apple.com',
    errorCallback: pushErrorCallback,
};

function pushErrorCallback(errorNum,notification){
    // console.log('Error is: %s', errorNum);
    // console.log(notification);
}
app.pushErrorCallback = pushErrorCallback;
var iphoneConnection = new Meteor.iphoneapn.Connection(optionsDevelopment);
// pushToUser("9904ab6b7e515d2c3f5cb8e460cb384903204aa017ce70320a5daa15d010b1f7","hello","iphone");
// var optionsFeedbac = {
//     "batchFeedback": true,
//     "interval": 300,
//     'passphrase': 'tapmate2youiest',
//     'certData': apnsProdCertText,
//     'keyData': apnsProdKeyText,
//     'gateway': 'gateway.push.apple.com',
//     errorCallback: pushErrorCallback
// };
// var feedback = new Meteor.iphoneapn.Feedback(optionsFeedbac);
// // console.log(feedback)
// feedback.on("feedback", function(devices) {
//     devices.forEach(function(item) {
//         console.log(item)
//         // Do something with item.device and item.time;
//     });
// });


function notifyTheUser(first){
    if(first.notify == false){
        var user = Meteor.users.findOne(first.senderid);// Me.findOne({"_id":first.senderid});
        if(user){
            if(user.profile.pushId){
                // if(user.pushid.length){
                //     for(var i=0,il=user.pushid.length;i<il;i++){
                //         pushToUser(user.pushid[i],first.message,user.pushtype);
                //     }
                // }
                // else{
                    pushToUser(
                        user.profile.pushId,
                        first.message,
                        user.profile.pushDevice,
                        first.low,
                        first.likeid,
                        null,
                        first.title,
                        first.route
                    );
                    Toast.insert({
                        "clientid": first.senderid,
                        "likeid": first.likeid,
                        "message": first.message,
                        "time": new Date().getTime()
                    });
                    // postOnFacebook(first);
                // }

            }

        }
        TapmateNotification.update({"_id":first._id},{$set : {"notify":true}});
    }
}



app.notifyTheUser = notifyTheUser;
var notificationCount = 0;
function pushToUser(registrationid,mymessage,type,low,likeid,feed,title, route){
    // I have noticed that android registration id has dash "-" and iphone doesn't hence this is good for now
    // if(registrationid.match("-")){
    //     type = "android";
    // }
    // else{
    //     type = "iphone";
    // }
    if(!mymessage)
        mymessage = "undefine"
    var n = mymessage.search("undefine");
    if(n == 0){
        console.log("push cancle as message contain undefine variable");
        return;
    }
    var n = mymessage.search("null");
    if(n == 0){
        console.log("push cancle as message contain null variable");
        return;
    }
    if(type == "iphone"){
        // console.log("iphone")
        var myDevice = new Meteor.iphoneapn.Device(registrationid);

        var note = new Meteor.iphoneapn.Notification();
        note.badge = 1;
        note.alert = { "body" : mymessage, "action-loc-key" : "Play" , "launch-image" : "mysplash.png"};
        note.payload = {'messageFrom': 'Tapmate'};

        note.device = myDevice;


        iphoneConnection.sendNotification(note);
    }
    else{
        // console.log("android")
    // }
    // if(type == "android"){
        //console.log(registrationid);
        // registrationid = "APA91bFcYZH3rdV25Gtbp0AOIFkjlmx5AVUv7-SDpoLaEwMvt4GlxY5nqZTZgfcLEGt-jnWg_5Q5FoMnnxkmGntRyTKDS0-2I71oV8MKKWpZAAovORi1THRcXbE3iKenzGoqyxa4Vq39j1kfJVNeH9Ryvgio9fTSzxJ9zsZ_J5a6h_dC5OgWbtw"
        var registerid = [];
        registerid.push(registrationid);

        //console.log(Meteor.pushMessage);
        Meteor.pushMessage;
        var message = new Meteor.pushGCM.Message();
        // Message creation
        message.addData('title',title || 'Youiest Tapmate');
        //message.addData('message',mymessage);
        message.addData('msgcnt','1');
        // message.addData('mydata','nicolson');
        if(mymessage)
            message.addData('message',mymessage);
        if(low)
            message.addData('low',low);
        if(likeid)
            message.addData('likeid',likeid);
        if(route)
            message.addData('route',route);

        message.collapseKey = 'demo';
        message.delayWhileIdle = true;
        message.timeToLive = 30000;
        // Message creation ends

        notificationCount++;

        Meteor.pushSender.sendNoRetry(message, registerid, function (result,another) {
            // console.log("push result is " +result);
            // console.log("push another is " +another);
        });
    }

}
app.pushToUser = pushToUser;
var testResult = null;
/////////// PUSH NOTIFICATION /////


////FUNCTIONS STARTS///
app.temp = function(err,data){
    // console.log(data.statusCode);
     var username,profile_picture,id,fullname,link,low,mediaid;
                    if(!data.error)
                        if(data.statusCode == 200){
                            //console.log(data.data.data);
                            mediajson = data.data.data;
                            if(mediajson){
                               mediaid = mediajson.id;
                               username = mediajson.user.username;
                               profile_picture = mediajson.user.profile_picture;
                               id = mediajson.user.id;
                               fullname = mediajson.user.full_name;
                               link = mediajson.link;
                               low = mediajson.images.low_resolution.url;
                               thumb = mediajson.images.thumbnail.url;
                               std = mediajson.images.standard_resolution.url;
                               // console.log(mediajson.link)

                               var insert = {"profile_picture":profile_picture,"username":username,"clientid":id,"fullname":fullname,"link":link,"low" : low, "thumb" :thumb, "std" : std,"loud":0,"votes":0,"recomend":0};
                               MediaCollection.update({"_id":mediaid},{$set : insert});
                               // console.log("insert");
                            }
                        }

    // another lite logic
}
function isAdmin(clientid){
    if("625237041" == clientid || "363620479" == clientid || "487690035" == clientid)
        return true;
    else
        return false;
}
app.isAdmin = isAdmin;

    function checkMyDuplicateAlreadyVotedFeed(clientid){

        return true;
        // temporary depricated
        var cursorFeed = Feed.find({"clientid":clientid,"display":"y"});
        var feedArray = [];
        var cursorVotes = null;
        cursorFeed.forEach(function(data){
            for(var i=0,il=feedArray.length;i<il;i++){
                if(feedArray[i] == data.likeid){
                    Feed.remove({"_id":data._id});
                    return;
                }
            }
            cursorVotes = votes.findOne({"likeid":data.likeid,"followid":clientid});
            if(cursorVotes){
                Feed.remove({"_id":data._id});
                return;
            }
            feedArray.push(data.likeid);
        });
    }
    app.checkMyDuplicateAlreadyVotedFeed = checkMyDuplicateAlreadyVotedFeed;

    function newProfilePictureCheck(userid,access){
        if(userid && access){
            var url = "https://api.instagram.com/v1/users/"+userid +"?access_token="+access;
            var data = Meteor.http.get(url);
            if(data.statusCode == 200){
               data = data.data.data.profile_picture;
                //Meteor.users.update({"services.instagram.id":userid},{$set:{"services.instagram.profile_picture":data}});
                return data;
            }
            return -1;
        }
        else{
            return false;
        }

    }
    app.newProfilePictureCheck = newProfilePictureCheck;

    function updateProfilePictureDependecies(id,profile_picture){
        //note this process is very heavy process

        var cursor = null;
        // cursor = Recommend.find({"followid":id});
        // cursor.forEach(function(data){
        //     Recommend.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        // })
        cursor = Feed.find({"clientid":id});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"who":profile_picture}});
        });
        cursor = Votes.find({"followid":id});
        cursor.forEach(function(data){
            Votes.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        });

        cursor = Follows.find({"followid":id});
        cursor.forEach(function(data){
            Follows.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        });
        Me.update({"_id":id},{$set :{"profile_picture":profile_picture}});
        //That's it dependencies now. In future if any then add more.

    }
    app.updateProfilePictureDependecies = updateProfilePictureDependecies;
    function newUserEmail(insert){
        var html = "Hey new user with username " +insert.username +" <br><img src='" +insert.profile_picture +"'>";
        Email.send({
            from: 'Tapmate <tapmate@youiest.com>',
            to:   "nicolsondsouza@gmail.com",
            subject : "Hey new user entered " +insert.username,
            html : html
        });
        // not sure if both can come together so made twice
        Email.send({
            from: 'Tapmate <tapmate@youiest.com>',
            to:   "elias@tapmate.com",
            subject : "Hey new user entered " +insert.username,
            html : html
        });
    }
    app.newUserEmail = newUserEmail;
    function searchParser(ids,access,tag){
         console.log("search start",ids,access,tag);
         var searchurl = "https://api.instagram.com/v1/tags/" +tag +"/media/recent?access_token="+access;
        var myJson =Meteor.http.get(searchurl);
          myJson = myJson.data;
          var data = null;
          if(myJson.meta.code == 200){
            data = myJson.data;

            for(var i=0,il=data.length;i<il;i++){
              //data[i]
                app.feedVideoInstagram(data[i],ids); //"type":"s",
                var insert = {"keyword":tag,"display":"y","clientid": ids,"likeid":data[i].id /*,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url*/,"low":data[i].images.thumbnail.url, "counts":data[i].likes.count,"voting":0};
              //   cursorSearch = Search.findOne({"likeid":insert.likeid,"userid": ids});
              // if(!cursorSearch)
              //     cursorSearch = Recents.findOne({"likeid":insert.likeid,"userid": ids});
              if(false){
                // var id = insert.likeid;
                // insert._id = null;
                // delete insert._id;
                //Popular.update({"likeid":id,"userid": ids},{$set :insert});
              }
              else{
                //old standard
                // Search.insert(insert);

                insert.clientid = ids;
                insert.source = "search";
                insert.type = 14;
                insert.checked = false;
                insert = app.setAdditionFeedsInstagram(insert);
                app.insertOrUpdateFeeds(insert)
                Meteor.call("media",insert.likeid,access);
              }
            }
          }
          else{

          }
          console.log("search ended");
        }
        app.searchParser = searchParser;
    function recentMediaParser(clientid,instagramid,access){
        var searchurl = "https://api.instagram.com/v1/users/" +instagramid +"/media/recent?access_token="+access;
        var myJson = Meteor.http.get(searchurl);
        var ids = clientid;
        console.log("recent media start");
        myJson = myJson.data;
        var data = null;
        if(myJson.meta.code == 200){
            data = myJson.data;

            for(var i=0,il=data.length;i<il;i++){
                //data[i]
                app.feedVideoInstagram(data[i],ids);
                var insert = {"type":"r","display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.thumbnail.url, "counts":data[i].likes.count,"voting":0};
                // cursorSearch = Search.findOne({"likeid":insert.likeid,"userid": ids});
                // if(!cursorSearch)
                //   cursorSearch = Recents.findOne({"likeid":insert.likeid,"userid": ids});
                if(false){
                // var id = insert.likeid;
                // insert._id = null;
                // delete insert._id;
                //Popular.update({"likeid":id,"userid": ids},{$set :insert});
                }
                else{
                    //old standard
                    // Search.insert(insert);

                    insert.clientid = ids;
                    insert.source = "search";
                    insert.type = 15;
                    insert.checked = false;
                    // console.log(insert.low)
                    insert = app.setAdditionFeedsInstagram(insert);
                    app.insertOrUpdateFeeds(insert);
                    // console.log(insert)
                    Meteor.call("media",insert.likeid,access);
                }
            }
        }
        else{

        }
        console.log("recent media ended");
    }
    app.recentMediaParser = recentMediaParser;
    function parseFeed(id,access){
        var url = "https://api.instagram.com/v1/users/self/feed?count=10&access_token=" +access;
        var cursorMe = Me.findOne({"_id":id});
        if(cursorMe){
            if(cursorMe.nexturl)
                url = cursorMe.nexturl;
        }
        var data = Meteor.http.get(url,{"params":{"ACCESS_TOKEN":access,"action":"follow"}});

        console.log("parseFeed start");
        // console.log(data.statusCode);
        var nexturl = data.data.pagination.next_url;
        Me.update({"_id":id},{$set:{"nexturl":nexturl}})

        if(data.statusCode == 200){
            data = data.data.data;
            for(var i=0,il=data.length;i<il;i++){
                var temp = data[i];
                var low = temp.images.low_resolution.url;
                // console.log(temp);
                app.feedVideoInstagram(data[i],id);
                var insert = {"display":"y","type":"f","globalid":id,"likeid":temp.id,"low":low}
                // var cursorGlobalFeed = GlobalFeed.findOne({"likeid":insert.likeid,"globalid":id})
                if(true){
                    // GlobalFeed.insert(insert);

                    insert.clientid = id;
                    insert.source = "feed";
                    insert.type = 13;
                    insert.checked = false;
                    insert = app.setAdditionFeedsInstagram(insert);

                    if(insert.low)
                        app.insertOrUpdateFeeds(insert);
                    Meteor.call("media",insert.likeid,access);
                }
                //Something more.
            }
            console.log("parseFeed end");
            return data.length;
        }
        console.log("parseFeed end");
    }
    app.parseFeed = parseFeed;
    function checkContest(){
        //Meteor.setInterval(calcTime,60000)
        calcTime();
    }
    app.checkContest = checkContest;
    // var dayPrevious = -1; // cause day start from 0 which is false
    // var monthPrevious = null;
    // var yearPrevious = null;

    // var dayCurrent;
    // var monthCurrent;
    // var yearCurrent;

    function calcTime(){
        maileverysunday();
        maileverysaturday();
        maileveryday();
        maileveryweek();
        maileverymonth();
        maileveryyear();
        //maileveryhour();
        //maileverymin();
    }
    app.calcTime = calcTime;
    function generateRunTime(){
        var d = new Date();

        var dayCurrent = d.getUTCDay();
        var hours = d.getUTCHours();
        var mins = d.getUTCMinutes();
        var secs = d.getUTCSeconds();

        countDownDays = getDay(dayCurrent);
        countDownHours = 24 - hours;
        countDownMins = 60 - mins;
        countDownSecs = 60 - secs;

    }
     app.generateRunTime = generateRunTime;
    // function maileverymin(){
    //     console.log("maileverymin")
    //     var rule = new schedule.RecurrenceRule();
    //     rule.second = 0;
    //     var j = schedule.scheduleJob(rule, function(){
    //             console.log("schedule is good minute");
    //             //app.subjectEmail = "Tapmate test";
    //             //app.sentmailtome();

    //     });
    // }
    function maileveryhour(){
        var rule = new schedule.RecurrenceRule();
        rule.minute = 1;
        var j = schedule.scheduleJob(rule, function(){
                console.log("schedule is good");
        });
    }
    function maileverysunday(){
        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = 0;
        rule.hour = 0;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
                app.subjectEmail = "Tapmate heat results are in!  ending 3pm GMT";
                contestEndFlag = true;
                batchEmail();
        });
    }
    function maileverysaturday(){
        var rule = new schedule.RecurrenceRule();
        //rule.dayOfWeek = [0, new schedule.Range(4, 6)];
        rule.dayOfWeek = 6;
        rule.hour = 0;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
                app.subjectEmail = "Tapmate heat results are ending in 24 hrs!";
                contestEndFlag = false;
                batchEmail();
        });
    }
    function maileveryday(){
        // console.log("maileveryday")
        var rule = new schedule.RecurrenceRule();
        //rule.dayOfWeek = [0, new schedule.Range(1, 6)];
        rule.hour = 1;
        rule.minute = 15;
        rule.second = 0;
        var j = schedule.scheduleJob(rule, function(){
                // console.log("day reset")
                app.subjectEmail = "Daily Updates";
                Fiber(function () {
                Meteor.setTimeout(scheduleFixing,300);
                }).run();
                app.fetchLanguageFromDrive();
        });
    }
    function scheduleFixing(){
        app.sentmailtome();
        var cursorMe = Me.find({});
        cursorMe.forEach(function(data){
            Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"wswipeleft":0,"dswiperight":0}});
        });
    }
    function maileveryweek(){
        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = 1;
        rule.hour = 1;
        rule.minute = 30;
        var j = schedule.scheduleJob(rule, function(){
                Fiber(function () {
                    var cursorMe = Me.find({});
                    cursorMe.forEach(function(data){
                    Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
                    });

                    // plus all
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
                    });
                }). run();
        });
    }
    function maileverymonth(){
        var rule = new schedule.RecurrenceRule();
        rule.month=[0, new schedule.Range(1, 11)];
        rule.hour = 2;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
                Fiber(function () {
                    var cursorMe = Me.find({});
                    cursorMe.forEach(function(data){
                    Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
                    });

                    // plus all
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
                    });
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
                    });
                }). run();
        });
    }
    function maileveryyear(){
        var rule = new schedule.RecurrenceRule();
        rule.month=0;
        rule.hour = 2;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){

                Fiber(function () {
                    var cursorMe = Me.find({});
                    cursorMe.forEach(function(data){
                    Me.update({"_id":data._id},{$set:{"yalreadyloggedin":0,"yautologin":0,"yvotes":0,"yrecomending":0,"yfollownew":0,"yswipeleft":0,"yswiperight":0}});
                    });

                    // plus all
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
                    });
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
                    });
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
                    });
                }). run();
        });
    }

    // function calcTime() {
    //     var d = new Date();
    //     yearCurrent = d.getUTCFullYear();
    //     monthCurrent = d.getUTCMonth()
    //     dayCurrent = d.getUTCDay();
    //     if(dayPrevious == -1){
    //         dayPrevious = dayCurrent;
    //         monthPrevious = monthCurrent;
    //         yearPrevious = yearCurrent;
    //     }

    //     if(dayPrevious != dayCurrent){
    //         Meteor.setTimeout(function(){resetMe("day");},100);
    //         dayPrevious=dayCurrent;
    //     }
    //     if(monthPrevious != monthCurrent){
    //         Meteor.setTimeout(function(){resetMe("month");},100);
    //         monthPrevious=monthCurrent;
    //     }
    //     if(yearPrevious != yearCurrent){
    //         Meteor.setTimeout(function(){resetMe("year");},100);
    //         yearPrevious=yearCurrent;
    //     }
    //     var hours = d.getUTCHours();
    //     var mins = d.getUTCMinutes();
    //     var secs = d.getUTCSeconds();
    //     var sendDay =0;
    //     var beforeDay =  7 ;
    //     if(dayCurrent == beforeDay || dayCurrent == sendDay ){
    //         if(hours == 20){
    //             if(mins == 0){
    //                 // if(secs == 0){
    //                     if(day == sendDay){
    //                         //end of contest subject
    //                         subjectEmail = "Tapmate heat results are in!  ending 3pm GMT";
    //                         contestEndFlag = true;
    //                         batchEmail();
    //                         // resetMe("week");
    //                         // Meteor.setTimeout(function(){},100);
    //                     }
    //                     if(day == beforeDay){
    //                         //before 24 hrs subject
    //                         subjectEmail = "Tapmate heat results are ending in 24 hrs!";
    //                         contestEndFlag = false;
    //                         batchEmail();
    //                     }
    //                 // }
    //             }
    //         }
    //     }

    //     //Me.update({"_id":clientid},{$set :{"heatscore":0}});

    //     countDownDays = getDay(dayCurrent);
    //     countDownHours = 24 - hours;
    //     countDownMins = 60 - mins;
    //     countDownSecs = 60 - secs;

    //     //console.log("Day : " +d.getUTCDay() +" Hrs : " +d.getUTCHours() +" Mins : " +d.getUTCMinutes() +" Secs : " +d.getUTCSeconds());
    // }
    /// it will reset daily weekly monthly and yearly logs
    function emailDailyGen(clientid,email){
         // Fiber(function () {
              //Accounts.oauth._middleware(req, res, next);
                // console.log("emailDailyGen");
                var extraData = addrow();
                if(!extraData){
                    console.log("nothing to send!");
                    return;
                }
                var html =
                '<html> <head> <style> '
                    +''
                +' </style> </head> <body>'
                +'<div id="emailFormatBody" style="height: 500px;width: 100%;left : 0px;top : 0px;position: absolute;display: block;overflow: hidden; z-index:2; text-align:center; border: 1px solid #444;background: cornflowerblue;color: #fff;text-shadow: 0 1px 0 #111;font-weight: 400; color:white;"> '
                        +'<table  border="1">'
                        +'<tr> '
                          +'<th>userid</th>'
                          +'<th>username</th>'
                          +'<th>email</th>'
                          +'<th>DRecommending</th>'
                          +'<th>DVotes</th>'
                          +'<th>DFollowNew</th>'
                          +'<th>autologin </th>'
                          +'<th>dalreadyloggedin </th>'
                          +'<th>dswipeleft </th>'
                          +'<th>dswiperight </th>'
                        +'</tr>'
                        +extraData;
               +' </div>'
               +'</body> </html>';
               // console.log("html generation edded");
               // console.log(extraData);
            Meteor.call("sendEmail",html,email);
       // }).run();
    }
    app.emailDailyGen = emailDailyGen;

    function addrow(){
        var htmlstr = "";
        //Fiber(function () {
        //str = "";
        var emailCount = 0;
        // console.log("addrow")
        var cursorTapMatrixUser = Me.find({});
            cursorTapMatrixUser.forEach(function(data){
                // console.log(data.dalreadyloggedin)
                if(data.dalreadyloggedin){
                    //console.log("data"+data.dalreadyloggedin);
                    htmlstr += '<tr> '
                                  +'<th>'+data._id+'</th>'
                                  +'<th>'+data.username+'</th>'
                                  +'<th>'+data.email+'</th>'
                                  +'<th>'+checkmaildata(data.drecomending)+'</th>'
                                  +'<th>'+checkmaildata(data.dvotes)+'</th>'
                                  +'<th>'+checkmaildata(data.dfollownew)+'</th>'
                                  +'<th>'+checkmaildata(data.dautologin)+'</th>'
                                  +'<th>'+checkmaildata(data.dalreadyloggedin)+'</th>'
                                  +'<th>'+checkmaildata(data.dswipeleftswipeleft) +'</th>'
                                  +'<th>'+checkmaildata(data.dswiperight) +'</th>'
                            +'</tr>';
                    emailCount++;
                }
        });
        // console.log("htmlstr"+htmlstr)
        if(emailCount==0)
            return null;

        return htmlstr;
        //}).run();
    }
    function checkmaildata(value){
        if(value){
            return value;
        }else{
            return "0";
        }

    };
    function sentmailtome(){
        //Fiber(function () {
        // console.log("sentmailtome")
        //emailDailyGen("625237041","hastenf@gmail.com");
        // setTimeout(function(){},200);
        //emailDailyGen("625237041","hastenf@gmail.com");
        emailDailyGen("487690035","nicolsondsouza@gmail.com");
        //emailDailyGen("363620479","decivote@gmail.com")
        //}).run();
    };
    app.sentmailtome = sentmailtome;
    // function resetMe(what){
    //     console.log(what);
    //     var cursorMe = Me.find({});
    //     //alreadyloggedin autologin  votes  recomending  follownew swipeleft swiperight
    //     if(what == "day"){
    //         console.log("test day");
    //         sentmailtome();
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"wswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else if(what == "week"){
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
    //         });

    //         // plus all
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else if(what == "month"){
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
    //         });

    //         // plus all
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
    //         });
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else if(what == "year"){
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"yalreadyloggedin":0,"yautologin":0,"yvotes":0,"yrecomending":0,"yfollownew":0,"yswipeleft":0,"yswiperight":0}});
    //         });

    //         // plus all
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
    //         });
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
    //         });
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else{

    //     }
    // }
    function getDay(day){return 7 - day};
    function batchEmail(){
        console.log("batchEmailStarted");
        Meteor.call("getTextForNewsletters"); //This will set admin text from the caption of instagram picture.
        var emailCounter =0;
        var cursorTapMatrixUser = TapMatrixUser.find({});
        cursorTapMatrixUser.forEach(function(data){
            emailCounter++;
            if(data.email){
                emailGeneration(data._id,data.email);
            }
        })
        console.log("batchEmailEnded");
    }
    app.batchEmail = batchEmail;
    ///HASTEN CODE///

    function emailGeneration(clientid,email){
        //console.log("profil:"+adminText);
        //console.log("profil:"+youiestPic);
        var html =
        '<html> <head> <style> '
            +''
        +' </style> </head> <body>'
        +'<div id="emailFormatBody" style="height: 500px;width: 500px;left : 0px;top : 0px;position: absolute;display: block;overflow: hidden; z-index:2; text-align:center; border: 1px solid #444;background: cornflowerblue;color: #fff;text-shadow: 0 1px 0 #111;font-weight: 400; color:white;"> '
            +'<div style="font-size: 39px; background: steelblue; font-family: serif;"> Tapmate </div>'
            +'<div style="margin-top: 9px;">'
                +'<div style="width: 30%;max-height: 25%; float:left;"><img style="width: 88%;max-height: 26%; float: center;" src="'+app.youiestPic +'"/></div>'
                +'<div style="width: 70%;max-height: 25%; float:left;">Message from '+app.YouestUsername+':'
                +app.adminText
                +'</div>'
            +'</div>'
            +'<div style="width: 100%;max-height: 5%; float:center; margin-top: 32%;">If you are unable to see the images. Please click on Display image link.</div>'
           +'<div style="height: 182px;">'
                +leadersboard()
            +'</div>'
           +'<div style="height: 182px;">'
                + knowsYouBetter(clientid)
          +' </div>'
           +'<div style="height: 182px;">'
                +youKnowsBetter(clientid)
           +'</div>'
           +'<div style="height: 182px;">'
                +usersRanking()
           +'</div>'
           +'<div style="height: 182px;">'
                +myVotesOfWeek(clientid)
           +'</div>'
       +' </div>';
       +'</body> </html>';
       if(contestEndFlag)
            Me.update({"_id":clientid},{$set :{"heatscore":0}});
       Meteor.call("sendEmail",html,email);
    }
    app.emailGeneration = emailGeneration;
    function myVotesOfWeek(clientid){
        var cursorRecPic = Feed.find({"whoid":clientid},{sort : {"date": -1,"distance":-1},limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;">My Top Votes of Week</div>';
        cursorRecPic.forEach(function(data){
            //console.log(data);//recPic.push(data.low);
            str += createStringtopvotes(data.low,data.distance);
        });
        return str;
    }
    app.myVotesOfWeek = myVotesOfWeek;

    function usersRanking(){
        var cursorRecommend = Me.find({},{sort: {"score" : -1}});
        var str = '<div  style="height:10%;width:100%;position:absolute;">User Ranking</div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str += createString1(data.username,data.profile_picture,data.heatscore);
        });
        return str;
    }
    app.usersRanking = usersRanking;
    function knowsYouBetter(clientid){
        var cursorRecommend = Feed.find({"followid":clientid},{sort :{"distance":-1}, limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;background: steelblue;"> &nbsp;&nbsp;&nbsp;&nbsp;Who knows you better? </div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str += createString(data.whousername,data.who,data.distance);
        });

        return str;
    }
    app.knowsYouBetter = knowsYouBetter;
    function youKnowsBetter(clientid){
        var cursorRecommend = Feed.find({"whoid":clientid},{sort :{"distance":-1}, limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;background: steelblue;"> Whom you know better? </div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str+=createString(data.followusername,data.profile_picture,data.distance);
        });
        return str;
    }
    app.youKnowsBetter = youKnowsBetter;
    function leadersboard(){
        var cursorRecommend = Me.find({},{sort: {"heatscore" : -1},limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;background: steelblue;"> leadersboard </div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str += createString(data.username,data.profile_picture,data.heatscore);
        });
        return str;
    }
    app.leadersboard = leadersboard;
    function createString(username,picture,score){
        return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;max-height: 140px;"> <a href="http://instagram.com/' +username +'"> <img style="width: 100%;max-height: 140px;" src="' +picture  +'"/></a><div style="background: steelblue;"> ' +score +' </div></div>'
    }
    function createString1(username,picture,score){
        return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;max-height: 140px;"> <a href="http://instagram.com/' +username +'"> <img style="width: 100%;max-height: 140px;" src="' +picture  +'"/></a><div style="background: steelblue;"> ' +score +' </div></div>'
    }
    function createStringtopvotes(picture,score){
        return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;max-height: 140px;"> <img style="width: 100%;max-height: 140px;" src="' +picture  +'"/></a><div style="background: steelblue;"> ' +score +' </div></div>'
    }
    ///HASTEN CODE///
    function startCounting(){
        countDownTimeoutId = Meteor.setInterval(updateCouting,1000);
    }
    app.startCounting = startCounting;
    function updateCouting(){
        Contest.update({"_id":ContestID},{$set : {"countDownHours":countDownHours,"countDownMins":countDownMins,"countDownSecs":countDownSecs}})
        if(countDownSecs == 0){

            if(countDownMins == 0){

                if(countDownHours == 0 && countDownMins == 0 && countDownSecs == 0)
                    return stopCountDow();
                countDownMins = 59;
                countDownHours--;
            }
            countDownSecs=59;
            countDownMins--;
        }
        countDownSecs--;
    }
    app.updateCouting = updateCouting;
    function stopCountDow(){
        if(countDownTimeoutId){
            Meteor.clearInterval(countDownTimeoutId);
            countDownTimeoutId = null;
            Contest.remove({"_id":ContestID});
            batchEmail();
            Meteor.call("startContest");
        }
    }
    app.stopCountDow = stopCountDow;
    function globalFeedParser(ids){
        console.log("global feed parse started");
        if(!ids){
            console.log({"error": "no id","side":"server"});
            ErrorUpdate.insert({"error": "no id","side":"server"});
            return;
        }
        var counter = 0;
        var likeidArray = [];
        var cursorVotes = Votes.find({"followid" : {$nin : [ids]}},{sort : {"date":-1},limit:500});
        // var cursorRecents = GlobalFeed.find({"globalid":ids});
        var followidArray = [];
        // cursorRecents.forEach(function(data){
        //     likeidArray[likeidArray.length] = data.likeid;
        // });
        cursorVotes.forEach(function(data){
                // if(counter>10)
                //     return;
            if(data.followid != ids){
                for(var i=0,il=likeidArray.length;i<il;i++){
                    if(likeidArray[i] == data.likeid)
                        return;
                }
                // for(var i=0,il=followidArray.length;i<il;i++){
                //     if(followidArray[i] == data.followid)
                //         return;
                // }
                likeidArray[likeidArray.length] = data.likeid;
                followidArray[followidArray.length] = data.followid
                delete data._id;
                data.globalid = ids;
                data.type = "g";
                data.display = "y";

                // GlobalFeed.insert(data);

                var insert = data;
                //insert.low = cursorFeed.low;
                insert.clientid = ids;
                insert.source = "globalfeed";
                insert.type = 2;
                insert.checked = false;
                insert = app.setAdditionFeeds(insert);
                var myId = app.insertOrUpdateFeeds(insert);

            }
        });
        console.log("global feed parse ended " +counter);
        // checkMyDuplicateAlreadyVotedFeed(ids);
    }
    app.globalFeedParser = globalFeedParser;
    function likesParser(ids,access){
        var likesURL = "https://api.instagram.com/v1/users/self/media/liked?access_token=" +access;
        var myJson = Meteor.http.get(likesURL);

        console.log("Likes start");
        myJson = myJson.data;
        var data = null;
        // if(myJson.meta.code == 200){
            data = myJson.data;
            for(var i=0,il=data.length;i<il;i++){
                //data[i]
                app.feedVideoInstagram(data[i],ids);
              var insert = {"type":"l","display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.thumbnail.url, "counts":data[i].likes.count,"voting":0};
                // cursor = Likes.findOne({"likeid":insert.likeid,"userid": ids});
                // if(false){
                // }
                // else{
                    // var cursorVotes = Votes.find({"likeid":data[i].id,"followid":ids});
                    // if(cursorVotes)
                    //     continue;

                    // Likes.insert(insert);

                    insert.clientid = ids;
                    insert.source = "like";
                    insert.type = 11;
                    insert.checked = false;
                    insert = app.setAdditionFeedsInstagram(insert);
                    app.insertOrUpdateFeeds(insert);
                    Meteor.call("media",insert.likeid,access);
                // }
            }
        // }
        // else{

        // }
        console.log("Likes ended");
    }

    app.likesParser = likesParser;

    // function likesPopularParser(myJson,ids,access){
    //     console.log("pouplar start");
    //     myJson = myJson.data;
    //     var data = null;
    //     if(myJson.meta.code == 200){
    //         data = myJson.data;
    //         for(var i=0,il=data.length;i<il;i++){
    //             //data[i]
    //             // console.log(data[i]);
    //             var insert = {"type":"p","display":"y","userid": ids,"likeid":data[i].id /*,"standard":data[i].images. standard_resolution.url */,"thumb":data[i].images.thumbnail.url,"low":data[i].images.thumbnail.url, "counts":data[i].likes.count,"voting":0};
    //             // cursor = Popular.findOne({"likeid":insert.likeid,"userid": ids});
    //             if(false){
    //                 // var id = insert.likeid;
    //                 // insert._id = null;
    //                 // delete insert._id;
    //                 //Popular.update({"likeid":id,"userid": ids},{$set :insert});
    //             }
    //             else{
    //                 // Popular.insert(insert);
    //                 insert.clientid = ids;
    //                 insert.source = "popular";
    //                 insert.type = 8;
    //                 insert.checked = false;
    //                 Feed.insert(insert);
    //                 Meteor.call("media",insert.likeid,access);
    //             }
    //         }
    //     }
    //     else{
    //      }
    //     console.log("popular ended");
    // }


}

// Not longer in user
// function parsingJson(myJson){
//     return;
//     cursor = Accounts.loginServiceConfiguration.find({}); //"_id": "LNCNffj3FJGrpivLh"
//      //Meteor.userId()
//     var data = null;
//     if(myJson.meta.code == 200){
//         data =  myJson.data;
//         for(var i=0,il=data.length;i<il;i++){
//             var insertJson = {"userid":data[i].id,"picture":data[i].user.profile_picture};
//             MyUsers.insert(insertJson);
//         }
//     }
//     cursor = MyUsers.find({});
//     cursor.forEach(function(data){
//     });
// }

// Accounts.loginServiceConfiguration.insert({
//     service: 'google',
//     appId: '168801197162-orn5poq5vl2vns36k1vt55qfv130fl0v.apps.googleusercontent.com',
//     secret: 'NyNTCih_2mzyK1yvI4w7FRIc'
// });
// Accounts.ui.config({
//   requestPermissions: {
//     google: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/tasks']
//   }
// }, {
//   requestOfflineToken: {
//     google: true
//   }
// })({
//   insertEvent: function(cliente, poblacion, texto, fecha) {
//     var Auth, event, evento, url;
//     url = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
//     event = {
//       summary: cliente,
//       location: poblacion,
//       description: texto,
//       start: {
//         "date": fecha
//       },
//       end: {
//         "date": fecha
//       }
//     };
//     evento = JSON.stringify(event);
//     console.log(evento);
//     Auth = 'Bearer ' + Meteor.user().services.google.accessToken;
//     return Meteor.http.post(url, {
//       params: {
//         key: 'INSERT-YOUR-API-KEY-HERE'
//       },
//       data: event,
//       headers: {
//         'Authorization': Auth
//       }
//     }, function(err, result) {
//       console.log(result);
//       return result.id;
//     });
//   }
// });

function accountsSetup(){
    // return;
    // console.log("insert");
    accountsAll();
    Accounts.loginServiceConfiguration.remove({});

    // Accounts.loginServiceConfiguration.remove({
    //     service: 'google'
    // });


    // Accounts.onCreateUser(function(user){
    //     console.log(user)
    //     return true;
    // })
    // Accounts.loginServiceConfiguration.remove({
    //     service: 'facebook'
    // });

    var cursorServiceGoogle = Accounts.loginServiceConfiguration.findOne({"service": "google"});
    if(!cursorServiceGoogle){
        Accounts.loginServiceConfiguration.insert({
            service: 'google',
            clientId: "168801197162-orn5poq5vl2vns36k1vt55qfv130fl0v.apps.googleusercontent.com",
            secret: "NyNTCih_2mzyK1yvI4w7FRIc"
        });
    }

    var cursorServiceTwitter = Accounts.loginServiceConfiguration.findOne({"service": "twitter"});
    if(!cursorServiceTwitter){
        Accounts.loginServiceConfiguration.insert({
            service: 'twitter',
            consumerKey: "QJWrADkAVqDrjZPbaQ6A",
            secret: "QPfAmJEVtO63LnM8Skz4MFtg0IrgTAfdQtuMtc23as"
        });
    }

    var cursorServiceFacebook = Accounts.loginServiceConfiguration.findOne({"service": "facebook"});
    if(!cursorServiceFacebook){
        Accounts.loginServiceConfiguration.insert({
            service: 'facebook',
            appId: '679347035440335',
            secret: 'a62d337e67d6c941c3846205362cfdb1',
            clientId : "e68372f627dc83545241f553e98dad20",
            scope : "basic,email,user_birthday,publish_actions,user_location,age_range"
        });
    }
    //Meteor.AppCache.config({firefox: true});

    // 679347035440335
    // a62d337e67d6c941c3846205362cfdb1
    // e68372f627dc83545241f553e98dad20

    var cursorServiceInstagram = Accounts.loginServiceConfiguration.findOne({"service": "instagram"});
    if(!cursorServiceInstagram){
        //youtap
         Accounts.loginServiceConfiguration.insert({
             service: "instagram",
             clientId: "6bda8578dd0f4cc2bdfcaa225c72889e",
             secret: "bb5e315798e64bcb926d12c1519e0d62",
             scope: "basic+comments+relationships+likes"
         });
        // Accounts.loginServiceConfiguration.insert({
        //     service: "instagram",
        //     clientId: "3de8b264138e4d6cb30da526d5d44442",
        //     secret: "abb5bceda467403c97d6f125061c7398",
        //     scope: "basic+comments+relationships+likes"
        // });
        //EC2
        //Accounts.loginServiceConfiguration.insert({
        //    service: "instagram",
        //    clientId: "521e430476854546ad14f29bdcb43978",
        //    secret: "667989b6e3624eab95d5bef3e2185281",
        //    scope: "basic+comments+relationships+likes"
        //});
    }
}
app.accountsSetup = accountsSetup;

// DIFFERENT USERS
app.isTapmate = function(user){
    try{
        // console.log(user)

        if(user.services){
            if(user.services.instagram)
                return "instagram"
            else if(user.services.facebook)
                return "facebook"
            else if(user.services.google)
                return "google"
            else
                return false;
        }

        if(user.emails)
            if(user.emails[0])
                return "tapmate";

        return false;
    }
    catch(error){
        return false;
    }
}
app.getInstagram = function(id){
    if(!id)
        return {"id":null,"access":null};
    var cursorUsers = Meteor.users.findOne({"services.instagram.id":id});
    if(cursorUsers){
        if(app.isTapmate(cursorUsers) == "instagram"){
           if(cursorUsers.services.instagram){
                return {"id":id,"access":cursorUsers.services.instagram.accessToken,"user":true};
            }
        }
    }
    return {"id":id,"access":TOKEN,"user":false};
}
app.getUser = function(id){
    if(!id)
        return null;
    var cursorUsers = Meteor.users.findOne({"services.instagram.id":id});
    if(cursorUsers){
        return cursorUsers
    }
    return null;
}
// DIFFERENT USERS
function accountsAll(){
    // Meteor.users.remove({})
//     Accounts.onCreateUser(function (options, user) {
//         console.log("options")
//         console.log(options)
//         console.log("user")
//         console.log(user)
//     if (user.services) {
//         if (options.profile) {
//             user.profile = options.profile
//         }
//         var service = _.keys(user.services)[0];
//         var email = user.services[service].email;
//         if (!email) {
//             if (user.emails) {
//                 email = user.emails.address;
//             }
//         }
//         if (!email) {
//             email = options.email;
//         }
//         if (!email) {
//             // if email is not set, there is no way to link it with other accounts
//             return user;
//         }

//         // see if any existing user has this email address, otherwise create new
//         var existingUser = Meteor.users.findOne({'emails.address': email});
//         if (!existingUser) {
//             // check for email also in other services
//             var existingGitHubUser = Meteor.users.findOne({'services.github.email': email});
//             var existingGoogleUser = Meteor.users.findOne({'services.google.email': email});
//             var existingTwitterUser = Meteor.users.findOne({'services.twitter.email': email});
//             var existingFacebookUser = Meteor.users.findOne({'services.facebook.email': email});
//             var doesntExist = !existingGitHubUser && !existingGoogleUser && !existingTwitterUser && !existingFacebookUser;
//             if (doesntExist) {
//                 // return the user as it came, because there he doesn't exist in the DB yet
//                 return user;
//             } else {
//                 existingUser = existingGitHubUser || existingGoogleUser || existingTwitterUser || existingFacebookUser;
//                 if (existingUser) {
//                     if (user.emails) {
//                         // user is signing in by email, we need to set it to the existing user
//                         existingUser.emails = user.emails;
//                     }
//                 }
//             }
//         }

//         // precaution, these will exist from accounts-password if used
//         if (!existingUser.services) {
//             existingUser.services = { resume: { loginTokens: [] }};
//         }

//         // copy accross new service info
//         existingUser.services[service] = user.services[service];
//         existingUser.services.resume.loginTokens.push(
//             user.services.resume.loginTokens[0]
//         );

//         // even worse hackery
//         Meteor.users.remove({_id: existingUser._id}); // remove existing record
//         return existingUser;                  // record is re-inserted
//     }
// });
}
app.accountsAll = accountsAll;

function convertGuestToUser(previousClientId,currentClientId){
    // guestFYoE54WiRusyuPzCa
    // 487690035
    if(previousClientId && currentClientId){
         if(!previousClientId.match("guest"))
             return;
     }
     else{
         return;
     }
    var cursor = null;
        // cursor = Recommend.find({"followid":id});
        // cursor.forEach(function(data){
        //     Recommend.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        // })
        var profile_picture = null;
        var username = null;

        var user = app.getUser(currentClientId);
        if(user){
            profile_picture = user.services.instagram.picture;
            username = user.services.instagram.username;
        }
        cursor = Feed.find({"userid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"userid":currentClientId}});
        });

        cursor = Feed.find({"whoid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"whoid":currentClientId,"who":profile_picture,"whousername":username}});
        });

        cursor = Feed.find({"clientid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"followid":currentClientId,"profile_picture":profile_picture,"followusername":username}});
        });
        cursor = Feed.find({"followid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"followid":currentClientId,"profile_picture":profile_picture,"followusername":username}});
        });

        cursor = Votes.find({"followid":previousClientId});
        cursor.forEach(function(data){
            Votes.update({"_id":data._id},{$set :{"profile_picture":profile_picture,"followid":currentClientId}});
        });

        // remove my follows
        cursor = Follows.find({"userid":previousClientId});
        cursor.forEach(function(data){
            Follows.remove({"_id":data._id});
        });
        // remove other user follows
        cursor = Follows.find({"followid":previousClientId});
        cursor.forEach(function(data){
            Follows.remove({"_id":data._id});
        });
        Me.remove({"_id":previousClientId});
}
app.convertGuestToUser = convertGuestToUser;


app.fastfeed = function(options){
    return false; //depricated
    var userid = options.clientid;
    var skip = options.skip || 0;
    var feedArray = [];
    console.log("app.fastfeed skip " +skip);
    var arrayFeed = Feed.find({"clientid" : userid,"display":"n"},{"limit":100}).fetch();
    for(var i=0,il=arrayFeed.length;i<il;i++){
        if(arrayFeed[i])
        feedArray.push(arrayFeed[i].likeid);
    }
    arrayFeed = Votes.find({"clientid" : userid},{"limit":100}).fetch();
    for(var i=0,il=arrayFeed.length;i<il;i++){
        if(arrayFeed[i])
        feedArray.push(arrayFeed[i].likeid);
    }
    if(!skip || skip < 0)
        skip = 1;


    skip = skip * 5;


    var FeedArray = Feed.find({"clientid" : userid,"likeid":{$nin : feedArray}},{sort :{"type":1},skip:skip,limit:30}).fetch();

    FastFeed.find({"clientid":userid}).forEach(function(data){
        var flag = false;
        // console.log(FeedArray);
        for(var i=0,il=FeedArray.length;i<il;i++){
            if(FeedArray[i] && FeedArray[i]._id == data._id){
                delete FeedArray[i];
                flag = true;
            }
        }

        if(!flag){
            console.log("removed " +data._id);
            FastFeed.remove({"_id":data._id});
        }
    });
    for(var i=0,il=FeedArray.length;i<il;i++){
        if(FeedArray[i])
            FastFeed.insert(FeedArray[i]);
    }
    return true;
};