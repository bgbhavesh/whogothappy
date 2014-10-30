if(window.Pince){
	Pince._browserOut = function(){};
	Pince._browserErr = function(){};
	Pince.out = function(){};
	Pince.err = function(){};
}
// app.famous = {}
// app.famous.carousel = {};


// // /images/expression/{}/.gif
// app.famousCarousel = function(){
// 	var setTime = new Date().getTime();
//     log("famousCarousel" + setTime,1);
// 	var content = '';
// 	var secondcontent = '';
// 	var thirdcontent = '';
// 	// var content = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
// 	// var secondcontent = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
// 	for(var i=0,il=16;i<il;i++){
// 		content += '<img class="th image" src="/image/expression/' +expressionImage[app.randomNumber(0,63)] +' +">';
// 		secondcontent += '<img class="th image" src="/image/expression/' +expressionImage[app.randomNumber(0,63)] +' +">';
// 		thirdcontent += '<img class="th image" src="/image/expression/' +expressionImage[app.randomNumber(0,63)] +' +">';
// // 		<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
// //   <li><!-- Your content goes here --></li>
// //   <li><!-- Your content goes here --></li>
// //   <li><!-- Your content goes here --></li>
// //   <li><!-- Your content goes here --></li>
// //   <li><!-- Your content goes here --></li>
// //   <li><!-- Your content goes here --></li>
// // </ul>
// 	}
// 	// content += '</ul>';
// 	// secondcontent += '</ul>';

// 		if(!app.famous.carousel.require){
// 			setTimeout(app.famousCarousel,1000);
// 			return;
// 		}
// 		var width = window.innerWidth - 50;
// 		$("#carousel").html("").css({"height": width+"px","width": width+"px"});
// 		var require = app.famous.carousel.require
// 	    var Engine      = require("famous/core/Engine");
// 	    var Surface     = require("famous/core/Surface");
// 	    var EdgeSwapper = require("famous/views/EdgeSwapper");

// 	    var mainContext = Engine.createContext(document.getElementById('carousel'));

// 	    var edgeswapper = new EdgeSwapper();
// 	    var squareSize = (window.innerWidth < window.innerHeight)? window.innerWidth : window.innerHeight;
// 	    var squareSize = squareSize * 0.99;
// 	    var primary = new Surface({
// 	        size: [squareSize, squareSize],
// 	        content: content,
// 	        classes: ["red-bg"],
// 	        properties: {
// 	            lineHeight: window.innerHeight + "px",
// 	            textAlign: "center"
// 	        }
// 	    });

// 	    var secondary = new Surface({
// 	        size: [squareSize, squareSize],
// 	        content: secondcontent,
// 	        classes: ["grey-bg"],
// 	        properties: {
// 	            lineHeight: 2 + "px",
// 	            textAlign: "center"
// 	        }
// 	    });

// 	    // var third = new Surface({
// 	    //     size: [undefined, undefined],
// 	    //     content: "Third",
// 	    //     classes: ["blue"],
// 	    //     properties: {
// 	    //         lineHeight: window.innerHeight + "px",
// 	    //         textAlign: "center"
// 	    //     }
// 	    // });

// 	    mainContext.add(edgeswapper); 

// 	    edgeswapper.show(primary);

// 	    var showing = true;
// 	    Engine.on("click", function() {
// 	        if (showing) {
// 	            edgeswapper.show(secondary);
// 	            showing = false;
// 	        } else {
// 	            edgeswapper.show(primary);
// 	            showing = true;
// 	        }
// 	    });
// 	log("famousCarousel" + (new Date().getTime() - setTime),1);
// }

// // Template.famous.rendered = app.famousCarousel;

