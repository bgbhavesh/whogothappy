
function randomNumber(snum, bnum){
	var value = Math.floor((Math.random()*100%bnum)+1);
	if(value >= snum && value <= bnum)
		return value
	else
		return randomNumber(snum, bnum);
}
app.randomNumber = randomNumber;


var expressionImage = [];
var expressionImageJoy = [];

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
// console.log(expressionImageJoy.length); 13
// console.log(expressionImage.length); 41

var endtime;
var totalTime;
var result;
app.score = {};
app.score.method = [];
Template.views_EdgeSwapper.helpers({
	'showTemplate': function() {
		return Template[this.name];
	}
});
app.famousContent = function(){
	var content = "";
	var joyRandom = app.randomNumber(0,15);
	for(var i=0,il=16;i<il;i++){
		if(joyRandom == i)
			content += "<img src='/images/expression/" +expressionImageJoy[app.randomNumber(0,12)]  +".gif'/>";
		else
			content += "<img src='/images/expression/" +expressionImage[app.randomNumber(0,35)]  +".gif'/>";
	}
	return content;
}
Template.content.image = function(){
	return app.famousContent(); 
	// "<img src='/images/expression/" +expressionImage[app.randomNumber(0,60)]  +".gif'/>";
}

Session.setDefault('esTemplate', 'es_surface1'); 
Template.views_EdgeSwapper.esTemplate = function() {
	app.slideStartTime = new Date().getTime();
	return Session.get('esTemplate');
}

app.edgeswapperNumber = 1;
app.getEdgerSwapper = function(){
	if(app.edgeswapperNumber == 1)
		app.edgeswapperNumber = 2;
	else
		app.edgeswapperNumber = 1;
	return app.edgeswapperNumber;
}

Template.content.events({
	"click #clickEvent" : function(){
		var str = event.target.src; 
		var res = str.match("joy");
		var delay = 100;
		if(res){
			event.target.src = "/images/expression/smily.jpg"
			result = 1;
			delay = 200;
		}else{
			result = 0;
		}
		endtime = new Date().getTime()
		totalTime = endtime - app.slideStartTime;
		// console.log(slideStartTime);
		// console.log(endtime);
		// console.log(totalTime);
        app.score.method.push({
            "slideStartTime": app.slideStartTime,
            "endtime": endtime,
            "totalTime": totalTime,
            "result": result,
            "extra": ""
        });
		setTimeout(function(){
			Session.set("esTemplate", "es_surface" +app.getEdgerSwapper());
		},delay);
	}
});