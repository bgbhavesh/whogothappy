app = {};
collection = {};
collection.Log = new Meteor.Collection("logs");
if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000") || Meteor.absoluteUrl.defaultOptions.rootUrl.match("192.168.")){
  app.debug = true;
}
else{
  app.debug = false;
}
  log = function(message,endtime,args,level){
    if(app.debug){
      if( (level && level < 1) || (level == 0) ){
        var logs = console.log.bind(console);
        logs(message);
      }
      return;
    }

  // for(var i=0,il=arguments.length;i<il;i++){
  //  if(typeof arguments[i] == "object"){
  //    if(app.isJsonString(arguments[i])){
  //      string = JSON.stringify(arguments[i]);
  //    }
  //    else{
  //      if(arguments[i].toString() == "[object Object]")
  //        string = arguments[i];
  //      else
  //        string = arguments[i].toString();
  //    }
  //  }
  //  else{
  //    // console.log(arguments[0])
  //    // console.log(arguments[1])
  //    string = arguments[0];
  //    level = arguments[1];
  //  }

  // }
  var insert = {"log":message,"date": new Date().getTime()};
  insert.level = level||1;
  insert.args = args;
  insert.endtime = endtime;
  if(Meteor.isClient)
    insert.side = "client";
  else if(Meteor.isCordova)
    insert.side = "cordova";
  else
    insert.side = "server";
  try{insert.userId = Meteor.userId();}catch(err){}

  collection.Log.insert(insert);

  // var coll = collection.Log.find();
  // console.log(coll.count())
}
  // will think of this later
app.isJsonString = function (str) {
  // var setTime = new Date().getTime();
 //    log("isJsonString " +setTime,1);
    try {
        JSON.parse(str);
        // log("isJsonString " +(new Date().getTime() - setTime),1);
    } catch (e) {
        return false;
    }
    return true;
}

app.get = function(key){
  var value = window.localStorage.getItem(key);
  if(app.isJsonString(value)){
    return JSON.parse(value);
  }
  else{
    return value;
  }
}
app.set = function(key,value){
  if(typeof value == "object"){
    value = JSON.stringify(value);
  }
  return window.localStorage.setItem(key,value);
}

app.visualEffect = function(id,effect){
  $("#" +id).children("i").remove();
  var html = $("#" +id).html();
  $("#" +id).html(html +effect);
}

app.scope = {};

app.onLoad = '<i class="loading icon"></i>';
app.onError = '<i class="remove sign icon"></i>';
app.onSuccess = '<i class="ok circle icon"></i>';


app.lang = {"_id":"lang_en","alarm":{"head":"Two Alarms","foot":"Think of two times in your day when your usually \"in between\" like on the bus or right before work. Set these two alarms to help you stick to two sessions a day. You get double points if you start less than 15 min before alarm rings!","set":"Set"},"alarmBox":{"title":"Beat the alarms! ","ingress":""},"app":{"appName":"WhoGotHappy","loginBox":"Login with Facebook to unlock more features "},"carousel":{"page1Title":"Who Got Happy?","page2Title":"Carousel Second Page Title","page3Title":"Carousel Third Page Title","page4Title":"a dose of science! ","page1Body":"Carousel First Page Body","page2Body":"Carousel Second Page Body","page3Body":"Carousel Third Page Body","page4Body":"it's not all fun and games! there's some science here too. Check out how you can train your face perception. "},"createdAt":1421652276942,"email":{"head":"Challenge Someone!","msg1":"To invite and share.","msg2":"Invite Friends","shareFacebookText":"Tap here to share your results on facebook!","challangeSubject":"userChallanger+\" challanges you to WhoGotHappy.com! \"","challangeBody":"\"Brighten your day and see smiles everywhere by accpeting this challange.\"+ \"</br>\"+challangeLink"},"feedback":{"header":"Feedback","title":"Give feedback","submit":"Submit","cancel":"Cancel"},"game":{"time":"111","encourageAccuracy":"Good! Fast and accurate counts."},"gamePopUp":{"restart":"Restart","close":"Close","Start":"Start","mgs1":"Tap the happiest, most pleasant, most joyful face in the bunch →!","appUpdated":"\"Auto updateed 4 hours ago\""},"language":{"languages":"af, ach, ak, am, ar, az, be, bem, bg, bh, bn, br, bs, ca, chr, ckb, co, crs, cs, cy, da, de, ee, el, en, eo, es, es-419, et, eu, fa, fi, fo, fr, fy, ga, gaa, gd, gl, gn, gu, ha, haw, hi, hr, ht, hu, hy, ia, id, ig, is, it, iw, ja, jw, ka, kg, kk, km, kn, ko, kri, ku, ky, la, lg, ln, lo, loz, lt, lua, lv, mfe, mg, mi, mk, ml, mn, mo, mr, ms, mt, ne, nl, nn, no, nso, ny, nyn, oc, om, or, pa, pcm, pl, ps, pt-BR, pt-PT, qu, rm, rn, ro, ru, rw, sd, sh, si, sk, sl, sn, so, sq, sr, sr-ME, st, su, sv, sw, ta, te, tg, th, ti, tk, tl, tn, to, tr, tt, tum, tw, ug, uk, ur, uz, vi, wo, xh, xx-bork, xx-elmer, xx-hacker, xx-klingon, xx-pirate, yi, yo, zh-CN, zh-TW, zu"},"lastupdate":1421654029794,"menu":{"menu":"Menu","home":"Home","users":"Users","admin":"Admin","fbLogin":"Sign in with Facebook","logout":"Not you?"},"modifiedAt":1421654031221,"placeholder":{"dogName":"Dog's name","dogBreed":"Dog's breed","dogOwner":"Dog's owner","myComment":"My comments"},"scorebord":{"notyou":"Not you?","days":"Days in a Row","seen":"Last Seen","mxscore":"Max Score","email":"Email"},"scoretitle":{"attemted":"Attempted","lastscore":"Last score","missed":"Missed"},"setting":{"fbkey":"800536849992080","imgSerKey":"13121321321321","pushTitle":"Diggadog action alert","pushDescription":"Push description","pushMessage":"App.settings.pushDogname+\"checked in at \"+app.settings.pushLocname\"+\"app.settings.pushdistance\"+ \"Leaving in\"+\"app.settings.PushLeavingIn","pushWelcome":"Welcome to the secret dog society! Diggadog revolutionizes dog meetings!","pushRange":"10000","useRange":"TRUE","checkinsPerMap":"20"},"settings":{"bonus":"50","gameLast":"10","showSmileyMax":"1000","showSmileyMin":"2000","tranisionWaitMin":"2000","tranisionWaitMax":"2500","lateClick":"3500","sixteenHeightPercentage":"40","sixteenScorePerHit":"10","sixteenScorePerLateHit":"5","sixteenTimeMultiplier":"5","showSmiley":"500"},"table":{"week":"Last","col1":"AM","col2":"PM","d0":"S","d1":"M","d2":"T","d3":"W","d4":"T","d5":"F","d6":"S"},"time":{"alarmPushTitle":"ring a ding! rise and smile! ","alarmPushBody":"Got ya! Start the game within 5 min to get 1.5x the points."},"timer":{"game":"This Game","score":"Score","time":"Time"},"title":{"htmlTitle":"Who Got Happy?"}};