app.onRegisterPushNotification = function(){
    if(!app.phonegap)
        return;
    var pushNotification = window.plugins.pushNotification;
    if (device.platform == 'android' || device.platform == 'Android') {
        pushNotification.register(app.onPushSucess, app.onPushError,{"senderID":"422665837619","ecb":"app.onNotificationGCM"});
    }
    else{
        pushNotification.register(app.onPushSucess,app.onPushError,{"badge":"true","sound":"true","alert":"true","ecb":"app.onNotificationAPN"});
    }
}
app.onPushSucess = function(result){
    app.onPushId(result)
}
app.onPushError = function(error){
}
app.onPushId = function(pushId){
    if(pushId == "OK" || pushId == "ok")
        return
    app.pushId = pushId;
    app.onSendPushId();
}
app.onSendPushId = function(){
    if(!app.phonegap)
        return;
    var pushDevice = null;
    if (device.platform == 'android' || device.platform == 'Android') {
        pushDevice = "android";
    }
    else{
        pushDevice = "ios";
    }
    if(app.pushId && Meteor.user()){
        if(!Meteor.user().profile.pushId){
            var options = {"pushId":app.pushId,"pushDevice":pushDevice};
            Meteor.call("getPushId",options,function(){});
        }
            
    }
    else{
        if(Meteor.user())
            app.onRegisterPushNotification();
    }
}
app.onSendPushIdCallback = function(err,success){
    if(err){
        app.onSendPushId();
    }
}
app.onNotificationGCM = function(e){
    switch( e.event )
    {
        case 'registered':
            if ( e.regid.length > 0 ){
                console.log("Regid " + e.regid);
                app.onPushId(e.regid);
            }
        break;

        case 'message':
            
        break;

        case 'error':
          
        break;

        default:
            console.log('An unknown GCM event has occurred');
        break;
    }
}
app.onNotificationAPN = function(event){
    var pushNotification = window.plugins.pushNotification;
        if (event.alert) {
            navigator.notification.alert(event.alert);
        }
        if (event.badge) {
            pushNotification.setApplicationIconBadgeNumber(app.onPushSucess, app.onPushError, event.badge);
        }
        if (event.sound) {
            var snd = new Media(event.sound);
            snd.play();
        }
}
