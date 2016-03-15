var cameraImages = [
    {"url":"http://i.imgur.com/U1uysOY.jpg"},
    {"url":"http://i.imgur.com/1nK2e3B.jpg"},
    {"url":"http://i.imgur.com/F6B6eXu.jpg"},
    {"url":"http://i.imgur.com/Rf0Fzkx.jpg"},
    {"url":"http://i.imgur.com/CChUW4M.jpg"}
];
var selectedImg = ""
Template.select.events({
    "click img": function(e, t){
        // $(e.currentTarget).parent("div").remove();
        selectedImg = this.url
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
        var data = {};
        data.url = selectedImg;
        data.imgType = "sad";
        if(Meteor.userId()){
            data.createdBy = Meteor.userId();
        }
        UploadImages.insert(data)
        $("#setImageTypePopup").hide();
    },
    "click #rateHappy": function(e, t){
        // $(e.currentTarget).parent("div").remove();
        var data = {};
        data.url = selectedImg;
        data.imgType = "happy";
        if(Meteor.userId()){
            data.createdBy = Meteor.userId();
        }
        UploadImages.insert(data)
        $("#setImageTypePopup").hide();
    },
});