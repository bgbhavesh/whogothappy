app.logoUrl = "http://www.inhousehabits.com.au/wp-content/uploads/2013/03/DC051.jpg";
app.name = "WordDance";
app.onShareFlag = null;
app.onShareFacebook = function(message){
	var startTime = new Date().getTime();
    log("onShareFacebook " +startTime,1);
	try{
		
		if(app.phonegap)
			window.plugins.socialsharing.shareViaFacebook(message,"http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance', app.onShareSuccess, app.onShareError);
		else
			log("Not a phonegap user");
	}
	catch(err){
		alert(err);
	}
	log("onShareFacebook " +(new Date().getTime() - startTime),1);
}

app.onShareTwitter = function(message){
	var startTime = new Date().getTime();
    log("onShareTwitter " +startTime,1);
	if(app.phonegap)
		window.plugins.socialsharing.shareViaTwitter("WORDdance", message, "http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance',app.onShareSuccess, app.onShareError);
	else
		log("Not a phonegap user");
	log("onShareTwitter " +(new Date().getTime() - startTime),1);
}

app.onShareAny = function(message){
	var startTime = new Date().getTime();
    log("onShareAny " +startTime,1);
	window.plugins.socialsharing.share(app.name , message, app.logoUrl, null,app.onShareSuccess, app.onShareError); 
	log("onShareAny " +(new Date().getTime() - startTime),1);
}

app.onShareError = function(){
	var startTime = new Date().getTime();
    log("onShareError " +startTime,1);
	app.visualEffect(app.onShareFlag,app.onError);
	log("onShareError " +(new Date().getTime() - startTime),1);
}

app.onShareSuccess = function(){
	var startTime = new Date().getTime();
    log("onShareSuccess " +startTime,1);
	app.visualEffect(app.onShareFlag,app.onSuccess);
	log("onShareSuccess " +(new Date().getTime() - startTime),1);
}