WebApp.connectHandlers.use("/", function(req, res, next) {
	req.setHeader("Access-Control-Allow-Origin", "*");
	next();
});