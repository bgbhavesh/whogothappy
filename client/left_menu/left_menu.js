Template.left_menu.events({
    'click #slide_submenu': function () {
        // console.log("app.openCloseSlider")
        // app.openCloseSlider();
    },
    'click .sidebar a.item':function(){
        // console.log("item")
        // app.closeSlider();
    },
    "click #logout" : function(events){
        Meteor.logout()
    },
    "click .onRefresh": function(evt, tpl){
        app.onRefresh();
    }
});

app.Logout = function(){
    Meteor.logout()
    Router.go("login")
    location.reload();
}
app.openCloseSlider = function(){
    if($('.sidebar').hasClass('visible')){
        app.closeSlider()
    }
    else{
        app.openSlider()
    }
}
app.openSlider = function(){
    $('.sidebar').sidebar('show')
}
app.closeSlider = function(){
    $('.sidebar').sidebar('hide');
    $("body").removeClass("pushable");
}
app.onRefresh = function(){
    $(".onRefresh").addClass("animate");
    Meteor.call("touch", Meteor.userId(), function(){
        setTimeout(function(){
            $(".onRefresh").removeClass("animate");
        },1000);
    });
};
// $('.left.demo.sidebar').sidebar('toggle');

