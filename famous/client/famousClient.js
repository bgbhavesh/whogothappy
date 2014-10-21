if(window.Pince){
	Pince._browserOut = function(){};
	Pince._browserErr = function(){};
	Pince.out = function(){};
	Pince.err = function(){};
}

app.famous = {}
app.famous.carousel = {};
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

// /images/expression/{}/.gif
app.famousCarousel = function(){
	var setTime = new Date().getTime();
    log("famousCarousel" + setTime,1);
	var content = '';
	var secondcontent = '';
	// var content = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
	// var secondcontent = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
	for(var i=0,il=16;i<il;i++){
		content += '<img class="th image" src="">';
		secondcontent += '<img class="th image" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg">';
// 		<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
//   <li><!-- Your content goes here --></li>
//   <li><!-- Your content goes here --></li>
//   <li><!-- Your content goes here --></li>
//   <li><!-- Your content goes here --></li>
//   <li><!-- Your content goes here --></li>
//   <li><!-- Your content goes here --></li>
// </ul>
	}
	// content += '</ul>';
	// secondcontent += '</ul>';

		if(!app.famous.carousel.require){
			setTimeout(app.famousCarousel,1000);
			return;
		}
		var width = window.innerWidth - 50;
		$("#carousel").html("").css({"height": width+"px","width": width+"px"});
		var require = app.famous.carousel.require
	    var Engine      = require("famous/core/Engine");
	    var Surface     = require("famous/core/Surface");
	    var EdgeSwapper = require("famous/views/EdgeSwapper");

	    var mainContext = Engine.createContext(document.getElementById('carousel'));

	    var edgeswapper = new EdgeSwapper();
	    var squareSize = (window.innerWidth < window.innerHeight)? window.innerWidth : window.innerHeight;
	    var squareSize = squareSize * 0.99;
	    var primary = new Surface({
	        size: [squareSize, squareSize],
	        content: content,
	        classes: ["red-bg"],
	        properties: {
	            lineHeight: window.innerHeight + "px",
	            textAlign: "center"
	        }
	    });

	    var secondary = new Surface({
	        size: [squareSize, squareSize],
	        content: secondcontent,
	        classes: ["grey-bg"],
	        properties: {
	            lineHeight: 2 + "px",
	            textAlign: "center"
	        }
	    });

	    // var third = new Surface({
	    //     size: [undefined, undefined],
	    //     content: "Third",
	    //     classes: ["blue"],
	    //     properties: {
	    //         lineHeight: window.innerHeight + "px",
	    //         textAlign: "center"
	    //     }
	    // });

	    mainContext.add(edgeswapper); 

	    edgeswapper.show(primary);

	    var showing = true;
	    Engine.on("click", function() {
	        if (showing) {
	            edgeswapper.show(secondary);
	            showing = false;
	        } else {
	            edgeswapper.show(primary);
	            showing = true;
	        }
	    });
	log("famousCarousel" + (new Date().getTime() - setTime),1);
}

// Template.famous.rendered = app.famousCarousel;

