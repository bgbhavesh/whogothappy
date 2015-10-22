Meteor.startup(function(){
  Meteor.setTimeout(function(){
    KeepAlive.init({
      // "website": "https://my.awesome.site", // your website default is your root_url
      // "interval": 1000, // ms default is 5 mins
    });

    KeepAlive.clear(); // stop keep alive
  },500);
});