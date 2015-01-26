Package.describe({
    summary: " \* Fill me in! *\ ",
    version: "1.0.0",
    git: " \* Fill me in! *\ "
});

Npm.depends({
    "request": "2.29.0",
    "xml2js": "0.4.0",
    "googleclientlogin": "0.2.8"
});

Cordova.depends({});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.3.1');
    //api.addFiles('sixteensmiles.js');
    api.add_files('common.js', ['client', "server"]);
    api.add_files('client.js', 'client');
    api.add_files('server.js', 'server');
    if (api.export) {
        api.export(["GoogleSpreadsheet"], "server");
    }
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('sixteensmiles');
//   api.addFiles('sixteensmiles-tests.js');
// });
