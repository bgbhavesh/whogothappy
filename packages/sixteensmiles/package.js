Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Npm.depends({
    "google-spreadsheet" : "0.2.8"
});

Cordova.depends({
    // 'org.apache.cordova.camera': '0.3.1'
    // 'org.apache.cordova.camera': '0.3.1',
    'org.apache.cordova.media': '0.2.13',
    'org.apache.cordova.inappbrowser': '0.5.2',
    'nl.xservices.plugins.SocialSharing': 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/tarball/1c00b8f050fa113e4373a5065f78f525c69f5f52',
    'com.plugin.gcm.PushPlugin': 'https://github.com/phonegap-build/PushPlugin/tarball/1979d972b6ab37e28cf2077bc7ebfe706cc4dacd',
    // android
    'com.phonegap.plugins.facebookconnect': 'https://github.com/nicolsondsouza/facebook-old-tapmate/tarball/decafe1bd222716bc55e483e7d547208325d7a38',
    // ios
    // 'com.phonegap.plugins.facebookconnect': 'https://github.com/nicolsondsouza/facebook-tapmate/tarball/815ae6915e9f0e75378809fa75f062b015dea9a7',
    
    
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  //api.addFiles('sixteensmiles.js');
  api.add_files('common.js', ['client',"server"]);
  api.add_files('util.js', 'client');
  api.add_files('client.js', 'client');
  api.add_files('server.js', 'server');
  api.add_files('lib/util.js', 'client');
  api.add_files('morpher.js', 'client');
  api.add_files('server.js', 'server');
  // api.add_files('lib/jquery.bxslider.js', 'client');
  // api.add_files('lib/jquery.bxslider.js', 'client');
  // api.add_files('lib/jquery.bxslider.min.js', 'client');
  if(api.export){
		api.export(["app","collection","log"],['client',"server"]);
    api.export(["GoogleSpreadsheet","path","Future"],"server");
	}
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('sixteensmiles');
//   api.addFiles('sixteensmiles-tests.js');
// });
