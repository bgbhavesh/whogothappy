Deps.autorun(function() {
    if(!Meteor.userId()){
      Router.go('login');
    }
})