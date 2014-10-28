Template.__define__("route", (function() {
	var view = this;
	var templateName = HashRouter.getRoute(Session.get("route"));
	if(Template[templateName]){
		console.log(Spacebars.include(view.lookupTemplate(templateName)))
		return Spacebars.include(view.lookupTemplate(templateName));
	}
	else{
		return Spacebars.include(view.lookupTemplate("home"));
	}
}));

// Template.route.helpers({
// 	"route" : function(first){
// 		if(Session.get("route") == first){
// 			return true;
// 		}
// 	},
// 	"default" : function(){
// 		if(!app.router[Session.get("route")])
// 			return true;
// 	}
// });
HashRouter = {};
HashRouter.go = function(hash){
	window.location.hash = hash;
}
HashRouter.routes = {};
HashRouter.add = function(options){
	if(!options){
		throw new Error("Please send json object with {'hash':}");
	}

	if(HashRouter.routes[options.route]){
		throw new Error("Route already Exists " +options.route);
	}
	else{
		HashRouter.routes[options.route] = options
	}
	// options.route;
	// options.template;
	// options.beforeFunction;
	// options.afterFunction;
}

HashRouter.getRoute = function(routeName){
	if(HashRouter.routes[routeName]){
		return HashRouter.routes[routeName].template;
	}
	else{
		console.log("Route Not found " +routeName);
		return null;
	}
}
HashRouter.onHashChange = function(){
	var hash = window.location.hash;
	Session.set("route",hash);
	
	// if(app.routerFunction[hash])
	// 	app.routerFunction[hash]()
	// else
	// 	app.routerFunction["#home"]();
}

$(window).on('hashchange',HashRouter.onHashChange);

HashRouter.add({"route" : "#login", "template" : "login"});
HashRouter.add({"route" : "#admin", "template" : "admin"});
HashRouter.add({"route" : "#register", "template" : "register"});
HashRouter.add({"route" : "#users", "template" : "users"});
HashRouter.add({"route" : "#docs", "template" : "docs"});
HashRouter.add({"route" : "#famous", "template" : "famous"});
HashRouter.add({"route" : "#morpher", "template" : "morpher"});
HashRouter.add({"route" : "#seeall", "template" : "morpher"});
HashRouter.add({"route" : "#home", "template" : "home"});

// app.router = {
// 	"#login" : "login",
// 	"#admin" : "admin",
// 	"#register" : "register",
// 	"#users" : "users",
// 	"#docs" : "docs",
// 	"#famous" : "famous",
// 	"#home" : "home",
// 	"#morpher" : "morpher",
// 	"#seeall" : "seeall"
// }
// app.routerFunction = {
// 	"#login" : function () {
//     },
// 	"#admin" : function (pause) {
//     },
// 	"#register" : function () {
// 	},
// 	"#users" : function () {
//     },
// 	"#docs" : function () {
//     },
//     "" : function (pause) {
//     },
// 	"#loginScreen" : function (pause) {
//     },
// 	"#addword" : function (pause) {
// 	},
// 	"#debug" : function (pause) {
// 	},
// 	"#feedback" : function (pause) {
//     },
// 	"#forgot" : function (pause) {
//     },
// 	"#seeall" : function (pause) {
//     },
//     "#famous" : function (pause) {
//     },
//     "#home" : function (pause) {
//     }, 
//     "#morpher" : function (pause) {
//     }, 
// }



HashRouter.onHashChange();


Router = {};
Router.go = function(hash){
	window.location.hash = hash;
}