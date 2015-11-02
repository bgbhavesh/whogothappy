app.expert = {};
app.expert.image = [
];

app.expert.get = function(){
	
	app.newcase = app.randomNumber(1,5);

	switch(app.newcase){//app.randomNumber(1,8)){
		case 1 :
			// console.log("3");
			return app.setAllMaleOrFemale("male","asian")///all male asian
		break;
		case 2 :
			// console.log("4");
			return app.setAllMaleOrFemale("female","asian")///all female asian
		break;
		case 3 :
			// console.log("5");
			return app.setAllMaleOrFemale("male","black")///all male same group
		break;
		case 4 :
			// console.log("6");
			return app.setAllMaleOrFemale("female","black")///all male same group
		break;
		case 5 :
			// console.log("7");
			return app.setAllMaleOrFemale("male","oldface")///all same group
		break;

	}
	
}


app.setAllMaleOrFemale = function(gender,folderName){

				var expressionImage = [];
				var expressionImageJoy = [];
				var smileDuration;

			for(var img=1,imgcount=20;img<=imgcount;img++){
				expressionImage.push("jn"+img);
			}
			expressionImageJoy.push("j1");


			var prefix= "https://s3-us-west-2.amazonaws.com/youiest/";
			// prefix = "./images/";
		
			gender=gender;
			folderName=folderName;
			var truePosition = app.randomNumber(0,15);
  			var images = [];
  			 for(var i=0,il=16;i<il;i++){
            if(i == truePosition)
			  images.push({"image":prefix +"faces1/"+folderName+"/"+gender+"/p"+1+"/joy/" +expressionImageJoy[0]   +".jpg","winner": true})
			else
	    	 images.push({"image": prefix +"faces1/"+folderName+"/"+gender+"/p"+1+"/non/" +expressionImage[i] +".jpg", "winner": false});

			}
			return images;
	}


	app.expert.validate = function(opt){

	  var ele = opt.evt.currentTarget;
	  var clickedPicture = $(ele)
	   // .children(".image").children("img")
	    .attr("winner");
	   
	   if(clickedPicture== "true"){
	    $(ele).transition('tada');
	    app.scoredPoints += app.config.points[app.gameLevel];
	  }
	  else{
	    $(ele).transition('shake');
	  }


	  app.setScore();
}