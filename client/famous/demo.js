
function randomNumber(snum, bnum){
	var value = Math.floor((Math.random()*bnum)+1);
	if(value >= snum && value <= bnum){
		return value
	}
	else{
		return randomNumber(snum, bnum);
	}
}
app.randomNumber = randomNumber;
var content = [];
content[0] = "";
content[1] = "";
content[2] = "";
content[3] = "";
// var content = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
// var secondcontent = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
var images = [
	"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/p720x720/10584046_845220068823602_5591708197704025239_n.jpg?oh=e4186813c5717c5b46be83762c5c210e&oe=5473D37A&__gda__=1416507549_e6b329bed53510e92f64b7145e917c63",
	"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t1.0-9/s720x720/10649897_10152712405562498_6710115276875482460_n.jpg",
	"https://scontent-b.xx.fbcdn.net/hphotos-xpa1/t1.0-9/10646800_10150421504254964_6754082462884194277_n.jpg",
	"http://scontent-a.cdninstagram.com/hphotos-xap1/t51.2885-15/10507998_661466653908597_1518392066_a.jpg",
	"http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598482_679056828851410_1634877021_a.jpg",
	"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/s720x720/10576979_10152248000940738_5076184865816379698_n.png?oh=b8a94728e93b72cf4a029bf7b8a6ae1d&oe=5483EC37&__gda__=1418784456_0328d5a1f747fd531067d65a04b853e9",
	"https://scontent-b.xx.fbcdn.net/hphotos-xpf1/t1.0-9/p720x720/10003920_10152307853166778_818779237387912397_n.png",
	"http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598482_679056828851410_1634877021_a.jpg",
	"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/q71/s720x720/983744_10152324395423063_7024437546927514540_n.jpg?oh=23ca95d5bbc81ac637e22cd08e942c94&oe=544873EA&__gda__=1414635004_b4eba1a63cee09747b104c3ad082d9cf",
	"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/q92/s720x720/1077422_10154468463290046_6819551478449619233_o.jpg",
	"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfa1/t1.0-9/s720x720/10593194_696463783770199_5913310630033656252_n.jpg",
	"https://scontent-a.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/s720x720/10599394_10154591744035691_8516022172893919916_n.jpg?oh=d8034b1959db5b5c29931d3e50b2ec14&oe=5465E0DF",
	"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/t31.0-8/s720x720/10608594_756378927752199_4853884118170546373_o.jpg"
];

var expressionImage = [];
var expressionImageJoy = [];


//////////////////////////////////////////closed/////////////////////////////////////
/*
expressionImage.push("anger.anger");
expressionImage.push("anger.disgust");
expressionImage.push("anger.fear");
expressionImage.push("anger.neutral");
expressionImage.push("anger.sadness");
expressionImage.push("anger.surprise");

expressionImage.push("disgust.anger");
expressionImage.push("disgust.disgust");
expressionImage.push("disgust.fear");
expressionImage.push("disgust.neutral");
expressionImage.push("disgust.sadness");
expressionImage.push("disgust.surprise");

expressionImage.push("fear.anger");
expressionImage.push("fear.disgust");
expressionImage.push("fear.fear");
expressionImage.push("fear.neutral");
expressionImage.push("fear.sadness");
expressionImage.push("fear.surprise");

expressionImage.push("neutral.anger");
expressionImage.push("neutral.disgust");
expressionImage.push("neutral.fear");
expressionImage.push("neutral.neutral");
expressionImage.push("neutral.sadness");
expressionImage.push("neutral.surprise");

expressionImage.push("sadness.anger");
expressionImage.push("sadness.disgust");
expressionImage.push("sadness.fear");
expressionImage.push("sadness.neutral");
expressionImage.push("sadness.sadness");
expressionImage.push("sadness.surprise");

expressionImage.push("surprise.anger");
expressionImage.push("surprise.disgust");
expressionImage.push("surprise.fear");
expressionImage.push("surprise.neutral");
expressionImage.push("surprise.sadness");
expressionImage.push("surprise.anger");
expressionImage.push("surprise.surprise");

// expressionImage.push("joy.anger");
// expressionImage.push("joy.disgust");
// expressionImage.push("joy.fear");
// expressionImage.push("joy.joy");
// expressionImage.push("joy.neutral");
// expressionImage.push("joy.sadness");
// expressionImage.push("joy.surprise");
// expressionImage.push("anger.joy");
// expressionImage.push("disgust.joy");
// expressionImage.push("fear.joy");
// expressionImage.push("neutral.joy");
// expressionImage.push("sadness.joy");
// expressionImage.push("surprise.joy");


expressionImageJoy.push("joy.anger");
expressionImageJoy.push("joy.disgust");
expressionImageJoy.push("joy.fear");
expressionImageJoy.push("joy.joy");
expressionImageJoy.push("joy.neutral");
expressionImageJoy.push("joy.sadness");
expressionImageJoy.push("joy.surprise");
expressionImageJoy.push("anger.joy");
expressionImageJoy.push("disgust.joy");
expressionImageJoy.push("fear.joy");
expressionImageJoy.push("neutral.joy");
expressionImageJoy.push("sadness.joy");
expressionImageJoy.push("surprise.joy");

var assetManager = new AssetManager();
var downloadstarttime = new Date().getTime();
log("Images all downloaded started",downloadstarttime,null,1);
for(var i=0,il=expressionImage.length;i<il;i++){
	var image = "/images/expression/" +expressionImage[i]  +".gif";
	assetManager.add(Random.id(), image);
}
for(var i=0,il=expressionImageJoy.length;i<il;i++){
	var image = "/images/expression/" +expressionImageJoy[i]  +".gif";
	assetManager.add(Random.id(), image);
}
assetManager.add(Random.id(),"/images/expression/smily.jpg")
assetManager.downloadAll(function(){
	log("Images all downloaded complete",new Date().getTime() - downloadstarttime,arguments,1);
});
// console.log(expressionImageJoy.length); 13
// console.log(expressionImage.length); 41
*/
//////////////////////////////////////////closed/////////////////////////////////////


for(var i=0,il=40;i<il;i++){
	var j = app.randomNumber(1,1000);
	expressionImage.push("a"+j);
}



for(var i=0,il=20;i<il;i++){
	var j = app.randomNumber(1,110);
	expressionImageJoy.push("joy"+j);
}

var assetManager = new AssetManager();
var downloadstarttime = new Date().getTime();
log("Images all downloaded started",downloadstarttime,null,1);


for(var i=0,il=expressionImage.length;i<il;i++){
	var image = "https://s3-us-west-2.amazonaws.com/youiest/non/" +expressionImage[i]  +".jpg";
	assetManager.add(Random.id(), image);
}
for(var i=0,il=expressionImageJoy.length;i<il;i++){
	var image = "https://s3-us-west-2.amazonaws.com/youiest/joy/" +expressionImageJoy[i]  +".jpg";
	assetManager.add(Random.id(), image);
}
assetManager.add(Random.id(),"./images/expression/smily.png")
assetManager.downloadAll(function(){
	log("Images all downloaded complete",new Date().getTime() - downloadstarttime,arguments,1);
});









var endtime;
var totalTime;
var result;
// var slideStartTime;
app.score = {};
app.score.method = [];
app.totalscore = 0;
Template.views_EdgeSwapper.helpers({
	'showTemplate': function() {
		return Template[this.name];
	}
});
var count;
var content = [];
var firstContent = [];
app.famousContent = function(flip){
	var joyFirstRandom = app.randomNumber(0,15);
	var joySecondRandom = app.randomNumber(0,15);
	// var content = [];
	var oldContent = "";
	// if(!count || count == 0){
		for(var i=0,il=16;i<il;i++){ 
			if(joyFirstRandom == i)
				oldContent += "<img src='https://s3-us-west-2.amazonaws.com/youiest/joy/" +expressionImageJoy[app.randomNumber(0,12)]  +".jpg' draggable='false'/>";//oldContent += "<img src='./images/joy/" +expressionImageJoy[app.randomNumber(0,12)]  +".jpg' draggable='false'/>";
			else
					oldContent += "<img src='https://s3-us-west-2.amazonaws.com/youiest/non/" +expressionImage[app.randomNumber(0,36)]  +".jpg' draggable='false'/>";
			if(!content[i])
				content[i] = {};
			if(flip){
				if(joySecondRandom == i)
				content[i].second = "<img src='https://s3-us-west-2.amazonaws.com/youiest/joy/" +expressionImageJoy[app.randomNumber(0,12)]  +".jpg' draggable='false'/>";
				else
					content[i].second = "<img src='https://s3-us-west-2.amazonaws.com/youiest/non/" +expressionImage[app.randomNumber(0,36)]  +".jpg' draggable='false'/>";
			}
			else{
				if(joyFirstRandom == i)
				content[i].first = "<img src='https://s3-us-west-2.amazonaws.com/youiest/joy/" +expressionImageJoy[app.randomNumber(0,12)]  +".jpg' draggable='false'/>";
				else
					content[i].first = "<img src='https://s3-us-west-2.amazonaws.com/youiest/non/" +expressionImage[app.randomNumber(0,36)]  +".jpg' draggable='false'/>";
			}
			
		}
		// count = 15
	// }
	return content;
}
app.famousContent(true);
app.famousContent(false);
Template.content.image = function(){
	app.slideStartTime = new Date().getTime();

	
	// var starttime = new Date().getTime();
 //    log("Template.content.image started",null,arguments,1);
 //    log("Template.content.image ended",new Date().getTime() - starttime,arguments,1);
	return app.famousContent(Session.get("flip"));
	// "<img src='/images/expression/" +expressionImage[app.randomNumber(0,60)]  +".gif'/>";
}
Session.setDefault('flip', ''); 
Template.content.flip = function(){
	return Session.get("flip");
}
Template.firstContent.content = function(){
	return app.famousContent(); 
	// "<img src='/images/expression/" +expressionImage[app.randomNumber(0,60)]  +".gif'/>";
}
Template.secondContent.content = function(){
	return app.famousContent(); 
}
// Template.content.contentBoth = function(){
// 	return app.famousContent();
// }

Session.setDefault('esTemplate', 'es_surface1'); 
Template.views_EdgeSwapper.esTemplate = function() {
	return Session.get('esTemplate');
}
Session.setDefault('esTemplateMy', 'es_surface3');
Template.firstContent.esTemplateMy = function(){
	return Session.get('esTemplateMy');
}
Template.firstContent.helpers({
	'showTemplate': function() {
		return Template[this.name];
	}
});
Template.secondContent.esTemplateMy = function(){
	return Session.get('esTemplateMy');
}
Template.secondContent.helpers({
	'showTemplate': function() {
		return Template[this.name];
	}
});
app.edgeswapperNumber = 1;
app.getEdgerSwapper = function(){
	if(app.edgeswapperNumber == 1)
		app.edgeswapperNumber = 2;
	else
		app.edgeswapperNumber = 1;
	return app.edgeswapperNumber;
}
app.clickStart = true;
var contentEvent = {
	"slideLeft #clickEvent":function(){
		console.log("123123132")
	},
	"click #clickEvent img" : function(event){
		console.log(app.clickStart)
		if(app.clickStart == false)
			return;
		app.clickStart = false;
		var str = $(event.currentTarget).attr("src");
		var res = str.match("joy");
		var mainDiv = $("#clickEvent");
		var joySrc = "";
		// console.log(mainDiv)
		var imgs = mainDiv.children();
		var imgState = mainDiv.children()[0].className.toString()//
		// console.log(imgState)
		var flag  = imgState.match("flipped");
		if(Session.get("flip")){
			var imgsUrl = $("#clickEvent div figure.back img");
			for(var i=0,il=imgsUrl.length;i<il;i++){
				var imgSrc = imgsUrl[i].getAttribute("src")
				if(imgSrc.match("joy")){
					joySrc = imgsUrl[i].src;
					imgsUrl[i].src = "./images/expression/smily.png";
					setTimeout(function(){
						app.changeFace(joySrc,res);
					},500);
				}
			}
		}else{
			var imgsUrl = $("#clickEvent div figure.front img");
			for(var i=0,il=imgsUrl.length;i<il;i++){
				var imgSrc = imgsUrl[i].getAttribute("src")
				if(imgSrc.match("joy")){
					joySrc = imgsUrl[i].src;
					imgsUrl[i].src = "./images/expression/smily.png";
					setTimeout(function(){
						app.changeFace(joySrc,res);
					},500);
				}
			}

		}
		endtime = new Date().getTime()
		totalTime = endtime - app.slideStartTime;
		var delay = 2000;
		count--;

		if(res){
			// event.target.src = "/images/expression/smily.png"
			if(app.score.method){
				if(app.score.method.length!=0){
					if(totalTime<3501){
						result = 1;
					}else{
						result = 0.5;
					}
				}else{
						result = 1;
				}
			}
			// delay = 2000;
			app.totalscore = app.totalscore + result;
		}else{
			result = 0;
		}
        app.score.method.push({
            "slideStartTime": app.slideStartTime,
            "endtime": endtime,
            "totalTime": totalTime,
            "result": result,
            "extra": ""
        });
		$(".myScore").text(app.totalscore);
       
        
		setTimeout(function(){
			app.clickStart = true;
			app.animateFamousRandom();
			if(Session.get("flip"))
				Session.set("flip","");
			else
				Session.set("flip","flipped");
			// Session.set("esTemplate", "es_surface" +app.getEdgerSwapper())
		},delay);
	}
}

app.changeFace = function(faceSrc,res){
	if(Session.get("flip")){
		var imgsUrl = $("#clickEvent div figure.back img");
		for(var i=0,il=imgsUrl.length;i<il;i++){
			var imgSrc = imgsUrl[i].getAttribute("src")
			if(imgSrc.match("smily")){
				joySrc = imgsUrl[i].src;
				imgsUrl[i].src = faceSrc;
				if(!res){
					imgsUrl[i].style.height = "98%";
					imgsUrl[i].style.width = "98%";
					imgsUrl[i].style.border= "solid";
					imgsUrl[i].style.borderColor = "rgb(158, 158, 26)";
				}
			}
		}
	}else{
		var imgsUrl = $("#clickEvent div figure.front img");
		for(var i=0,il=imgsUrl.length;i<il;i++){
			var imgSrc = imgsUrl[i].getAttribute("src")
			if(imgSrc.match("smily")){
				imgsUrl[i].src = faceSrc;
				if(!res){
					imgsUrl[i].style.height = "98%";
					imgsUrl[i].style.width = "98%";
					imgsUrl[i].style.border= "solid";
					imgsUrl[i].style.borderColor = "rgb(158, 158, 26)";
				}
				// imgsUrl[i].addClass("selectedFace");
			}
		}

	}
}
Template.firstContent.events(contentEvent);
Template.secondContent.events(contentEvent);
Template.content.events(contentEvent);

app.animateFamousFlag = false; 
app.animateFamousRandom = function(){
	switch(app.randomNumber(1,4)){
		case 1 : 
			app.animateFamouseFirst();
		break;
		case 2 : 
			app.animateFamouseSecond();
		break;
		case 3 : 
			app.animateFamouseThird();
		break;
		case 4 : 
			app.animateFamouseFourth();
		break;
	}
}
app.animateFamouseFirst = function(){
	var flipCount = 0;
    if(Session.get("flip")){
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).removeClass("flipped");},100*flipCount++);
    	});
    }
    else{
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).addClass("flipped");},100*flipCount++);
    	});
    }
}

app.animateFamouseSecond = function(){
	var flipCount = 0;
    if(Session.get("flip")){
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).removeClass("flipped");},app.randomNumber(100,1600));
    	});
    }
    else{
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).addClass("flipped");},app.randomNumber(100,1600));
    	});
    }
}

app.animateFamouseThird = function(){
	var flipCount = 0;
    if(Session.get("flip")){
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).removeClass("flipped");},100);
    	});
    }
    else{
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).addClass("flipped");},100);
    	});
    }
}

app.animateFamouseFourth = function(){
	var flipCount = 16;
    if(Session.get("flip")){
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).removeClass("flipped");},100*flipCount--);
    	});
    }
    else{
    	$(".card").each(function(index,element){
    		setTimeout(function(){$(element).addClass("flipped");},100*flipCount--);
    	});
    }
}
app.addFixedSizeImg = function(){
	var widthWidow = $(window).width();
	widthWidow = widthWidow - 110;
	var eachImg = widthWidow/4;
	console.log(eachImg)
	// $(".card").css("width",eachImg);
	$(".card").css("height",eachImg);
}
