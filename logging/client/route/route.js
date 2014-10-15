Template.route.helpers({
	"route" : function(first){
		if(Session.get("route") == first){
			return true;
		}
	},
	"default" : function(){
		if(!app.router[Session.get("route")])
			return true;
	}
});
app.router = {
	"#login" : "login",
	"#admin" : "admin",
	"#register" : "register",
	"#users" : "users",
	"#docs" : "docs",
	"#home" : "homepage"
}
app.routerFunction = {
	"#login" : function () {
    },
	"#admin" : function (pause) {
    },
	"#register" : function () {
	},
	"#users" : function () {
    },
	"#docs" : function () {
    },
    "" : function (pause) {
    },
	"#loginScreen" : function (pause) {
    },
	"#addword" : function (pause) {
	},
	"#debug" : function (pause) {
	},
	"#feedback" : function (pause) {
    },
	"#forgot" : function (pause) {
    },
	"#profile" : function (pause) {
    },
    "#feedSend" : function (pause) {
    },
    "#home" : function (pause) {
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

app.onHashChange();
