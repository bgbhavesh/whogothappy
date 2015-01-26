var curYPos = 0,
    curXPos = 0,
    curDown = false;
Template.home.events({
    // 'click .clickEvent': function () {
    // 	Session.set("placeId",null);
    // 	Session.set("placeId",this.place_id);
    // 	Session.set("placeName",this.name);
    // }

    'mousedown': function (e) {
        curDown = true;
        curYPos = e.clientY;
        curXPos = e.clientX;
        // console.log(e);
    },
    'mousemove': function (e) {
        if (curDown === true) {
            var p = $(".scrolly")
            $(".scrolly").scrollTop = (curYPos + e.clientY);
            // console.log(e.currentTarget);
        }
    },
    'mouseup': function (e) {
        curDown = false;
    },

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
    // "click #LogoutApp" : function(){
    //     Meteor.logout();
    // },
    //  "click #loginScreenFacebook" : function(){
    //     app.loginWithFacebook();
    // },
    // "click #OpenProfile" : function(){
    //     var cursorMe = Meteor.users.findOne({"_id":Meteor.userId()});
    //     if(cursorMe){
    //         var uname = cursorMe.username;
    //         window.open("http://www.facebook.com/"+uname);
    //     }
    // }

});
app.updateTitle = function () {
    document.title = app.lang.title.htmlTitle;
}
Template.home.rendered = app.updateTitle;

Template.home.place = function () {
    // Session.get("reactivePlace");
    // return app.places;
}
Template.home.helpers({
    user: function () {
        return Meteor.userId();
    },
    myusername: function () {
        var cursorMe = Meteor.users.findOne({"_id": Meteor.userId()});
        if (cursorMe) {
            var uname = cursorMe.username;
            // console.log(uname)
            return uname;
        }
    }
})
