Router.route('/emailTemplate', function () {
  var req = this.request;
  var res = this.response;
  res.end(app.reactEmailTemplate());
}, {where: 'server'});

Router.route('/emailInvite', function () {
  var req = this.request;
  var res = this.response;
  res.end(app.reactEmailInvite());
}, {where: 'server'});

Router.route('/emailWeekly', function () {
  var req = this.request;
  var res = this.response;
  res.end(Handlebars.templates['emailInvite']({"email": "nicolsondsouza@gmail.com" ,"username" : "nicolsondsouza","id": "938522329491159" }) );
}, {where: 'server'});