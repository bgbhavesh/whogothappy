app.testVimeoToken = "23fcb82f052416284e32f085bdf30a42";

app.testVimeo = function(){
	// Meteor.setTimeout(function(){
	// 	var videoSearchUrl = "https://api.vimeo.com/videos?access_token="+app.testVimeoToken+"&query=people";
	// 	//"https://api.vimeo.com/me?access_token="+app.testVimeoToken;
	// 	// "http://vimeo.com/api/v2/user29302327/all_videos.json";// +app.testVimeoToken; //+"&query=people"
	// 	var result = Meteor.http.get(videoSearchUrl);
	// 	console.log(result)
	// },100);
}

/*

OAuth 2

Client Identifier
fbf4c22bcb0b9456938d3324335bdeb978f057b6
Client Secret
4b9e496a4a2e9c8954480192e1007afd2632e223
Request Token URL
https://api.vimeo.com/oauth/request_token
Authorize URL
https://api.vimeo.com/oauth/authorize
Access Token URL
https://api.vimeo.com/oauth/access_token
Your Callback URLs (edit)
http://localhost:3000/vimeo
Your unauthenticated authorization header 
Your access token
Authorization : Basic ZmJmNGMyMmJjYjBiOTQ1NjkzOGQzMzI0MzM1YmRlYjk3OGYwNTdiNjo0YjllNDk2YTRhMmU5Yzg5NTQ0ODAxOTJlMTAwN2FmZDI2MzJlMjIz

You can use this OAuth Access Token to access your account with this app.
Access token
23fcb82f052416284e32f085bdf30a42
Scope
public private upload
Your authenticated authorization header
Authorization : Bearer 23fcb82f052416284e32f085bdf30a42

*/