Template.register.events({
    // 'click #Login': function () {
    //   // increment the counter when button is clicked
    //   // Session.set("counter", Session.get("counter") + 1);
    //   console.log("sdvkjbsdkj")
    // }
    "click #registerButton" : function(event){
    	app.register(event);
    }
  });