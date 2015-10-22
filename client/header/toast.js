function showNotification() {
    // console.log("see notification");
    $(".appname").css("display", "none");
    $("#toastArea").css("display", "block");
    $(".allNotify").css("display", "block");
    // app.onClickNotify();
}
function showHeaderSection() {
    // console.log("see Header");

    $("#toastArea").css("display", "none");
    $(".allNotify").css("display", "none");
    $("#header").css("display", "block");
    $("#toastArea").css("display", "none");
    $(".appname").css("display", "block");

}
app.showHeaderSection = showHeaderSection;
var headerShow = true;
app.toggelHeader = function() {

    if (headerShow) {
        // app.backToStart();
        showNotification();
    } else
        showHeaderSection()

    headerShow = !headerShow;
}
Template.oneNotify.helpers({
    eachNotify : function(){
        return Toast.find({"clientid":Meteor.userId()},{sort : {"time": -1},limit:15});
    },
});
// Template.oneNotify.eachNotify = function() {
//     return Toast.find({"clientid":Meteor.userId()},{sort : {"time": -1},limit:15});
// }
Template.oneNotify.events({
    "click .notify" : function(){
        Session.set("currentBig",this.likeid);
        console.log(this)
        app.openBig();
    }
});

// Template.oneNotify.events({

// });



/*Router.go("/homepage");*/