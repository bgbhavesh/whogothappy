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
	},
	"click #LogoutApp" : function(){
		Meteor.logout();
	}
});


app.user = null;
app.user = app.get("user");
app.beforeInfo = null;

app.registerCallback = function(err,success){ 
	var starttime = new Date().getTime();
    log("app.registerCallback started",null,arguments,1);
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
	log("app.registerCallback ended",new Date().getTime() - starttime,arguments,1);
}


app.logout = function(){ 
	var starttime = new Date().getTime();
    log("app.logout started",null,arguments,1);
    log("app.logout ended",new Date().getTime() - starttime,arguments,1);
	Meteor.logout(); 
}
// $("#goToRegister").bind("click",function(){app.setRoute("#register");});






app.login = function(event){ 
	var starttime = new Date().getTime();
    log("app.login started",null,arguments,1);
	if(event)
		event.preventDefault();
	var username = $("#loginUsername").val();
	var password = $("#loginPassword").val();
	Meteor.loginWithPassword(username,password, app.loginCallback);
	$(".error").hide(); 
	log("app.login ended",new Date().getTime() - starttime,arguments,1);
	return false;
}

app.register = function(event){ 
	console.log("register")
	var starttime = new Date().getTime();
    log("app.register started",null,arguments,1);
	app.visualEffect("registerButton",app.onLoad);
	Accounts.createUser(app.setUserLogin(), app.registerCallback);
	$(".error").hide(); 
	log("app.register ended",new Date().getTime() - starttime,arguments,1);
}

app.createUserCallback = function(err){ 
	var starttime = new Date().getTime();
    log("app.createUserCallback started",null,arguments,1);
	app.showLoginError(err);
	if(!err)
		Router.go('homepage'); 
	log("Template.views_EdgeSwapper.users.userlist ended",new Date().getTime() - starttime,arguments,1);
}

app.setUserLogin = function(){ 
	var starttime = new Date().getTime();
    log("app.setUserLogin started",null,arguments,1);
	var username,email,password;

	username = $("#registerUsername").val();
	email = $("#registerEmail").val();
	password = $("#registerPassword").val();
	var user = {"username":username,"password":password,"email":email}
	
	user.profile = {};
	user.services = {};
	user.profile.words = app.userWords; 
	log("app.setUserLogin ended",new Date().getTime() - starttime,arguments,1);
	return user;
}

app.createUserCallback = function(err){ 
	var starttime = new Date().getTime();
    log("app.createUserCallback started",null,arguments,1);
	app.showLoginError(err); 
	log("app.createUserCallback ended",new Date().getTime() - starttime,arguments,1);
}

app.showLoginError = function(err){ 
	var starttime = new Date().getTime();
    log("app.showLoginError started",null,arguments,1);
	if(err){
		$("#loginMessage a").html(err.reason);
		$("#loginMessage").show();
	} 
	log("app.showLoginError ended",new Date().getTime() - starttime,arguments,1);
}

app.loginCallback = function(err){ 
	var starttime = new Date().getTime();
    log("app.loginCallback started",null,arguments,1);
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
	log("app.loginCallback ended",new Date().getTime() - starttime,arguments,1);
}

app.loginWithFacebook = function(){ 
	var starttime = new Date().getTime();
    log("app.loginWithFacebook started",null,arguments,1);
	app.visualEffect("loginScreenFacebook",app.onLoad);
	app.fbInit();
	app.fbNativeLogin();
	// if(!app.phonegap){
	// 	app.fbInit();
	// 	app.fbNativeLogin();
	// }
	// else{
	// 	FB.getLoginStatus(function(response) {
	// 		if (response.status === 'connected') {
	// 			app.facebookSDKWrapper(response);
	// 		}
	// 		else {
	// 			FB.login(app.facebookSDKWrapper,{scope: 'email,user_likes,publish_actions',return_scopes: true});
	// 		}
	// 	},{scope: 'email,user_likes,publish_actions',return_scopes: true});
	// 	app.visualEffect("loginScreenFacebook",app.onError);
	// } 
	log("app.loginWithFacebook ended",new Date().getTime() - starttime,arguments,1);
}
Meteor.loginAsFacebook = function(options, callback) { 
	var starttime = new Date().getTime();
    log("Meteor.loginAsFacebook started",null,arguments,1);
	//create a login request with admin: true, so our loginHandler can handle this request
	options.myFacebook = true;
	//send the login request
	// console.log(options);
	// console.log(callback);
	Accounts.callLoginMethod({
		methodArguments: [options],
		userCallback: callback
	}); 
	log("Meteor.loginAsFacebook ended",new Date().getTime() - starttime,arguments,1);
};
app.facebookCallback = function(err){ 
	var starttime = new Date().getTime();
    log("app.facebookCallback started",null,arguments,1);
	log(err);
	if(err){
		app.visualEffect("loginScreenFacebook",app.onError);
	}
	else{
		app.visualEffect("loginScreenFacebook",app.onSuccess);
		setTimeout(function(){Router.go("home")},2000);
		app.onSendPushId();
	} 
	log("app.facebookCallback ended",new Date().getTime() - starttime,arguments,1);
}
app.facebookResponse = null;
app.facebookSDKWrapper = function(response){
	app.facebookResponse = response;
	FB.api('/me?fields=picture,name,email', function(response) {
		
		var user = {};
		user.picture = "";
		if(response.username)
			user.username = response.username;
		else
			user.username = response.name;
		user.email = response.email;
		user.emails = [{"address":response.email,"verified":true}];
		user.id = response.id;
		user.name = response.name;
		var authResponse = {};

		authResponse.accessToken = app.facebookResponse.accessToken;
		authResponse.expirationTime = app.facebookResponse.expiresIn;

		app.createFacebookUser(user,authResponse)
	});
}

app.createFacebookUser = function(user,authResponse){ 
	var starttime = new Date().getTime();
    log("app.createFacebookUser started",null,arguments,1);
	var profilePictureUrl = null;
	if(user.picture)
	if (user.picture.data) {
        profilePictureUrl = user.picture.data.url;
    } else {
        profilePictureUrl = user.picture;
    }
    var emailarray = [];
	var users = {"username":user.username || user.name,"_id":user.id,"name":user.name};
	emailarray.push({"address":user.email})
	users.emails =  emailarray;
	users.profile = {};
	users.services = {"facebook": {"token":authResponse.accessToken,"expire":authResponse.expirationTime}};
	users.profile.words = app.userWords;
	users.profile.profile_picture  = profilePictureUrl;
	Meteor.loginAsFacebook(users,app.facebookCallback); 
	log("app.createFacebookUser ended",new Date().getTime() - starttime,arguments,1);
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