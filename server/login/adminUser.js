app.adminUser = ["Bhavesh Gupta","Hasten Fernandes","Nicolson D'souza","Elias Mossman","vViber"];
app.isAdmin = function(user){
	for(var i=0,il=app.adminUser.length;i<il;i++){
		if(user.username = app.adminUser[i])
			return true;		
	}
	return false;
}