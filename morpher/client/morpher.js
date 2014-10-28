Template.morpher.events({
    'click #play': function () {
        runMorpher();
    }
});
Template.morpher.rendered = function(){

}
runMorpher = function(event){
    log("Template.morpher.events.runMorpher ended",new Date().getTime() - starttime,arguments,1);
    var starttime = new Date().getTime();
    $('.preview canvas').remove()
    var json = {"images":[{"points":[{"x":0,"y":0},{"x":0,"y":204},{"x":144,"y":0},{"x":144,"y":204},{"x":72,"y":102}],"src":"images/expression/anger.anger.gif","x":0,"y":0},{"points":[{"x":0,"y":0},{"x":0,"y":204},{"x":144,"y":0},{"x":144,"y":204},{"x":72,"y":102}],"src":"images/expression/anger.joy.gif","x":0,"y":0}],"triangles":[[0,1,4],[3,1,4],[0,2,4],[3,2,4]]};
    if(!app.Morpher)
        app.Morpher = new Morpher(json); 
    $('.preview').prepend(app.Morpher.canvas);
    app.Morpher.set([1, 0]);
    app.Morpher.animate([0, 1], 2000);
    log("Template.morpher.events.runMorpher started",null,arguments,1);
}