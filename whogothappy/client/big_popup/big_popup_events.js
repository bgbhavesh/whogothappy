app.onTapBig = function(opt){
  app.onSetup(opt);
  app.onVote(opt);
  app.onMarkAsRead(opt);
  app.onRecommend(opt);
}
app.onRecommend = function(opt){
  if (opt.vote){
    cursorFollow = app.fetchARecommend();
    if(!cursorFollow){
      console.log("all recommend are over");
      return;
    }
    var insert = {
      "_id": Random.id(),
      "type": "r",
      "display": "y",
      "followusername": cursorFollow.username,
      "profile_picture": cursorFollow.profile_picture,
      "followid": cursorFollow.followid,
      "likeid": app.routeParam("imageId"),
      "who": Meteor.user().getPicture(),
      "whoid": Meteor.userId(),
      "whousername": Meteor.user().getName(),
      "low": opt.low /* ,"height":"50px","width":"50px","position":"absolute"*/ ,
      "left": opt.left,
      "top": opt.top,
      "notification": false,
      "seennotify": true,
      "tapnotify": true,
      "date": new Date().getTime(),
      "distance": 0,
      "checked": false,
      "tracker" : {"start":app.getUTCDate()}
    };

    insert.clientid = cursorFollow.followid;
    insert.source = "recommend";
    insert.type = 1;
    insert.checked = false;
    var feedId = Feed.insert(insert);
    Meteor.call("updateRecommend", insert._id, cursorFollow.followid);
  }
}
app.fetchARecommend = function(){
  var activeLOPArray = [];
  var cursorLOP = Feed.find({"likeid": app.routeParam("imageId"),"whoid" : Meteor.userId()});
  var cursorVotes = Votes.find({"likeid": app.routeParam("imageId")});
  cursorVotes.forEach(function(data){
    activeLOPArray.push(data.followid);
  });

  cursorLOP.forEach(function(data){
    activeLOPArray.push(data.followid);
  });
  query = {"userid":Meteor.userId(),"followid":{$nin: activeLOPArray}},{sort : {"date":-1}};
  return Follows.findOne(query,{sort : {"date":-1}});
}
app.onVote = function(opt){
  opt.vote = Votes.findOne({
    "followid": Meteor.userId(),
    "likeid": app.routeParam("imageId")
  });
  if (!opt.vote){
    var voteInsert = {
      "checked": false,
      // "place": quadrantPlace,
      "profile_picture": Meteor.user().getPicture(),
      "followid": Meteor.userId(),
      "likeid": app.routeParam("imageId"),
      "low": opt.low,
      "left": opt.left,
      "top": opt.top
    };
    Votes.insert(voteInsert);
    app.onShowBar(opt);
  }
}
app.onSetup = function(opt){
  opt.elm = opt.evt.currentTarget;
  opt.x = opt.evt.pageX - $(opt.elm).offset().left;
  opt.y = opt.evt.pageY - $(opt.elm).offset().top - $(document).scrollTop();
  opt.height = $(opt.elm).height();
  opt.width = $(opt.elm).width();

  // converting in %
  opt.left = (opt.x / opt.width) * 100;
  opt.top = (opt.y / opt.height) * 100;

  // positioning it in thumb center
  opt.left = Math.round(opt.left) - 5;
  opt.top = Math.round(opt.top) - 5;

  opt.low = $(opt.elm).attr("src"); //.children("img")
  // opt.bigheight = $(opt.elm).height();
  // opt.bigtop = (opt.y / opt.bigheight) * 100;
  // opt.bigtop = Math.round(opt.bigtop) - 20;
  // alert(opt.left);
  // alert(opt.top);
  // alert(opt.width);
  // alert(opt.height);
}
app.onShowBar = function(opt){

  $(".progressLove").text((100 - opt.top)+"%");
  $(".progressShare").text(opt.left+"%");
  $(".progressBar")
    .show()
    .transition('jiggle');
  setTimeout(function(){$(".progressBar").hide();}, 5000);
  // var ele = $(".progressBar")[0];
  // for(var i=100,il=0;i>il;i-=2){
  //   ele.style["-webkit-transform"] = "translate3d(-" +i+"px, " +(100 -i)+"px, 0px)";
  //   ele.style["-moz-transform"] = "translate3d(-" +i+"px, " +(100 -i)+"px, 0px)";
  //   ele.style["transform"] = "translate3d(-" +i+"px, " +(100 -i)+"px, 0px)";
  // }
  // $(".progressBar")
  //   .css({"left": "0%", "top": "100%", "display": "block"})
  //   .animate({"left": "50%", "top": "35%"}, 2000, function(){
  //     setTimeout(function(){$(".progressBar").hide("slow");}, 4000);
  //   });
}
// app.onSendPush = function(){
//   var messageNotify = Meteor.user().getName() + " has sent you a picture";
//   TapmateNotification.insert({
//     "senderid": cursorFollow.followid,
//     "message": messageNotify,
//     "notify": false,
//     "low": insert.low,
//     "likeid": insert.likeid
//   });
// }
// function tapOnBigFeedInterval(event, localDiv1, voteInsert) {
//     var starttimer = new Date().getTime();
//         var difference = {}
//         difference.clientX = app.swipe.start.clientX - event.clientX;
//         difference.clientY = app.swipe.start.clientY - event.clientY;
//         if(Math.abs(difference.clientX) > 50 || Math.abs(difference.clientY) > 50){
//             if(difference.clientX > 0)
//                 app.swipeLeft();
//             else
//                 app.swipeRight();
//             return;
//         }
//         if((new Date().getTime() - app.swipe.start.time) > 600){
//             app.tapToComment(event)
//             return;
//         }
//         var localDiv = event.currentTarget;
//         VoteStart = new Date().getTime();
//         var x = event.pageX;
//         var y = event.pageY;
//         var height = $("#wrapperSec").height();
//         var width = $("#wrapperSec").width();
//         var bigheight = $("#quadrant").height();
//         var left = (x / width) * 100;
//         var top = (y / height) * 100;
//         var bigtop = (y / bigheight) * 100;
//         left = Math.round(left) - 5;
//         top = Math.round(top) - 5;
//         bigtop = Math.round(bigtop) - 20;
//         var activeFollowsId = Session.get("activeFollows");
//         var currentBig = Session.get("currentBig");
//         var actionFollow = Session.get("actionFollow");
//         var currentElement = localDiv;
//         var voteFlag = true;
//         var profilePic = null;
//         var quadrantPlace = checkQuadrant(left, top, false);
//         if (actionFollow) {
//           app.updateMyMove(actionFollow,x -20 ,y -20);
//           return;
//         }
//         var groupType = FollowsGroup.findOne({
//             "_id": activeFollowsId
//         });
//         if (groupType) {
//           groupVoteRecommend(groupType, left, top);
//           activeFollowsId = Meteor.userId();

//         }
//         if(Number(Meteor.userId()) < 0) {
//           toast("Please login with Instagram to use the app.");
//         }
//         if (currentBig && activeFollowsId) {


//             var cursorBig = null;
//             var cursorMine = null;
//             var cursorMe = null,
//                 cursorFollow = null;
//             cursorBig = cursorparser();
//             if (!cursorBig)
//                 return;

//             cursorFollow = Follows.findOne({
//                 "followid": activeFollowsId
//             });
//             if(!cursorFollow)
//                 return;

//             if (!Votes.findOne({
//                 "followid": Meteor.userId(),
//                 "likeid": currentBig
//             })) {
//                 activeFollowsId = Meteor.userId();
//                 cursorFollow = Follows.findOne({
//                     "followid": activeFollowsId
//                 });
//                 progress1(left, $('#hprogressBar'), bigtop, $('#outer'));
//                 voteFlag = false;
//                 var date = new Date().getTime();
//                 if (!cursorFollow)
//                     cursorFollow = {};
//                 if (voteInsert) {
//                     cursorFollow = voteInsert;
//                     cursorBig = voteInsert;
//                 }
//                 profilePic = cursorFollow.profile_picture;

//                 var VotesInsert = {
//                     "checked": false,
//                     "place": quadrantPlace,
//                     "profile_picture": cursorFollow.profile_picture,
//                     "followid": Meteor.userId(),
//                     "likeid": cursorBig.likeid,
//                     "low": cursorBig.low,
//                     "left": left,
//                     "top": top
//                 };
//                 actionArray.push(activeFollowsId);


//                 currentMoveVote = Votes.insert(VotesInsert);
//                 flagVoteorRec = false;
//                 checkQuadrant(left, top, true);
//                 currentMoveRecc = null;
//                 var loud = left + (100 - top);
//                 MediaCollection.update({
//                     "_id": VotesInsert.likeid
//                 }, {
//                     $inc: {
//                         "loud": loud,
//                         "vote": 1
//                     }
//                 });

//                 delete cursorBig.date;
//                 updateCursor(cursorBig);

//             }
//             if (voteFlag || groupType) {
//                 var cursorVotes = Votes.findOne({
//                     "followid": Meteor.userId(),
//                     "likeid": currentBig
//                 });
//                 if (cursorVotes || groupType) {
//                     var loopRecommend = [];
//                     if (!groupType) {
//                         loopRecommend.push(activeFollowsId);
//                     } else {
//                         loopRecommend = groupType.follows;
//                     }
//                     for (var i = 0, il = loopRecommend.length; i < il; i++) {
//                         activeFollowsId = loopRecommend[i];
//                         cursorFollow = Follows.findOne({
//                             "followid": activeFollowsId
//                         });
//                         if(!cursorFollow)
//                             return;
//                         if (Number(activeFollowsId) < 0) {
//                             console.log("it's a guest user");
//                             cursorFollow = {
//                                 "username": "guest",
//                                 "profile_picture": "images/face.jpg",
//                                 "followid": "" + activeFollowsId
//                             };
//                         }
//                         if (cursorFollow) {
//                             var mydata = Me.findOne({
//                                 "_id": Meteor.userId()
//                             });
//                             if(mydata.face == "undefined"){
//                                 mydata.face = "./face/face2.png"
//                             }
//                             var username = null;
//                             if (mydata)
//                             {
//                                 if(mydata.instagramUsername){
//                                     username = mydata.instagramUsername;
//                                 }else if(mydata.facebookName){
//                                     username = mydata.facebookName;
//                                 }else if(mydata.username){
//                                     username = mydata.username;
//                                 }
//                             }
//                             var insert = {
//                                 "type": "r",
//                                 "display": "y",
//                                 "followusername": cursorFollow.username,
//                                 "profile_picture": cursorFollow.profile_picture,
//                                 "followid": cursorFollow.followid,
//                                 "likeid": cursorBig.likeid,
//                                 "who": mydata.face,
//                                 "whoid": Meteor.userId(),
//                                 "whousername": username,
//                                 "low": cursorBig.low /* ,"height":"50px","width":"50px","position":"absolute"*/ ,
//                                 "left": left,
//                                 "top": top,
//                                 "notification": false,
//                                 "seennotify": true,
//                                 "tapnotify": true,
//                                 "date": new Date().getTime(),
//                                 "distance": 0,
//                                 "checked": false,
//                                 "tracker" : {"start":app.getUTCDate()}
//                             };
//                             if (cursorFollow.username)
//                                 Session.set("FollowsUsername", cursorFollow.username);
//                             else
//                                 Session.set("FollowsUsername", cursorFollow.followid);

//                             insert.clientid = cursorFollow.followid;
//                             insert.source = "recommend";
//                             insert.type = 1;
//                             insert.checked = false;
//                             var fbmgs = "will @" + Session.get("FollowsUsername") + " like and share this sentiment?";


//                             actionArray.push(activeFollowsId);
//                             app.shareVideo(insert)
//                             currentMoveRecc = app.insertFeed(insert); //Feed.insert(insert);
//                             flagVoteorRec = true;

//                             app.shareWithFacebook(cursorBig.low, fbmgs);

//                             MediaCollection.update({
//                                 "_id": insert.likeid
//                             }, {
//                                 $inc: {
//                                     "recomend": 1
//                                 }
//                             });

//                             var messageNotify = username + " " + app.lang.faceTap.hassendpicture;
//                             TapmateNotification.insert({
//                                 "senderid": cursorFollow.followid,
//                                 "message": messageNotify,
//                                 "notify": false,
//                                 "low": insert.low,
//                                 "likeid": insert.likeid
//                             });
//                             progress1(left, $('#hprogressBar'), bigtop, $('#outer'));
//                             Follows.update({
//                                 "_id": cursorFollow._id
//                             }, {
//                                 $inc: {
//                                     "hits": 1
//                                 }
//                             });

//                             if (groupType) {}
//                             else {
//                                 var tstmgs = app.lang.faceTap.youRecommendPic1 +" "+ cursorFollow.username +" "+ app.lang.faceTap.youRecommendPic2;
//                                 toast(tstmgs);
//                             }
//                             var cursorFollow = Follows.findOne({
//                                 "followid": Meteor.userId()
//                             })
//                             if (cursorFollow)
//                                 Follows.update({
//                                     "_id": cursorFollow._id
//                                 }, {
//                                     $inc: {
//                                         "hits": 2
//                                     }
//                                 });

//                         }
//                     }
//                 }
//             }
//             Session.set("activeFollows", null);
//         }
// }