Template.home.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
    'click .move-left': function (e){
        $(".move-left").removeClass('move-left')                    
    },
    'click .move-right': function (e){
        $(".move-right").removeClass('move-right')                    
    },
    'click .left-off-canvas-toggle': function (e){
        $(".off-canvas-wrap").addClass('move-right')                    
    },
    'click .right-off-canvas-toggle': function (e){
       $(".off-canvas-wrap").addClass('move-left')      
    },
    
});

Template.home.place = function(){
	// Session.get("reactivePlace");
	// return app.places;
}

