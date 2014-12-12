UI.registerHelper("timeago", function () {
    if(this.date)
        return $.timeago(this.date);
});
Template.menuListPanel.helpers({
    user : function(){
        // app.updateTheProfile();
        return Meteor.userId();
    },
    profile : function(){
        var user = Meteor.users.findOne({"_id":Meteor.userId()});
        if(user)
            return user.profile;
        else
            return [];
    },
    myEmail : function(){
        // app.updateTheProfile();
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe){
            var list = null;
            if(cursorMe.emails)
                list = cursorMe.emails[0].address;
            else
                list = cursorMe.email;
        }
        return list;
    },
    myusername : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe){
            var uname = cursorMe.username;
            app.updateTheProfile();
            return uname;
        }
    },
    "list" : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe){
            var list = cursorMe.profile.emailsToSend;
            return list;
        }
    },
    "welcome" : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe)
        if(cursorMe.profile){
            if(cursorMe.profile.maxScore){
                return "Welcome back ";
            }
            else
                return "Hi, " 
        }
    },
    "lastseen" : function(){
        var user = Meteor.users.findOne({"_id":Meteor.userId()});
        if(user)
            if(user.profile)
                if(user.profile.lastPlayed)
                    return $.timeago(user.profile.lastPlayed);
    },
    "first" : function(){
        if(Meteor.user() && Meteor.user().profile.alarm && Meteor.user().profile.alarm.first)
            return Meteor.user().profile.alarm.first;
        else
            return {"localtime":"09:00"};
    },
    "second" : function(){
        if(Meteor.user() && Meteor.user().profile.alarm && Meteor.user().profile.alarm.second)
            return Meteor.user().profile.alarm.second;
        else
            return {"localtime":"11:00"};
    }

    // "lang" : function(){
    //     return 
    // }
})
 
 Template.menuListPanel.events({
    "click #LogoutApp" : function(){
        Meteor.logout();
    },
     "click #loginScreenFacebook" : function(){
        app.loginWithFacebook();
    },
     "click #inviteEmail" : function(){
        app.clickOnInvMail();
    },
    "click #OpenProfile" : function(){
        if(Meteor.user()){
            window.open("https://www.facebook.com/profile.php?id=" + Meteor.user()._id);
        }
        
        // var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        // if(cursorMe){
        //     var uname = cursorMe.username;
        //     window.open("http://www.facebook.com/"+uname);
        // }
    },
    "click #inviteFriends" : function(){
        return app.inviteFriends();
    },
    "click .Challange h5" : function(){
        var disp = $("#inviteFriends").css("display");
        if(disp == "none"){
            $(".Challange label").css("display","block");
            $("#inviteFriends").css("display","block");            
        }
        else{
            $(".Challange label").css("display","none");
            $("#inviteFriends").css("display","none");               
        }
    },
    "click .alarmHead" : function(){
        var disp = $(".alarmBody").css("display");
        if(disp == "none"){
            $(".alarmBody").css("display","block");
            $(".alarmFoot").css("display","block");            
        }
        else{
            $(".alarmBody").css("display","none");
            $(".alarmFoot").css("display","none");               
        }
    },
    "click .lastScore h5" : function(){
        var disp = $(".lastScore label").css("display");
        if(disp == "none"){
            $(".lastScore label").css("display","block");
            // $("#inviteFriends").css("display","block");            
        }
        else{
            $(".lastScore label").css("display","none");
            // $("#inviteFriends").css("display","none");               
        }
    },
    "click #welcome" : function(){
        var disp = $(".welcome").css("display");
        if(disp == "none"){
            $(".welcome").css("display","block");
            // $("#inviteFriends").css("display","block");            
        }
        else{
            $(".welcome").css("display","none");
            // $("#inviteFriends").css("display","none");               
        }
    },
    "change #firstAlarm" : function(event){
        var firstAlarm = $("#firstAlarm").val();      
        app.set("firstAlarm",firstAlarm);
        app.setAlarm(firstAlarm,"first");
    },
    "change #secondAlarm" : function(event){
        var secondAlarm = $("#secondAlarm").val();        
        app.set("secondAlarm",secondAlarm);
        app.setAlarm(secondAlarm,"second");
    }
    // ,
    // "click #setAlarm" : function(){
    //     // var firstAlarm = $("#firstAlarm").val();
    //     // var secondAlarm = $("#secondAlarm").val();
        
        
    // }
});

Template.menuListPanel.events({
    'blur #getEmails': function (e) {
        var res1 = {};
        var ids = [];
        var val = e.currentTarget.value 
        // console.log(val);
        if(val)
        {
            val = val.replace(/\s/g, "");
            res1 = val.split(",");
            if(res1){
                console.log(res1)
                for(var i = 0, il=res1.length;i<il;i++){
                    // console.log(res1[i])
                
                    var atpos = res1[i].indexOf("@");
                    var dotpos = res1[i].lastIndexOf(".");
                    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=res1[i].length) {
                        // alert("Not a valid e-mail address");
                        // return false;
                    }
                    else{
                        ids.push({
                            "ids": res1[i]
                        });
                    }
                   
                }
                Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.emailsToSend":ids}});
                // var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
                // if(cursorMe){
                //     console.log(cursorMe.profile.emailsToSend)  
                // }
            }
        }else{
            Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.emailsToSend":""}});
        }
    }
});


app.clickOnInvMail = function() {
    var id = Meteor.userId();
    var challenger = Meteor.users.findOne({"_id":Meteor.userId()}).username;
    var mailBody = 'You all are challenged to beat '+ challenger +' score \n http://whogothappy.com/#'+id+' Click here to install the application "who got happy"!';
    var emailurl = 'mailto:tapmate@tapmate.mailgun.org?subject=You have been invited to join whogothappy&body=' + encodeURIComponent(mailBody);
    window.open(emailurl, '_system');
}
// $("#getEmails").keyup(function(event) {
//     //     var val = $(this).val();
//     //     if (val != convertEmail(val))
//     //         $(this).val(val);
//     //     if (event.keyCode == 13) {
//     //         $("#sePassLogin").focus()
//     //     }
//     // });
    
// });

app.inviteFriends = function(){
    setTimeout(function(){
        console.log("called");
        $("iframe").width($(window).width());
    },1000);
    return FB.ui({method: 'apprequests',
      message: Meteor.user().username +' chanllenges you on sixteensmiles',
      // to : ["532514594","1797896033","100000488108267","100000440278021"] //still the browser opens in a popup.
    }, function(response){
        console.log(response);
    });
}
