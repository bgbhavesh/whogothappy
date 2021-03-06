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
    maxScore : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe){
            var maxScore = cursorMe.profile.maxScore;
            if(maxScore)
                return maxScore;
            else
                return 0;
        }
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
        var user = Meteor.user();
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
    "click .fa-pencil" :function(event){
        console.log("Can edit email id")
        $(event.currentTarget).removeClass("fa-pencil")
        $(event.currentTarget).addClass("fa-check")
        var target = $(event.currentTarget).parent().find("#emailEntered");
        $(target).attr("contenteditable",true)
        $(target).focus();
        $(target).select();
        var userEmail = $(target).text();
        userEmail = userEmail.trim();
        Session.set("userEmail",userEmail);

    },
    "blur #emailEntered":function(event){
        var target = $(event.currentTarget).parent().find("i");
        setTimeout( $(target).removeClass("fa-check"),100          );
        $(target).addClass("fa-pencil");
        var value = $(event.currentTarget).text();
        value = value.trim();
        // $(event.currentTarget).text("");

        if(value == "" || value == Session.get("userEmail"))
            return;
        console.log(value);
        app.updateEmailId(value);
    },
    "click #LogoutApp" : function(){
        Meteor.logout();
    },
     "click #loginScreenFacebook" : function(){
        app.loginWithFacebook();
    },
     "click #inviteEmail" : function(){
        console.log("sdjbvkjsdbkjvbkj")
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
    },
    "click .addEmailUser" : function(event){
        console.log(event)
        var currentTarget = $(event.currentTarget);
        var currentchildren = currentTarget.next()
        var emailText = $(currentchildren[1]).text()
        // if(!emailText){
            $(currentTarget).parent().append('<input type="text" id="addEmailAddress" class="large-9 small-9 medium-9 columns textRight" style="width: 70%;">');
        // }
    },
    "blur #addEmailAddress" : function(event){
        console.log("emailText")
        var currentTarget = $(event.currentTarget);
        var emailText = $(currentTarget).val()
        Meteor.users.update({"_id":Meteor.userId()},{$set : {"profile.email": emailText}});
        $("#addEmailAddress").remove();

    },
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
    var cursorMe = Meteor.user();
    var ids = app.getTextAreaEmails();
    app.showChallangeSent("You have sent invitation to:")
    if(cursorMe){
        for(var i=0,il=ids.length;i<il;i++){
            if(ids[i])
                Meteor.call("sendInvitation",ids[i],cursorMe.username,cursorMe._id,function(err,data){});
        }
    }

    // var id = Meteor.userId();
    // var challenger = Meteor.users.findOne({"_id":Meteor.userId()}).username;
    // var mailBody = 'You all are challenged to beat '+ challenger +' score \n http://whogothappy.com/#'+id+' Click here to install the application "who got happy"!';
    // var emailurl = 'mailto:tapmate@tapmate.mailgun.org?subject=You have been invited to join whogothappy&body=' + encodeURIComponent(mailBody);
    // window.open(emailurl, '_system');
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
      message: Meteor.user().username +' challenges you on whogothappy.com',
      // to : ["532514594","1797896033","100000488108267","100000440278021"] //still the browser opens in a popup.
    }, function(response){
        console.log(response);
    });
}
app.updateEmailId =function (email){
    var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (reg.test(email)){
        console.log(email);
        var update = {};
        update["profile.email"] = email ;
        Meteor.users.update({"_id":Meteor.userId()},{$set:update});
    }
    else{
        console.log("sorry")
    }
}
