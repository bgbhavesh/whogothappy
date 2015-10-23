PushTips = {};
PushTips.onStart = function(){
    //return ;//depricated for now
    maileverymonth();
}
var faqsPush = [
    // "Did you know you get ranked in every Tapmate tag (or Tapmate state!) that you vote in?",
    // "Did you know you climb higher in the ranks for accurately guessing the crowds 'share' average on an image?",
    // "You can gain ranks by inviting likeminded friends to Tapmate (tags). They probably like to 'share' the same things and you are also rise in rank when they join.",
    // "Did you know each Tapmatestate has a governor, a deputy, a secretary? Get into the top 10 for a chance to hold office in that.",
    // "Did you know the Tapmate elects a president each sunday? That's right the citizen with the most points across all tags on sunday at midnight EST is elected President!",
    // "Did you know that 'tagging' images on instagram raises your rank in a Tapmate? Just type the #Tapmate into a comment and our app will find it. And of course you get points for tagging and even more when people vote it up in the Tapmate.",
    // "Tell users when they download that instrcutions come in the form of push notifications. But also have a section in the meny where you can scroll through these tip of the day type messages."
    ];
var faqsPushCount =0;
function pushUserEveryDay(){
    //return ; // depricated for now.
    for(var i=0,il=faqsPushlength+1;i<il;i++){
        faqsPush.splice(i, 1);
    }
    faqsPush.push(language.toast.push1);
    faqsPush.push(language.toast.push2);
    faqsPush.push(language.toast.push3);
    faqsPush.push(language.toast.push4);
    var message = "";
    Me.find({}).forEach(function(data){
        if(faqsPush.length<faqsPushCount)
            faqsPushCount = 0;
        message = faqsPush[faqsPushCount++];
        // console.log("Pushing message " +message)
        if(data.pushid){
            app.pushToUserHashRepublic(data.pushid,message,data.pushtype,"Hint");    
        }
            
    });
}

pushUserEveryDayWrapper =  Meteor.bindEnvironment(function(){pushUserEveryDay();});

function maileverymonth(){
    var rule = new schedule.RecurrenceRule();
    rule.month=[0, new schedule.Range(1, 11)];
    rule.hour = 2;
    rule.minute = 0;
    var j = schedule.scheduleJob(rule,pushUserEveryDayWrapper);
}
