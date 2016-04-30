App.info({
    id: 'com.youiest.whogothappy',
    name: 'Who Got Happy',
    description: 'Get the right happy face!',
    author: 'Youiest LLC',
    email: 'elias@youiest.com',
    website: 'http://whogothappy.com'
});

App.icons({
    iphone_2x: "../assets/ios_icon/icon-602x.png",
    iphone_3x: "../assets/ios_icon/icon-603x.png",
    ipad: "../assets/ios_icon/icon-76.png",
    ipad_2x: "../assets/ios_icon/icon-762x.png",
    ipad_pro: "../assets/ios_icon/icon-8352x.png",
    ios_settings: "../assets/ios_icon/icon-small.png",
    ios_settings_2x: "../assets/ios_icon/icon-small2x.png",
    ios_settings_3x: "../assets/ios_icon/icon-small3x.png",
    ios_spotlight: "../assets/ios_icon/icon-40.png",
    ios_spotlight_2x: "../assets/ios_icon/icon-402x.png",

    // android_ldpi: '../assets/android_icon/android_ldpi.png',
    android_mdpi: "../assets/android_icon/android_mdpi.png",
    android_hdpi: "../assets/android_icon/android_hdpi.png",
    android_xhdpi: "../assets/android_icon/android_xhdpi.png",
    // android_xxhdpi (144x144)
    // android_xxxhdpi (192x192)
    // 'iphone': '../assets/ios_icon/iphone.png',
    // 'iphone_2x': '../assets/ios_icon/iphone_2x.png',
    // 'iphone_3x': '../assets/ios_icon/iphone_3x.png',
    // 'ipad': '../assets/ios_icon/ipad.png',
    // 'ipad_2x': '../assets/ios_icon/ipad_2x.png',
    // 'android_ldpi': '../assets/android_icon/android_ldpi.png',
    // 'android_mdpi': '../assets/android_icon/android_mdpi.png',
    // 'android_hdpi': '../assets/android_icon/android_hdpi.png',
    // 'android_xhdpi': '../assets/android_icon/android_xhdpi.png',
});

App.launchScreens({
    iphone_2x: "../assets/ios_splash/iphone_2x.png",
    iphone5: "../assets/ios_splash/iphone5.png",
    iphone6: "../assets/ios_splash/iphone6.png",
    iphone6p_portrait: "../assets/ios_splash/iphone6p_portrait.png",
    iphone6p_landscape: "../assets/ios_splash/iphone6p_landscape.png",
    ipad_portrait: "../assets/ios_splash/ipad_portrait.png",
    ipad_portrait_2x: "../assets/ios_splash/ipad_portrait_2x.png",
    ipad_landscape: "../assets/ios_splash/ipad_landscape.png",
    ipad_landscape_2x: "../assets/ios_splash/ipad_landscape_2x.png",

    // depricated
    // android_ldpi_portrait: '../assets/android_splash/android_ldpi_portrait.png',
    // android_ldpi_landscape: '../assets/android_splash/android_ldpi_landscape.png',

    android_mdpi_portrait: '../assets/android_splash/android_mdpi_portrait.png',
    android_mdpi_landscape: '../assets/android_splash/android_mdpi_landscape.png',
    // android_hdpi_portrait: '../assets/android_splash/android_hdpi_portrait.png',
    // android_hdpi_landscape: '../assets/android_splash/android_hdpi_landscape.png',
    // android_xhdpi_portrait: '../assets/android_splash/android_xhdpi_portrait.png',
    // android_xhdpi_landscape: '../assets/android_splash/android_xhdpi_landscape.png',
    // android_hdpi_portrait (480x640)
    // android_hdpi_landscape (640x480)
    // android_xhdpi_portrait (720x960)
    // android_xhdpi_landscape (960x720)
    // android_xxhdpi_portrait (1080x1440)
    // android_xxhdpi_landscape (1440x1080)

    // 'iphone': '../assets/ios_splash/iphone.png',
    // 'iphone_2x': '../assets/ios_splash/iphone_2x.png',
    // 'iphone5': '../assets/ios_splash/iphone_2x.png',
    // 'iphone6': '../assets/ios_splash/iphone_2x.png',
    // 'iphone6p_portrait': '../assets/ios_splash/iphone_2x.png',
    // 'iphone6p_landscape': '../assets/ios_splash/iphone_2x.png',
    // 'ipad_portrait': '../assets/ios_splash/iphone_2x.png',
    // 'ipad_portrait_2x': '../assets/ios_splash/iphone_2x.png',
    // 'ipad_landscape': '../assets/ios_splash/iphone_2x.png',
    // 'ipad_landscape_2x': '../assets/ios_splash/iphone_2x.png',
    // 'android_ldpi_portrait': '../assets/android_splash/android_ldpi_portrait.png',
    // 'android_ldpi_landscape': '../assets/android_splash/android_ldpi_landscape.png',
    // 'android_mdpi_portrait': '../assets/android_splash/android_mdpi_portrait.png',
    // 'android_mdpi_landscape': '../assets/android_splash/android_mdpi_landscape.png',
    // 'android_hdpi_portrait': '../assets/android_splash/android_hdpi_portrait.png',
    // 'android_hdpi_landscape': '../assets/android_splash/android_hdpi_landscape.png',
    // 'android_xhdpi_portrait': '../assets/android_splash/android_xhdpi_portrait.png',
    // 'android_xhdpi_landscape': '../assets/android_splash/android_xhdpi_landscape.png',
});



App.accessRule("*");
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#FFFFFF');
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });
App.configurePlugin('phonegap-facebook-plugin', {
    APP_ID: '906351116043661',
    APP_NAME: 'WhoGotHappy'
});