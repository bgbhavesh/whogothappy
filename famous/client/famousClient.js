app.famous = {}
app.famous.carousel = {};
app.famousCarousel = function(){
	var content = '';
	var secondcontent = '';
	// var content = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
	// var secondcontent = '<ul class="small-block-grid-4 medium-block-grid-4 large-block-grid-4">';
	for(var i=0,il=16;i<il;i++){
		content += '<img class="th image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg">';
		secondcontent += '<img class="th image" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg">';
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

	    var primary = new Surface({
	        size: [undefined, undefined],
	        content: content,
	        classes: ["red-bg"],
	        properties: {
	            lineHeight: window.innerHeight + "px",
	            textAlign: "center"
	        }
	    });

	    var secondary = new Surface({
	        size: [undefined, undefined],
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
}

Template.famous.rendered = app.famousCarousel;