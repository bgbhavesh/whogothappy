Template.admin_approved.helpers({
    image : function(){
    	return UploadImages.find({approve:"approved"}, {limit:16});
         // return Keywords.find({}, {sort: {count:-1}, limit:25});
    },
    gamedisplay : function(){
        if (UploadImages.find({approve:"approved"}, {limit:16})) {
        return "" 
        }else{
        return"hide"
        }
    },
})
Template.admin_approved.events({
    "click #startGameUser": function(event, t){
        $("#GameUser").removeClass("disabled")
        $("#startdiv").addClass("hide")
      
    },
    "click #clickImg": function(event, t){
    var imagee_changed = UploadImages.find({approve:"approved"}).fetch()
    console.log(imagee_changed)
    var res = imagee_changed.sort(function(a,b){return (Math.random()-0.5)});
        $(event.currentTarget).parent().parent().find(".s").toggleClass("flipped")
        var classfilter = $(event.currentTarget).parent().parent().find(".m")
            // console.log(classfilter)
        for (var i = 0; i < res.length; i++) {
            var s = res[i].url
            $(classfilter[i]).attr('src',s)
        };    
      
    },
})