app.adminUser = ["1797896033","100000002030165","100000488108267"];
app.isAdmin = function(user){
	for(var i=0,il=app.adminUser.length;i<il;i++){
		if(user._id = app.adminUser[i])
			return true;		
	}
	return false;
}