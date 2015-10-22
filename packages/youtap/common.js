app = {};
if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000")){
	log = console.log.bind(console);
}	
else{
	log = console.log.bind(console);
	// log = function(arguments){

	// }
}
