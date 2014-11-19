WebApp.connectHandlers.use("/", function(req, res, next) {
	console.log(req.url)
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});