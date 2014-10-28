

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






Router = {};
Router.go = function(hash){
	window.location.hash = hash;
}