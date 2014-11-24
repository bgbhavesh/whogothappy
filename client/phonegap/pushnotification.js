app.onRegisterPushNotification = function(){
    var starttime = new Date().getTime();
    log("app.onRegisterPushNotification started",null,arguments,1);
    if(!app.phonegap)
        return;
    var pushNotification = window.plugins.pushNotification;
    if (device.platform == 'android' || device.platform == 'Android') {
        pushNotification.register(app.onPushSucess, app.onPushError,{"senderID":"422665837619","ecb":"app.onNotificationGCM"});
    }
    else{
        pushNotification.register(app.onPushSucess,app.onPushError,{"badge":"true","sound":"true","alert":"true","ecb":"app.onNotificationAPN"});
    }
    log("app.onRegisterPushNotification ended",new Date().getTime() - starttime,arguments,1);
}
app.onPushSucess = function(result){
    var starttime = new Date().getTime();
    log("app.onPushSucess started",null,arguments,1);
    app.onPushId(result)
    log("app.onPushSucess ended",new Date().getTime() - starttime,arguments,1);
}
app.onPushError = function(error){
    var starttime = new Date().getTime();
    log("app.onPushError started",null,arguments,1);
    log("app.onPushError ended",new Date().getTime() - starttime,arguments,1);
}
app.onPushId = function(pushId){
    var starttime = new Date().getTime();
    log("app.onPushId started",null,arguments,1);
    if(pushId == "OK" || pushId == "ok")
        return;
    console.log(app.pushId);
    app.pushId = pushId;
    app.onSendPushId(); 
    log("app.onPushId ended",new Date().getTime() - starttime,arguments,1);
}
app.onSendPushId = function(){
    var starttime = new Date().getTime();
    log("app.onSendPushId started",null,arguments,1);
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
    log("app.onSendPushId ended",new Date().getTime() - starttime,arguments,1);
}
app.onSendPushIdCallback = function(err,success){
    var starttime = new Date().getTime();
    log("app.onSendPushIdCallback started",null,arguments,1);
    if(err){
        app.onSendPushId();
    } 
    log("app.onSendPushIdCallback ended",new Date().getTime() - starttime,arguments,1);
}
app.onNotificationGCM = function(e){
    var starttime = new Date().getTime();
    log("app.onNotificationGCM started",null,arguments,1);
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
    log("app.onNotificationGCM ended",new Date().getTime() - starttime,arguments,1);
}
app.onNotificationAPN = function(event){
    var starttime = new Date().getTime();
    log("app.onNotificationAPN started",null,arguments,1);
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
    log("app.onNotificationAPN ended",new Date().getTime() - starttime,arguments,1);
}
