Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  //api.addFiles('sixteensmiles.js');
  api.add_files('common.js', ['client',"server"]);
  api.add_files('client.js', 'client');
  api.add_files('lib/util.js', 'client');
  // api.add_files('lib/jquery.bxslider.js', 'client');
  // api.add_files('lib/jquery.bxslider.js', 'client');
  // api.add_files('lib/jquery.bxslider.min.js', 'client');
  if(api.export){
		api.export(["app","collection","log"],['client',"server"]);
	}
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('sixteensmiles');
//   api.addFiles('sixteensmiles-tests.js');
// });
