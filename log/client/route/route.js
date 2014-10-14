// Router.configure({
// 	layoutTemplate: 'layout',
// 	loadingTemplate: 'loading'
// });
Template.route.helpers({
	"route" : function(first){
		if(Session.get("route") == first){
			return true;
		}
		// log(Session.get("route"));
		// if(first == "#default"){
		// 	return true;
		// }
	},
	"default" : function(){
		if(!app.router[Session.get("route")])
			return true;
	}
});
app.router = {
	//"default" : "homepage",
	"#login" : "login",
	"#admin" : "admin",
	"#register" : "register",
	"#users" : "users"  ,
	
	// "#loginScreen" : "loginScreen"  ,
	// "#addword" : "addword"  ,
	// "#debug" : "debug"   ,
	// "#feedback" : "feedback" ,
	// "#forgot" : "forgot"  ,
	// "#profile" : "profile",
	// "#feedSend" : "feedSend",   
	"#home" : "homepage"  
}
app.routerFunction = {
	//"default" : "homepage",
	"#login" : function () {
		// app.backnone();
        Session.set("headerName","<div class='divi'><img src='http://thumb.dance/img/header/lock.png'/> </div><div class='divh'>Login with Email</div><div class='divi'></div>");
    },
	"#admin" : function (pause) {
		// app.backblock();
		// Session.set("headerName", "<div class='divi'><img src='http://thumb.dance/img/header/cloud.png' /> </div><div class='divh'>";
    },
	"#register" : function () {
		// app.backnone();
        Session.set("headerName","<div class='divi'><img src='http://thumb.dance/img/header/lock.png'/> </div><div class='divh'> Sign up</div><div class='divi'></div>");
	},
	"#users" : function () {
		// app.backnone();
        Session.set("headerName","<div class='divi'><img src='http://thumb.dance/img/header/cloud.png' /> </div><div class='divh'>My Words</div><div class='divi'></div>");
    },
    "" : function (pause) {
    	// app.backnone();
        Session.set("headerName","<div class='divi'><img src='http://thumb.dance/img/header/pin.png'/> </div><div class='divh'>Places Near You</div><div class='divi'></div>");
    },
	"#loginScreen" : function (pause) {
		// app.backnone();
        Session.set("headerName","");
    },
	"#addword" : function (pause) {
		// app.backblock();
		Session.set("headerName","<div class='divi'><img src='http://thumb.dance/img/header/add.png'/> </div><div class='divh'>Add new word</div><div class='divi'></div>");
	},
	"#debug" : function (pause) {
		// app.backnone();
        Session.set("headerName","Debug Mode");
	},
	"#feedback" : function (pause) {
		// app.backblock();
        Session.set("headerName","<div class='divi'><img src='img/header/feedback.png'/> </div><div class='divh'>Feedback on app</div><div class='divi'></div>");
    },
	"#forgot" : function (pause) {
		// app.backblock();
        Session.set("headerName","<div class='divi'><img src='img/header/password.png'/> </div><div class='divh'>Forgot Password?</div><div class='divi'></div>");
    },
	"#profile" : function (pause) {
		// app.backnone();
        Session.set("headerName","<div class='divi'><img src='img/header/name.png'/> </div><div class='divh'>Profile</div><div class='divi'></div>");
    },
    "#feedSend" : function (pause) {
		// app.backblock();
        Session.set("headerName","<div class='divi'><img src='img/header/feedback.png'/> </div><div class='divh'>Feedback on app</div><div class='divi'></div>");
    },
    "#home" : function (pause) {
		// app.backnone();
        Session.set("headerName","<div class='divi'><img src='http://thumb.dance/img/header/pin.png'/> </div><div class='divh'>Places Near You</div><div class='divi'></div>");
    },  
}
app.getRoute = function(){
	var hash = window.location.hash;
    if(app.router[hash])
    	return app.router[hash]
    else
    	return false;
}
app.onHashChange = function(){
	var hash = window.location.hash;
	Session.set("route",hash);
	if(app.routerFunction[hash])
		app.routerFunction[hash]()
	else
		app.routerFunction["home"]()
}
Router = {};
Router.go = function(hash){
	window.location.hash = hash;
}
$(window).on('hashchange',app.onHashChange);

Router.go("home");
// Router.go("worldlist");
// Session.set("placeId","ChIJYWXFp2XAwjsRRv3t7UtyNcE");

app.onHashChange();
// Router.map(function() {
// 	this.route('login', {path: '/login',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='lock icon'></i>Login with Email");
//         }
// 	});
// 	this.route('homepage', {path: '/'},{
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='map marker icon'>Places Near You");
//         }
// 	});
// 	this.route('worldlist', {path: '/worldlist/:id',
// 		onBeforeAction: function (pause) {
// 			var placeId = this.params.id;
// 			Session.set("placeId",placeId);
// 			var name = "";
// 			var word = app.getWord(placeId);
// 			if(word){
// 				name = word.name
// 			}
// 			Session.set("placeName",name);
// 			Session.set("headerName", "<i class='cloud icon eulb' style='padding-top:0px;margin-right:10px'></i>"+
// 			name +"<a id='addanewword' href='/addword/" +placeId+"' > <i class='add icon'></i></a>"); //"<i class='cloud icon'></i>" +
            
//         }
// 	});
// 	this.route('register', {path: '/register',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='lock icon'></i>Sign up");
//         }
// 	});
// 	this.route('mywords', {path: '/mywords',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='cloud icon eulb' style='padding-top:0px;margin-right:10px'></i>My Words");
//         }
// 	});
// 	this.route('homepage', {path: '/home',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='map marker icon'></i>Places Near You");
//         }
// 	});
// 	this.route('loginScreen', {path: '/loginScreen',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","");
//         }
// 	});
// 	this.route('addword', {path: '/addword/:id',
// 		onBeforeAction: function (pause) {
// 			Session.set("headerName","<i class='add icon'></i>Add new word");
//            	Session.set("placeId",this.params.id);
//         }
// 	});
// 	this.route('debug', {path: '/debug',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","Debug Mode");
//         }
// 	});
// 	this.route('feedback', {path: '/feedback',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='comment outline icon'></i>Feedback on app");
//         }
// 	});
// 	this.route('forgot', {path: '/forgot',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='key icon'></i>Forgot Password?");
//         }
// 	});

// 	this.route('profile', {path: '/profile',
// 		onBeforeAction: function (pause) {
//             Session.set("headerName","<i class='user icon'></i>Profile");
//         }
// 	});
// });