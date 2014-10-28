app.logoUrl = "http://www.inhousehabits.com.au/wp-content/uploads/2013/03/DC051.jpg";
app.name = "WordDance";
app.onShareFlag = null;
app.onShareFacebook = function(message){
	var starttime = new Date().getTime();
    log("app.onShareFacebook started",null,arguments,1);
	try{
		
		if(app.phonegap)
			window.plugins.socialsharing.shareViaFacebook(message,"http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance', app.onShareSuccess, app.onShareError);
		else
			log("Not a phonegap user");
	}
	catch(err){
		alert(err);
	}
    log("app.onShareFacebook ended",new Date().getTime() - starttime,arguments,1);
}

app.onShareTwitter = function(message){
	var starttime = new Date().getTime();
    log("app.onShareTwitter started",null,arguments,1);
	if(app.phonegap)
		window.plugins.socialsharing.shareViaTwitter("WORDdance", message, "http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance',app.onShareSuccess, app.onShareError);
	else
		log("Not a phonegap user");
    log("app.onShareTwitter ended",new Date().getTime() - starttime,arguments,1);
}

app.onShareAny = function(message){
	var starttime = new Date().getTime();
    log("app.onShareAny started",null,arguments,1);
	window.plugins.socialsharing.share(app.name , message, app.logoUrl, null,app.onShareSuccess, app.onShareError); 
    log("app.onShareAny ended",new Date().getTime() - starttime,arguments,1);
}

app.onShareError = function(){
	var starttime = new Date().getTime();
    log("app.onShareError started",null,arguments,1);
	app.visualEffect(app.onShareFlag,app.onError);
    log("app.onShareError ended",new Date().getTime() - starttime,arguments,1);
}

app.onShareSuccess = function(){
	var starttime = new Date().getTime();
    log("app.onShareSuccess started",null,arguments,1);
	app.visualEffect(app.onShareFlag,app.onSuccess);
    log("app.onShareSuccess ended",new Date().getTime() - starttime,arguments,1);
}