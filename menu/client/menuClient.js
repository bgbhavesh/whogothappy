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
        return Meteor.userId();
    },
    myusername : function(){
        var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
        if(cursorMe){
            var uname = cursorMe.username;
            // console.log(uname)
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