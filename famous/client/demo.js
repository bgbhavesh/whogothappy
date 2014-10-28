
function randomNumber(snum, bnum){
	var starttime = new Date().getTime();
    log("randomNumber started",null,arguments,1);
	var value = Math.floor((Math.random()*100%bnum)+1);
	if(value >= snum && value <= bnum){
		log("randomNumber ended",new Date().getTime() - starttime,arguments,1);	
		return value
	}
	else{
		log("randomNumber ended",new Date().getTime() - starttime,arguments,1);
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
expressionImage.push("anger.anger");
expressionImage.push("anger.disgust");
expressionImage.push("anger.fear");
expressionImage.push("anger.joy");
expressionImage.push("anger.neutral");
expressionImage.push("anger.sadness");
expressionImage.push("anger.surprise");

expressionImage.push("disgust.anger");
expressionImage.push("disgust.disgust");
expressionImage.push("disgust.fear");
expressionImage.push("disgust.joy");
expressionImage.push("disgust.neutral");
expressionImage.push("disgust.sadness");
expressionImage.push("disgust.anger");
expressionImage.push("disgust.surprise");

expressionImage.push("fear.anger");
expressionImage.push("fear.disgust");
expressionImage.push("fear.fear");
expressionImage.push("fear.joy");
expressionImage.push("fear.neutral");
expressionImage.push("fear.sadness");
expressionImage.push("fear.anger");
expressionImage.push("fear.surprise");

expressionImage.push("joy.anger");
expressionImage.push("joy.disgust");
expressionImage.push("joy.fear");
expressionImage.push("joy.joy");
expressionImage.push("joy.neutral");
expressionImage.push("joy.sadness");
expressionImage.push("joy.anger");
expressionImage.push("joy.surprise");

expressionImage.push("neutral.anger");
expressionImage.push("neutral.disgust");
expressionImage.push("neutral.fear");
expressionImage.push("neutral.joy");
expressionImage.push("neutral.neutral");
expressionImage.push("neutral.sadness");
expressionImage.push("neutral.anger");
expressionImage.push("neutral.surprise");

expressionImage.push("sadness.anger");
expressionImage.push("sadness.disgust");
expressionImage.push("sadness.fear");
expressionImage.push("sadness.joy");
expressionImage.push("sadness.neutral");
expressionImage.push("sadness.sadness");
expressionImage.push("sadness.anger");
expressionImage.push("sadness.surprise");

expressionImage.push("anger.anger");
expressionImage.push("anger.disgust");
expressionImage.push("anger.fear");
expressionImage.push("anger.joy");
expressionImage.push("anger.neutral");
expressionImage.push("anger.sadness");
expressionImage.push("anger.anger");
expressionImage.push("anger.surprise");

expressionImage.push("surprise.anger");
expressionImage.push("surprise.disgust");
expressionImage.push("surprise.fear");
expressionImage.push("surprise.joy");
expressionImage.push("surprise.neutral");
expressionImage.push("surprise.sadness");
expressionImage.push("surprise.anger");
expressionImage.push("surprise.surprise");

for(var i=0,il=16;i<il;i++){
	content[0] = ""
	content[1] += "<img src='/images/expression/" +expressionImage[app.randomNumber(0,63)]  +".gif'/>"; //images[randomNumber(0,12)]
	content[2] += "<img src='/images/expression/" +expressionImage[app.randomNumber(0,63)]  +".gif'/>";
	content[3] += "<img src='/images/expression/" +expressionImage[app.randomNumber(0,63)]  +".gif'/>";
}
Template.views_EdgeSwapper.helpers({
	'showTemplate': function() {
		console.log(arguments);
		return Template[this.name];
	}
});

Template.content.image = function(){
	var starttime = new Date().getTime();
    log("Template.content.image started",null,arguments,1);
    log("Template.content.image ended",new Date().getTime() - starttime,arguments,1);
	return content[randomNumber(1,2)]; 
	// "<img src='/images/expression/" +expressionImage[app.randomNumber(0,60)]  +".gif'/>";
}

Session.setDefault('esTemplate', 'es_surface1'); 
Template.views_EdgeSwapper.esTemplate = function() {
	var starttime = new Date().getTime();
    log("Template.views_EdgeSwapper.esTemplate started",null,arguments,1);
    log("Template.views_EdgeSwapper.esTemplate ended",new Date().getTime() - starttime,arguments,1);
	return Session.get('esTemplate');
}


Template.content.events({
	"click #clickEvent" : function(){
		Session.set("esTemplate", "es_surface" +randomNumber(1,3))
	}
});