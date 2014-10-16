app.famous = {}
app.famous.carousel = {};
app.famousCarousel = function(){
	var content = '<img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1">';
	var secondcontent = '<img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg">';

		if(!app.famous.carousel.require){
			setTimeout(app.famousCarousel,1000);
			return;
		}
		$("#carousel").html("");
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
	            lineHeight: window.innerHeight + "px",
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