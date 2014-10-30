Template.home.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
    
    // 'click .move-left': function (e){
    //     $(".move-left").removeClass('move-left')                    
    // },
    // 'click .move-right': function (e){
    //     $(".move-right").removeClass('move-right')                    
    // },
    // 'click .left-off-canvas-toggle': function (e){
    //     $(".off-canvas-wrap").addClass('move-right')                    
    // },
    // 'click .right-off-canvas-toggle': function (e){
    //    $(".off-canvas-wrap").addClass('move-left')      
    // },
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

Template.home.place = function(){
	// Session.get("reactivePlace");
	// return app.places;
}

Template.home.helpers({
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
