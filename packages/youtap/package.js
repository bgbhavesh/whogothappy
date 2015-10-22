Package.describe({
  summary: "Nicolson TapMatrix Package"
});

Npm.depends({
	"google-spreadsheet" : "0.2.8",
    "node-schedule" : "0.1.13",
    //'paypal-rest-sdk': '0.6.3',
    "fb" : "0.6.2",
    //"passport" : "0.2.0",
    //"passport-facebook" : "1.0.3",
    //"form-data" : "0.1.2",
    //"request" : "2.34.0"
});

Cordova.depends({
    // Social Share Plugin
    // "cordova-plugin-x-socialsharing": "5.0.4",
    // 'nl.x-services.plugins.socialsharing': 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/tarball/1c00b8f050fa113e4373a5065f78f525c69f5f52',

    // Push Plugin
    // 'phonegap-plugin-push': '1.3.0'
    // 'com.phonegap.plugins.PushPlugin': 'https://github.com/phonegap-build/PushPlugin/tarball/1979d972b6ab37e28cf2077bc7ebfe706cc4dacd',

    // // Facebook Login Plugin
    // 'phonegap-facebook-plugin': 'https://github.com/Wizcorp/phonegap-facebook-plugin/tarball/c0f8da97a1d65397ada73e958dafed3aeef2e491',


});

Package.on_use(function (api) {

  	api.add_files(['common.js'], ['server','client']);

	api.add_files('client.js', 'client');

   	// api.addFiles('facebook/cdv-plugin-fb-connect.js', ['web.cordova']);
  	// api.addFiles('facebook/facebook-js-sdk.js', ['web.cordova']);
  	// api.addFiles('facebook/facebook.js', ['web.browser']);

    api.add_files('lib/hammer.js', 'client');
	api.add_files('lib/easing.js', 'client');
	api.add_files('lib/fastclick.js', 'client');
	api.add_files(['server.js'], 'server');
	api.add_files('lib/jquery.transit.min.js', 'client');
	api.add_files('lib/jquery.plugin.js', 'client');
	api.add_files('lib/jquery.countdown.css', 'client');
	api.add_files('lib/jquery.countdown.js', 'client');
	api.add_files('lib/i18n.js', 'client');

	//api.add_files('lib/intro.js', 'client');
	//api.add_files('lib/introjs.css', 'client');
	//api.add_files('lib/jquery.imageloader.js', 'client');


	if(api.export){
		api.export("schedule","server");
		api.export("log",["server","client"]);
		api.export("app",["server","client"]);
		//api.export("paypal","server");
		api.export("facebookfb","server");
		api.export("GoogleSpreadsheet","server");
		//api.export("facebook","server");
		//api.export("querystring","server");
		//api.export("FormData","server");
	}
});