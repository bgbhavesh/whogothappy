Template.header.helpers({
    counter: function () {
        return Session.get('header');
    },
    setLaunchButton:function(){
        var head = Session.get('header');
        if(head == "Party Play"){
            return 'content'
        }
        else if(head == "Event Details" || head == "People Accepted" || head == "Report" || head == "Profile " || head == "Report list" || head == "Edit Event Details"){
            return 'arrow left'
        }
        else if(head == "Settings"){
            return 'arrow left'
        }
        else
            return 'content';
    }
});
Template.header.rendered = function(){
    $('.ui.sidebar').sidebar('hide');
}


Template.header.events({
    'click #slide_submenu.content': function () {
        app.openCloseSlider();
    },
    'click #left_slide_submenu': function () {
        app.left_slide_menu();
    },
    'click #right_slide_submenu': function () {
        app.right_slide_menu();
    },
    'click #slide_submenu.arrow': function () {
        window.history.back();
        // app.openCloseSlider();
    },
    'click .pusher.dimmed': function () {
        $('.ui.sidebar').sidebar('hide');
        // Router.go("settings")
    }

});
app.left_slide_menu = function(){
    $('.ui.sidebar.left').sidebar("show")
}
app.right_slide_menu = function(){
    $('.ui.sidebar.right').sidebar("show")
}
app.backToStart = function() {
    app.onClickClearCanvas();
    app.commentOneVote();
    app.closeFollows();
    // onClickAtButton();
    closeOverlay();
    app.showHeaderSection();
    app.CloseSnapLeft(); //app.snapLeftFlag=false;
    $("#shareOnFacebookPopUp").hide();
    $("#shareOnFacebookPopUpBackground").hide();
    // Router.go("/home");
}
Template.header.events({
    "click #snapButton" : function(){
        app.openCloseSnapLeft();
    },
    "click .appname" : function(){
        // app.closeOverlay();
        app.closeFollows();
        app.toggelHeader();
    },
    "click #toastArea" : function(){
        app.toggelHeader();
    },
    "click .allNotify" : function(){
        app.toggelHeader();
    },
    // "click .allNotify" : function(){
    //     app.toggelHeader();
    // }
});

function toggleMenuLogo(){
    if(app.droplogoShow){
            $(".droplogo").show();
            app.droplogoShow = 0;
            setTimeout(toggleMenuLogo,10000);
        }
        else{
            $(".droplogo").hide();
            app.droplogoShow = 1;
        }
}
app.openCloseSnapLeft=function (){
     if(app.snapLeftFlag)
        app.CloseSnapLeft();
    else
        app.openSnapLeft();

    app.snapLeftFlag = !app.snapLeftFlag;
}

app.snapLeftFlag = false;

app.CloseSnapLeft = function (){
    setTimeout(function(){Router.go("/home");},100);
}
app.openSnapLeft = function(){
    setTimeout(function(){Router.go("/menuSlider")},100);
}