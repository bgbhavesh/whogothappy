app.logoUrl = "http://www.inhousehabits.com.au/wp-content/uploads/2013/03/DC051.jpg";
app.name = "Tapmate";
app.onShareFlag = null;
app.onShareFacebook = function(message){
	try{

		if(app.phonegap)
			window.plugins.socialsharing.shareViaFacebook(message,"https://thumb.dance/img/assets/home-logo@2x.png", 'https://thumb.dance', app.onShareSuccess, app.onShareError);
		else
			log("Not a phonegap user");
	}
	catch(err){
		// alert(err);
	}
}

app.onShareTwitter = function(message){

	if(app.phonegap)
		window.plugins.socialsharing.shareViaTwitter(app.name, message, message, 'https://thumb.dance',app.onShareSuccess, app.onShareError);
	else
		log("Not a phonegap user");
}

app.onShareAny = function(message, picture){
	if(app.phonegap)
		window.plugins.socialsharing.share("Shared from Tapmate" , message, picture, null,app.onShareSuccess, app.onShareError);
	else
		app.visualEffect();
}

app.onShareError = function(){
	app.visualEffect(app.onShareFlag,app.onError);
}

app.onShareSuccess = function(){
	app.visualEffect(app.onShareFlag,app.onSuccess);
}
app.visualEffect = function(){
	$(".onSharePicture")
		.addClass("share alternate")
		.removeClass("spinner");
}
app.onSharePicture = function(){
	$(".onSharePicture")
		.removeClass("share alternate")
		.addClass("spinner");
	var image = $(".bigImage").attr("src") || $(".justImage").attr("src");
	app.onShareAny("Shared from Tapmate", image);
}