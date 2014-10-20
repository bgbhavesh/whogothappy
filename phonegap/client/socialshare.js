app.logoUrl = "http://www.inhousehabits.com.au/wp-content/uploads/2013/03/DC051.jpg";
app.name = "WordDance";
app.onShareFlag = null;
app.onShareFacebook = function(message){
	var starttime = new Date().getTime();
    log("onShareFacebook " +starttime,1);
	try{
		
		if(app.phonegap)
			window.plugins.socialsharing.shareViaFacebook(message,"http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance', app.onShareSuccess, app.onShareError);
		else
			log("Not a phonegap user");
	}
	catch(err){
		alert(err);
	}
	log("onShareFacebook " + (new Date().getTime() - starttime),1);
}

app.onShareTwitter = function(message){
	var starttime = new Date().getTime();
    log("onShareTwitter " +starttime,1);
	if(app.phonegap)
		window.plugins.socialsharing.shareViaTwitter("WORDdance", message, "http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance',app.onShareSuccess, app.onShareError);
	else
		log("Not a phonegap user");
	log("onShareTwitter " + (new Date().getTime() - starttime),1);
}

app.onShareAny = function(message){
	var starttime = new Date().getTime();
    log("onShareAny " +starttime,1);
	window.plugins.socialsharing.share(app.name , message, app.logoUrl, null,app.onShareSuccess, app.onShareError); 
	log("onShareAny " + (new Date().getTime() - starttime),1);
}

app.onShareError = function(){
	var starttime = new Date().getTime();
    log("onShareError " +starttime,1);
	app.visualEffect(app.onShareFlag,app.onError);
	log("onShareError " + (new Date().getTime() - starttime),1);
}

app.onShareSuccess = function(){
	var starttime = new Date().getTime();
    log("onShareSuccess " +starttime,1);
	app.visualEffect(app.onShareFlag,app.onSuccess);
	log("onShareSuccess " + (new Date().getTime() - starttime),1);
}