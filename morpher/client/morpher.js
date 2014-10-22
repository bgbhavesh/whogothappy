Template.morpher.events({
    'click #play': function () {
      	runMorpher();
    }
});
Template.morpher.rendered = function(){

}
runMorpher = function(event){
	$('.preview canvas').remove()
	var json = {"images":[{"points":[{"x":0,"y":0},{"x":0,"y":204},{"x":144,"y":0},{"x":144,"y":204},{"x":72,"y":102}],"src":"images/expression/anger.anger.gif","x":0,"y":0},{"points":[{"x":0,"y":0},{"x":0,"y":204},{"x":144,"y":0},{"x":144,"y":204},{"x":72,"y":102}],"src":"images/expression/anger.joy.gif","x":0,"y":0}],"triangles":[[0,1,4],[3,1,4],[0,2,4],[3,2,4]]};
    if(!app.Morpher)
    	app.Morpher = new Morpher(json); 
    $('.preview').prepend(app.Morpher.canvas);
    app.Morpher.set([1, 0]);
    app.Morpher.animate([0, 1], 2000);
}
// {"images":[{"points":[{"x":1,"y":1},{"x":2,"y":202},{"x":143,"y":202},{"x":143,"y":1}],"src":"anger.anger.gif","x":0,"y":0},{"points":[{"x":1,"y":1},{"x":2,"y":202},{"x":142.99999999999997,"y":201.99999999999991},{"x":142.99999999999994,"y":0.9999999999998863}],"src":"anger.joy.gif","x":0,"y":0}],"triangles":[]}


// images/expression/

// {"images":[{"points":[{"x":0,"y":2},{"x":0,"y":201},{"x":140,"y":202},{"x":142,"y":3},{"x":143,"y":3}],"src":"anger.anger.gif","x":0,"y":0},{"points":[{"x":0,"y":2},{"x":0,"y":201},{"x":140,"y":202},{"x":142,"y":3},{"x":144,"y":3}],"src":"anger.joy.gif","x":0,"y":0}],"triangles":[[2,1,4],[0,1,4]]}