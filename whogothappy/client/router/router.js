Router.configure({
  "loadingTemplate": "loader",
  "notFoundTemplate": 'error',
});

Router.onBeforeAction(function(){
  if(!Meteor.userId()){
    Router.go("/");
  }
  this.next();
  },{
    except: ["login"]
});

Router.waitOn(function(){
  return [
  ];
});

var routerData = function(){
  return {
    router: Router.current().params
  }
};

Router.map(function () {

  this.route("root",{
    path:"/",
    template:"basic_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'login': {to: 'centerBody'}
    },
    onBeforeAction: function (pause) {
      if(Meteor.userId()){
        Router.go("/home");
      }
      else{
        Router.go("/login")
      }
      this.next();
    },
  });

  this.route("login",{
    path:"/login",
    template:"login",
    data: routerData,
    onBeforeAction: function (pause) {
      if(Meteor.userId()){
        Router.go("/home");
      }
      this.next();
    }
  });

  this.route("home",{
    path:"/home",
    template:"home_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'left_menu': {to: 'left_menu'},
      'home_body': {to: 'center_body'},
      'right_menu': {to: 'right_menu'},
    },
    // waitOn: app.onSubscribeHome
  });

  this.route("image",{
    path:"/image/:imageId",
    template:"home_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'left_menu': {to: 'left_menu'},
      'home_body': {to: 'center_body'},
      'right_menu': {to: 'right_menu'},
      'big_popup': {to: 'big_popup'},
    },
    waitOn: app.onSubscribeImage,
    onAfterAction: function(){
      return Meteor.subscribe("bigImage", this.params.imageId);
    }
  });

  this.route("profile",{
    path:"/profile",
    template:"home_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'left_menu': {to: 'left_menu'},
      'profile': {to: 'center_body'},
      'right_menu': {to: 'right_menu'},
      // 'big_popup': {to: 'big_popup'},
    },
    // waitOn: app.onSubscribeImage
  });

  this.route("chat",{
    path:"/chat/:chatId",
    template:"home_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'left_menu': {to: 'left_menu'},
      'chat': {to: 'center_body'},
      'right_menu': {to: 'right_menu'},
      // 'big_popup': {to: 'big_popup'},
    },
    waitOn: function(){
      return [
        Meteor.subscribe("chat", this.params.chatId)
      ]
    },
    onAfterAction: function(){
      app.setChatFollowId(true);
      app.removeChatNotification();
    }
  });

  this.route("find_friends",{
    path:"/find_friends/:pageNum",
    template:"home_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'left_menu': {to: 'left_menu'},
      'find_friends': {to: 'center_body'},
      'right_menu': {to: 'right_menu'},
    },
    waitOn: function(){
      return [
        Meteor.subscribe("find_friends", this.params.pageNum)
      ];
    }
  });

  this.route("history",{
    path:"/history/:pageNum",
    template:"home_layout",
    yieldTemplates:{
      'header': {to: 'header'},
      'left_menu': {to: 'left_menu'},
      'history': {to: 'center_body'},
      'right_menu': {to: 'right_menu'},
    },
    waitOn: function(){
      return [
        Meteor.subscribe("history", this.params.pageNum)
      ];
    }
  });

});