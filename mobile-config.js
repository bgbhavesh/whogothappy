App.info({
  id: 'com.youiest.whogothappy',
  name: 'Who Got Happy',
  description: 'Get the right happy face!',
  author: 'Youiest LLC',
  email: 'elias@youiest.com',
  website: 'http://whogothappy.com'
});

App.icons({
  // // iOS
  // 'iphone': 'server/assets/icon-60@2x.png',
  // 'iphone_2x': 'server/assets/icon-76@2x.png',

  // // Android
  // 'android_ldpi': 'server/assets/icon-36x36.png',
  // 'android_mdpi': 'server/assets/icon-48x48.png',
  // 'android_hdpi': 'server/assets/icon-72x72.png',
  // 'android_xhdpi': 'server/assets/icon-96x96.png'
});

App.launchScreens({
  // // iOS
  // 'iphone': 'server/assets/splash-320x480.png',
  // 'iphone_2x': 'server/assets/splash-320x480@2x.png',
  // 'iphone5': 'server/assets/splash-320x568@2x.png',

  // // Android
  // 'android_ldpi_portrait': 'server/assets/splash-200x320.png',
  // 'android_ldpi_landscape': 'server/assets/splash-320x200.png',
  // 'android_mdpi_portrait': 'server/assets/splash-320x480.png',
  // 'android_mdpi_landscape': 'server/assets/splash-480x320.png',
  // 'android_hdpi_portrait': 'server/assets/splash-480x800.png',
  // 'android_hdpi_landscape': 'server/assets/splash-800x480.png',
  // 'android_xhdpi_portrait': 'server/assets/splash-720x1280.png',
  // 'android_xhdpi_landscape': 'server/assets/splash-1280x720.png'
});


App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#FFFFFF');
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });
App.configurePlugin('phonegap-facebook-plugin', {
  APP_ID: '947050508662390',
  APP_NAME: 'WhoGotHappy'
});