/**
 * Copyright (c) 2014 Famous Industries, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a 
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
 * IN THE SOFTWARE.
 *
 * @license MIT
 */

/**
 * EdgeSwapper
 * ------------
 *
 * EdgeSwapper is a container which handles swapping 
 * renderables from the edge of its parent context.
 *
 * In this example, we toggle the view that is shown on every
 * click.
 */
var content = '<img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1"><img class="ui small rounded image" src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/p180x540/10679607_10152700860443291_2608149880326614773_o.jpg" likeid="10152700860443291" source="recommend" type="1">';
var secondcontent = '<img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg"><img class="ui small rounded image tosee" src="https://scontent-b.xx.fbcdn.net/hphotos-xfp1/t1.0-9/10590609_10152701576576554_111158067907161837_n.jpg">';
define(function(require, exports, module) {
    app.famous.carousel.require = require;
    return;
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
});
