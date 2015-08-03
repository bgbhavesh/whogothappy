Router.configure({
  "loadingTemplate": 'home',
  "notFoundTemplate": 'home',
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/admin', function () {
  if(Roles.userIsInRole(Meteor.userId(),["admin"])){
    this.render('admin');
  }
  else{
    this.render('home');
  }
});

Router.configure({
  template: 'home'
});