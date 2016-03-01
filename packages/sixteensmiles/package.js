Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Npm.depends({
    "google-spreadsheet" : "0.2.8",
    "node-schedule" : "0.1.13",
});

Cordova.depends({
    // 'org.apache.cordova.camera': '0.3.1'
    // 'org.apache.cordova.camera': '0.3.1',
    // 'org.apache.cordova.media': '0.2.13',
    // 'org.apache.cordova.inappbrowser': '0.5.2',
    // 'nl.x-services.plugins.socialsharing': 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/tarball/1c00b8f050fa113e4373a5065f78f525c69f5f52',
    // 'com.trinisoft.alarm' : "https://github.com/nicolsondsouza/alarm/tarball/c75c8b3a706798ff25c2e8d7e9c032759eb57334",
    // 'com.phonegap.plugins.PushPlugin': 'https://github.com/phonegap-build/PushPlugin/tarball/1979d972b6ab37e28cf2077bc7ebfe706cc4dacd',
    // android
    // 'com.phonegap.plugins.facebookconnect': 'https://bitbucket.org/nicolsondsouza/whogothappy_facebook/commits/588f2109c02b2bfc4da93346db57cadad8e0ee28',
    // 'com.phonegap.plugins.facebookconnect': 'https://github.com/trinisofttechnologies/whogothappy_facebook/tarball/22a380b763bf22e7c222dce8be2bc4b8237be6b3',
    // ios
    //"com.phonegap.plugins.facebookconnect" : "https://bitbucket.org/jackglendinning/facebook-worddance/tarball/63643810348128b72e7f7ee40d0543f1ba35c6e8"
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

  // api.add_files('lib/jquery.transition.js', 'client');
  // api.add_files('server.js', 'server');
  // api.add_files('lib/jquery.bxslider.js', 'client');
  // api.add_files('lib/jquery.bxslider.js', 'client');
  api.add_files('lib/jquery_1.5.2.min.js', 'client');
  // api.add_files('lib/timeago.js', 'client');
  if(api.export){
		api.export(["app","collection","log"],['client',"server"]);
    api.export(["GoogleSpreadsheet","path","Future","schedule"],"server");
	}
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('sixteensmiles');
//   api.addFiles('sixteensmiles-tests.js');
// });
