
app.randomNumber = function (snum, bnum){
	var value = Math.floor((Math.random()*bnum)+1);
	if(value >= snum && value <= bnum){
		return value
	}
	else{
		return randomNumber(snum, bnum);
	}
}
// app.randomNumber = randomNumber;
var content = [];
content[0] = "";
content[1] = "";
content[2] = "";
content[3] = "";

var expressionImage = [];
var expressionImageJoy = [];

function setImages(){
	calAccu = 0
	for(var img=1,imgcount=20;img<=imgcount;img++){
		expressionImage.push("jn"+img);
	}
	expressionImageJoy.push("j1");


	
	// var folderName;
	// var assetManager = new AssetManager();
	// var downloadstarttime = new Date().getTime();
	// log("Images all downloaded started",downloadstarttime,null,1);
	// for(var grp=0,group=1;grp<=group;grp++){
	// 	if(grp==0)
	// 		folderName = "asian";
	// 	else
	// 		folderName = "black";

	// 	for(var g=0,gen=1;g<gen;g++){
	// 		if(g==0){
	// 			for(var p=1,pcount=6;p<pcount;p++){
	// 				for(var i=0,il=expressionImage.length;i<il;i++){
	// 					var image = "./images/faces1/"+folderName+"/male/p"+p+"/non/" +expressionImage[i]  +".jpg";
	// 					assetManager.add(Random.id(), image);
	// 				}
	// 				for(var i=0,il=expressionImageJoy.length;i<il;i++){
	// 					var image = "./images/faces1/"+folderName+"/male/p"+p+"/joy/" +expressionImageJoy[i]  +".jpg";
	// 					assetManager.add(Random.id(), image);
	// 				}
	// 			}
	// 		}else if(g==1){
	// 			for(var p=1,pcount=6;p<pcount;p++){
	// 				for(var i=0,il=expressionImage.length;i<il;i++){
	// 					var image = "./images/faces1/"+folderName+"/female/p"+p+"/non/" +expressionImage[i]  +".jpg";
	// 					assetManager.add(Random.id(), image);
	// 				}
	// 				for(var i=0,il=expressionImageJoy.length;i<il;i++){
	// 					var image = "./images/faces1/"+folderName+"/female/p"+p+"/joy/" +expressionImageJoy[i]  +".jpg";
	// 					assetManager.add(Random.id(), image);
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	// for(var i=0,il=19;i<il;i++){
	// 	var image = "./images/faces1/oldface/male/p1/non/" +expressionImage[i]  +".jpg";
	// 	assetManager.add(Random.id(), image);
	// }
	// for(var i=0,il=1;i<il;i++){
	// 	// console.log(expressionImageJoy[i])
	// 	var image = "./images/faces1/oldface/male/p1/joy/" +expressionImageJoy[i]  +".jpg";
	// 	assetManager.add(Random.id(), image);
	// }
	// assetManager.add(Random.id(),"./images/expression/smily.png")
	// assetManager.downloadAll(function(){
	// 	log("Images all downloaded complete",new Date().getTime() - downloadstarttime,arguments,1);
	// });
}

function createCases(){
	// console.log(app.settings);
	var twoHundered = [];
	var data = null;
	for(var i=0,il=200;i<il;i++){
		data = famousContent(true);	
		twoHundered.push({"index":i,"data":data});
	}
	var insert = {"_id":"1","twoHundered":twoHundered};
	app.insertCases(insert);
	// console.log(app.twoHundered)
}

function famousContent(flip){
	// if(!app.newcase)
	app.newcase = app.randomNumber(1,9);;
	// Meteor.call("getCase",app.newcase,function(err,data){
	// 	// app.newcase = data;
		// console.log(app.newcase)
	// });
	// newcase = 9;
	switch(app.newcase){//app.randomNumber(1,8)){
		case 1 : 
			// console.log("1");
			return setAllMaleOrFemale(flip,"female")///all female different group
		break;
		case 2 : 
			// console.log("2");
			return setAllMaleOrFemale(flip,"male")///all male different group
		break;
		case 3 :
			// console.log("3"); 
			return setAllMaleOrFemale(flip,"male","asian")///all male asian
		break;
		case 4 : 
			// console.log("4");
			return setAllMaleOrFemale(flip,"female","asian")///all female asian
		break;
		case 5 : 
			// console.log("5");
			return setAllMaleOrFemale(flip,"male","","","same")///all male same group
		break;
		case 6 : 
			// console.log("6");
			return setAllMaleOrFemale(flip,"female","","","same")///all male same group
		break;
		case 7 : 
			// console.log("7");
			return setAllMaleOrFemale(flip,"","","","same")///all same group
		break;
		case 8 : 
			// console.log("8");
			return setAllMaleOrFemale(flip)///all complete random
		break;
		case 9 : 
			// console.log("9");
			return setAllMaleOrFemale(flip,"male","oldface","1")///all old faces
		break;
	}
	// return app.setAllMaleOrFemale(flip)
}
var genderArray = ["female","male","female"];
var groupArray = ["asian","asian","black","dutch"];
var personArray = [0,1,2,3,4,5,6];
function setAllMaleOrFemale(flip,gender,group,person,grouptype){
	// console.log("sdvkjsdnkj")
	content = [];
	var joyFirstRandom = app.randomNumber(0,15);
	var joySecondRandom = app.randomNumber(0,15);
	var oldContent = "";
	var tempGender = null;
	var tempGroup = null;
	var tempPerson = null;

	if(grouptype=="same"){
		// console.log(grouptype)
		tempGroup = group || groupArray[app.randomNumber(0,3)];
	}
	for(var i=0,il=16;i<il;i++){ 
		tempGender = gender || genderArray[app.randomNumber(0,2)];
		if(grouptype){
			if(grouptype!="same"){
				tempGroup = group || groupArray[app.randomNumber(0,3)];
			}
		}else{
			tempGroup = group || groupArray[app.randomNumber(0,3)];
		}
		tempPerson = person || personArray[app.randomNumber(1,6)];
		if(!content[i])
			content[i] = {};
		// if(flip){
			if(joySecondRandom == i)
			content[i].second = "<img src='./images/faces1/"+tempGroup+"/"+tempGender+"/p"+tempPerson+"/joy/" +expressionImageJoy[0]  +".jpg' draggable='false'/>";
			else
				content[i].second = "<img src='./images/faces1/"+tempGroup+"/"+tempGender+"/p"+tempPerson+"/non/" +expressionImage[app.randomNumber(0,19)]  +".jpg' draggable='false'/>";
		// }
		// else{
			// console.log(flip+"/"+gender+"/"+group+"/"+person+"/"+grouptype);
	
			if(joyFirstRandom == i)
			content[i].first = "<img src='./images/faces1/"+tempGroup+"/"+tempGender+"/p"+tempPerson+"/joy/" +expressionImageJoy[0]  +".jpg' draggable='false'/>"; //.first
			else
				content[i].first = "<img src='./images/faces1/"+tempGroup+"/"+tempGender+"/p"+tempPerson+"/non/" +expressionImage[app.randomNumber(0,19)]  +".jpg' draggable='false'/>"; //.first
		// }
		
	}
	// console.log("***********")
	// console.log(content);
	return content;
}

// app.famousContent(true);
// app.famousContent(false);  

Meteor.startup(function(){
	// if(app.debug)
	// 	return;
	Meteor.setTimeout(function(){
		setImages();
		createCases();
	},100);
})

Meteor.setInterval(function(){
	createCases();
},600000);
Meteor.methods({
	"resetTwoHundered" : function(){
		createCases();
		return true;
		// return app.twoHundered;
	}
});