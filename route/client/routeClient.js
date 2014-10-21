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
	"#famous" : "famous",
	"#home" : "home",
	"#morpher" : "morpher",
	"#seeall" : "seeall"
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
	"#seeall" : function (pause) {
    },
    "#famous" : function (pause) {
    },
    "#home" : function (pause) {
    }, 
    "#morpher" : function (pause) {
    }, 
}
app.getRoute = function(){
	var setTime = new Date().getTime();
    log("getRoute" + setTime,1);
	var hash = window.location.hash;
	log("getRoute" + (new Date().getTime() - setTime),1);
    if(app.router[hash])
    	return app.router[hash]
    else
    	return false;
}
app.onHashChange = function(){
	var setTime = new Date().getTime();
    log("onHashChange" + setTime,1);
	var hash = window.location.hash;
	Session.set("route",hash);

	if(app.routerFunction[hash])
		app.routerFunction[hash]()
	else
		app.routerFunction["#home"]()
	log("onHashChange " +(new Date().getTime() - setTime),1);
}
Router = {};
Router.go = function(hash){
	window.location.hash = hash;
}
$(window).on('hashchange',app.onHashChange);

app.onHashChange();
