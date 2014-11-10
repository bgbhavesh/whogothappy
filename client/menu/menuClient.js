app.getTextAreaEmails = function(){
	var emails = $("#getEmails").val();
	
    if(res){
        var res = emails.split(",");
        return(res);
    }
	// var emailIdsemails;
	// for (i=0;li=res.length,i<li;i++){
	// 	emailIdsemails = res[0].split(" ");
	// }
	// console.log(emailIdsemails);
	
}

Template.menuListPanel.helpers({
    user : function(){
        // app.updateTheProfile();
        return Meteor.userId();
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
            // console.log(uname)
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
        if(cursorMe){
            return "Welcome back";
        }
        else
        return "Hi, " 
    }
})
 
 Template.menuListPanel.events({
    "click #LogoutApp" : function(){
        Meteor.logout();
    },
     "click #loginScreenFacebook" : function(){
        app.loginWithFacebook();
    },
    "click #OpenProfile" : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe){
            var uname = cursorMe.username;
            window.open("http://www.facebook.com/"+uname);
        }
    },
    "click #inviteFriends" : function(){
        return app.inviteFriends();
    }
    
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
                    if(res1[i] == "" || res1[i] == " ")
                    {}
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
        }
    }
});
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
