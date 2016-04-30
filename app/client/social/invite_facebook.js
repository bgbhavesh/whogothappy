app.inviteWithFacebook = function(){
	 FB.ui({method: 'apprequests',
		message: 'Welcome to '+app.name +'!'
	}, function(response){
	    console.log(response);
	});
}