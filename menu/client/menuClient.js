app.getTextAreaEmails = function(){
	var emails = $("#getEmails").val();
	var res = emails.split(",");
	// var emailIdsemails;
	// for (i=0;li=res.length,i<li;i++){
	// 	emailIdsemails = res[0].split(" ");
	// }
	// console.log(emailIdsemails);
	return(res);
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
    'keyup #getEmails': function () {
        var val = $(this).val();
        console.log(event.keyCode+val)
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