app.logoUrl = "http://www.inhousehabits.com.au/wp-content/uploads/2013/03/DC051.jpg";
app.name = "WordDance";
app.onShareFlag = null;
app.onShareFacebook = function(message){
	try{
		
		if(app.phonegap)
			window.plugins.socialsharing.shareViaFacebook(message,"http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance', app.onShareSuccess, app.onShareError);
		else
			log("Not a phonegap user");
	}
	catch(err){
		alert(err);
	}
}

app.onShareTwitter = function(message){
	
	if(app.phonegap)
		window.plugins.socialsharing.shareViaTwitter("WORDdance", message, "http://thumb.dance/img/assets/home-logo@2x.png", 'http://thumb.dance',app.onShareSuccess, app.onShareError);
	else
		log("Not a phonegap user");
}

app.onShareAny = function(message){
	window.plugins.socialsharing.share(app.name , message, app.logoUrl, null,app.onShareSuccess, app.onShareError); 
}

app.onShareError = function(){
	app.visualEffect(app.onShareFlag,app.onError);
	
}

app.onShareSuccess = function(){
	app.visualEffect(app.onShareFlag,app.onSuccess);
}