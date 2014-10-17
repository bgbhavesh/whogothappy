Template.login.events({
    'click #registerform .submit': function () {
      	app.register();
    },
    'click #goToRegister': function () {
      	app.setRoute("#register");
    },
    'click #loginButton': function () {
      	app.login();
    },
    "click #loginScreenFacebook" : function(){
		app.loginWithFacebook();
	}
});
app.user = null;
app.user = app.get("user");
app.beforeInfo = null;

app.registerCallback = function(err,success){
	if(err){
		app.visualEffect("registerButton",app.onError);
		$(".error").show();
		$(".error .header").html("Error");
		$(".error p").html(err.reason);
	}
	else{
	// if(success){
		app.visualEffect("registerButton",app.onSuccess);
		setTimeout(function(){Router.go("home")},2000);
		app.onSendPushId();
	}
}


app.logout = function(){
	Meteor.logout();
}
// $("#goToRegister").bind("click",function(){app.setRoute("#register");});


app.nonRegisterUser = function(){
	app.get("nonuser");
	var date1 = app.get("nonuser");
	if(!date1){
		date1 = new Date();
		app.set("nonuser",date1.toString());
	}
	else{
		date1 = new Date(date1.toString());
	}
	var date2 = new Date();
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	app.nonuser = diffDays;
	if(app.nonuser > 29 && !app.user){
		alert("Please register!");
	}
	log("The user is " +diffDays +" old.");
}


app.nonRegisterUser();



app.login = function(event){
	if(event)
		event.preventDefault();
	var username = $("#loginUsername").val();
	var password = $("#loginPassword").val();
	Meteor.loginWithPassword(username,password, app.loginCallback);
	$(".error").hide();
	return false;
}

app.register = function(event){
	app.visualEffect("registerButton",app.onLoad);
	Accounts.createUser(app.setUserLogin(), app.registerCallback);
	$(".error").hide();
}

app.createUserCallback = function(err){
	app.showLoginError(err);
	if(!err)
		Router.go('homepage');
}

app.setUserLogin = function(){
	var username,email,password;

	username = $("#registerUsername").val();
	email = $("#registerEmail").val();
	password = $("#registerPassword").val();
	var user = {"username":username,"password":password,"email":email}
	
	user.profile = {};
	user.services = {};
	user.profile.words = app.userWords;
	return user;
}

app.createUserCallback = function(err){
	app.showLoginError(err);
}

app.showLoginError = function(err){
	if(err){
		$("#loginMessage a").html(err.reason);
		$("#loginMessage").show();
	}
}

app.loginCallback = function(err){
	if(err){
		app.visualEffect("loginButton",app.onError);
		$(".error").show();
		$(".error .header").html("Error");
		$(".error p").html(err.reason);
	}
	else{
		app.visualEffect("loginButton",app.onSuccess);
		app.onSendPushId();
		setTimeout(function(){Router.go('home');},2000);
	}
}

app.loginWithFacebook = function(){
	app.visualEffect("loginScreenFacebook",app.onLoad);
	if(app.phonegap){
		app.fbInit();
		app.fbNativeLogin();
	}
	else{
		app.visualEffect("loginScreenFacebook",app.onError);
	}
	
}
Meteor.loginAsFacebook = function(options, callback) {
	//create a login request with admin: true, so our loginHandler can handle this request
	options.myFacebook = true;
	//send the login request
	Accounts.callLoginMethod({
		methodArguments: [options],
		userCallback: callback
	});
};
app.facebookCallback = function(err){
	log(err);
	if(err){
		app.visualEffect("loginScreenFacebook",app.onError);
	}
	else{
		app.visualEffect("loginScreenFacebook",app.onSuccess);
		setTimeout(function(){Router.go("home")},2000);
		app.onSendPushId();
	}
}

app.createFacebookUser = function(user,authResponse){
	var profilePictureUrl = null;
	if (user.picture.data) {
        profilePictureUrl = user.picture.data.url;
    } else {
        profilePictureUrl = user.picture;
    }

	var users = {"username":user.username,"email":user.email,"_id":user.id,"name":user.name};
	
	users.profile = {};
	users.services = {"facebook": {"token":authResponse.accessToken,"expire":authResponse.expirationTime,}};
	users.profile.words = app.userWords;
	users.profile.profile_picture  = profilePictureUrl;
	Meteor.loginAsFacebook(users,app.facebookCallback);
}
// Garbage


// increment the counter when button is clicked
// Session.set("counter", Session.get("counter") + 1);

// increment the counter when button is clicked
// Session.set("counter", Session.get("counter") + 1);

// increment the counter when button is clicked
// Session.set("counter", Session.get("counter") + 1);
// app.register = function(options){
// 	// $("#registerform .submit").append('<i class="loading icon"></i>');
// 	// var username = $("#registerform input[placeholder='Username']").val();
// 	// var password = $("#registerform input[type='password']").val();
// 	// var email = $("#registerform input[placeholder='Email']").val();
// 	// var options = {"username":username,"password":password,"email":email};
// 	$("#registerButton").html('Register ' +app.onLoad);
// 	if(device)
// 		options.uuid = device.uuid;
	
// 	app.beforeInfo = options;
// 	api.register(options,app.registerCallback);
// }
// $("#registerform .submit").bind("click",app.register);

		// $("#registerform").addClass("error");	
		// $("#registerform .error div").html("Error");
		// $("#registerform .error p").html(err);

		// $("#registerform .ui.message").removeClass("error").addClass("success");
		// $("#registerform .ui.message .header").html("Complete");
		// $("#registerform .ui.message p").html("Please wait loggin you in.");
		// $("#registerform input[placeholder='Username']").val("");
		// $("#registerform input[type='password']").val("");
		// $("#registerform input[placeholder='Email']").val("");
		// $("#loginform input[placeholder='Username']").val(app.beforeInfo.username);
		// $("#loginform input[type='password']").val(app.beforeInfo.password);
// app.login = function(options){
// 	// $("#loginform .submit").append('<i class="loading icon"></i>');
// 	log("login");


// 	var username = $("#loginUsername").val();
// 	var password = $("#loginPassword").val();
// 	// var options = {"username":username,"password":password};
// 	$("#loginButton").html('Login with Email ' +app.onLoad);
// 	log(options);
// 	app.beforeInfo = options;
// 	Meteor.loginWithPassword(username, password);
// }
// $("#loginform .submit").bind("click",app.login);
// app.loginCallback = function(err,success){
// 	if(err){
// 		app.visualEffect("loginButton",app.onError);
// 		$("#loginform").addClass("error");	
// 		$("#loginform .error div").html(err);
// 	}
// 	else{
// 		app.visualEffect("loginButton",app.onSuccess);
// 		// app.user = success;
// 		// app.user.username = app.beforeInfo.user || app.beforeInfo.username;
// 		// app.user.password = app.beforeInfo.pass || app.beforeInfo.password;
// 		// app.set("user",success);
// 		// app.scope.AppCtrl.closeLogin();
// 		app.onSendPushId();
// 	}
// }