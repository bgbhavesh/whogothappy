// This section sets up some basic app metadata,
// the entire section is optional.

//if ( typeof App !== 'undefined' ){
App.info({
  id: 'com.youiest.whogothappy',
  name: 'WhoGotHappy',
  description: 'Tap that happiest face.',
  author: 'Elias Moosman',
  email: 'tapmate@youiest.com',
  website: 'http://youtap.meteor.com',
  version: "1.0.0"
});

App.icons({
//   // iOS
//   'iphone': 'assets/icons/icon-60.png',
//   'iphone_2x': 'assets/icons/icon-60@2x.png',
//   'iphone_3x': 'assets/icons/icon-60@2x.png',
//   'ipad': 'assets/icons/icon-60@2x.png',
//   'ipad_2x': 'assets/icons/icon-60@2x.png',

//   // Android
//   'android_ldpi': 'assets/icons/icon.png',
//   'android_mdpi': 'assets/icons/icon.png',
  'android_hdpi': '../assets/icon.png',
//   'android_xhdpi': 'assets/icons/icon.png'
});

App.launchScreens({
//   // iOS
//   'iphone': 'assets/splash/Default-568h@2x~iphone.png',
//   'iphone_2x': 'assets/splash/Default@2x~iphone.png',
//   'iphone5': 'assets/splash/Default~iphone.png',
//   'iphone6': 'assets/splash/Default~iphone.png',
//   'iphone6p_portrait': 'assets/splash/Default~iphone.png',
//   'iphone6p_landscape': 'assets/splash/Default~iphone.png',
//   'ipad_portrait': 'assets/splash/Default~iphone.png',
//   'ipad_portrait_2x': 'assets/splash/Default~iphone.png',
//   'ipad_landscape': 'assets/splash/Default~iphone.png',
//   'ipad_landscape_2x': 'assets/splash/Default~iphone.png',

//   // Android
//   'android_ldpi_portrait': 'assets/splash/default.png',
//   'android_ldpi_landscape': 'assets/splash/default.png',
//   'android_mdpi_portrait': 'assets/splash/default.png',
//   'android_mdpi_landscape': 'assets/splash/default.png',
  'android_hdpi_portrait': '../assets/screen.png',
//   'android_hdpi_landscape': 'assets/splash/default.png',
//   'android_xhdpi_portrait': 'assets/splash/default.png',
//   'android_xhdpi_landscape': 'assets/splash/default.png'
});

App.accessRule("*");
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#FFFFFF');
App.setPreference('fullscreen', 'false');
//console.log(App);
//}

App.configurePlugin('phonegap-facebook-plugin', {
  APP_ID: '906351116043661',
  APP_NAME: 'WhoGotHappy'
});
// Icons

// Name  Size
// iphone_2x 120x120
// iphone_3x 180x180
// ipad  76x76
// ipad_2x 152x152
// android_ldpi  36x36
// android_mdpi  48x48
// android_hdpi  72x72
// android_xhdpi 96x96
// Launch Screens

// Name  Size
// iphone_2x 640x960
// iphone5 640x1136
// iphone6 750x1334
// iphone6p_portrait 1242x2208
// iphone6p_landscape  2208x1242
// ipad_portrait 768x1024
// ipad_portrait_2x  1536x2048
// ipad_landscape  1024x768
// ipad_landscape_2x 2048x1536
// android_ldpi_portrait 200x320
// android_ldpi_landscape  320x200
// android_mdpi_portrait 320x480
// android_mdpi_landscape  480x320
// android_hdpi_portrait 480x800
// android_hdpi_landscape  800x480
// android_xhdpi_portrait  720x1280
// android_xhdpi_landscape 1280x720
// Other

// Name  Size
// App Store 1024x1024