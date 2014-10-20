app.onRegisterPushNotification = function(){
    var startTime = new Date().getTime();
    log("onRegisterPushNotification " +startTime,1);
    if(!app.phonegap)
        return;
    var pushNotification = window.plugins.pushNotification;
    if (device.platform == 'android' || device.platform == 'Android') {
        pushNotification.register(app.onPushSucess, app.onPushError,{"senderID":"422665837619","ecb":"app.onNotificationGCM"});
    }
    else{
        pushNotification.register(app.onPushSucess,app.onPushError,{"badge":"true","sound":"true","alert":"true","ecb":"app.onNotificationAPN"});
    }
    log("onRegisterPushNotification " +(new Date().getTime() - startTime),1);
}
app.onPushSucess = function(result){
    var startTime = new Date().getTime();
    log("onPushSucess " +startTime,1);
    app.onPushId(result)
    log("onPushSucess " +(new Date().getTime() - startTime),1);
}
app.onPushError = function(error){
    var startTime = new Date().getTime();
    log("onPushError " +startTime,1);
    log("onPushError " +(new Date().getTime() - startTime),1);
}
app.onPushId = function(pushId){
    var startTime = new Date().getTime();
    log("onPushId " +startTime,1);
    if(pushId == "OK" || pushId == "ok")
        return
    app.pushId = pushId;
    app.onSendPushId();
    log("onPushId " +(new Date().getTime() - startTime),1);
}
app.onSendPushId = function(){
    var startTime = new Date().getTime();
    log("onSendPushId " +startTime,1);
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
    log("onSendPushId " +(new Date().getTime() - startTime),1);
}
app.onSendPushIdCallback = function(err,success){
    var startTime = new Date().getTime();
    log("onSendPushIdCallback " +startTime,1);
    if(err){
        app.onSendPushId();
    }
    log("onSendPushIdCallback " +(new Date().getTime() - startTime),1);
}
app.onNotificationGCM = function(e){
    var startTime = new Date().getTime();
    log("onNotificationGCM " +startTime,1);
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
    log("onNotificationGCM " +(new Date().getTime() - startTime),1);
}
app.onNotificationAPN = function(event){
    var startTime = new Date().getTime();
    log("onNotificationAPN " +startTime,1);
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
    log("onNotificationAPN " +(new Date().getTime() - startTime),1);
}
