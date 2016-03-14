var cameraImages = [
    "http://i.imgur.com/U1uysOY.jpg",
    "http://i.imgur.com/1nK2e3B.jpg",
    "http://i.imgur.com/F6B6eXu.jpg",
    "http://i.imgur.com/Rf0Fzkx.jpg",
    "http://i.imgur.com/CChUW4M.jpg"
];
Template.select.events({
    "click img": function(e, t){
        // $(e.currentTarget).parent("div").remove();
        $("#setImageTypePopup").show();
    }
});

Template.select.helpers({
    "images": function(){
        return cameraImages;
    }
});



Template.setImageTypePopup.events({
    "click #rateSad": function(e, t){
        // $(e.currentTarget).parent("div").remove();
        $("#setImageTypePopup").hide();
    },
    "click #rateHappy": function(e, t){
        // $(e.currentTarget).parent("div").remove();
        $("#setImageTypePopup").hide();
    },
});