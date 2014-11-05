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
            console.log(list)
            return list;
        }
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
            res1 = val.split(",");
            if(res1){
                console.log(res1)
                for(var i = 0, il=res1.length;i<il;i++){
                    ids.push({
                        "ids": res1[i],
                    });
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