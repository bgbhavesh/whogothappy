Router.route('/emailTemplate', function () {
  var req = this.request;
  var res = this.response;
  res.end(app.reactEmailTemplate());
}, {where: 'server'});