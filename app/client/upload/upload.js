var count = 1;
Session.set("selected_image",[])
Template.upload.helpers({
    "images": function(){
        return UploadImages.find().fetch();
    },
    "display": function(){
        // console.log(this)
         if (this.approve == "approved"){        
            return "selectedimg"
        }else{
            return "";
        }
    },
    "buttonFlag" : function(){
        var selected_image = Session.get("selected_image");
        if(selected_image.length == 6){
            return ""
        }else{
            return "hide"
        }
    },
    "selected_images" : function(){
        var selected_image = Session.get("selected_image");
        var imagesel_arr = [];
        var imagesel_url = [];
        var imagesel_id = []
        for (var i = 0; i < selected_image.length; i++) { 
        var find = UploadImages.findOne({_id:selected_image[i]});
        var find_url = UploadImages.findOne({_id:selected_image[i]}).url  
        var find_id = UploadImages.findOne({_id:selected_image[i]})._id
        imagesel_arr.push(find);
        imagesel_url.push(find_url);
        imagesel_id.push(find_id)
        // console.log(imagesel_url , imagesel_id)
        Session.set("changeimage",imagesel_url)
        Session.set("changeImageId",imagesel_id)
        };
        return imagesel_arr;
        
    },

});

Template.upload.events({
    "click #uploaded_img": function(event, t){
        
        var selected_image = Session.get("selected_image")
        if ($(event.currentTarget).parent().find("#uploaded_img").hasClass('selectedimg')) {
                $(event.currentTarget).parent().find("#uploaded_img").removeClass('selectedimg');

                var image =$(event.currentTarget).parent().find("#uploaded_img").attr("name");
                 // for (var s = 0; s < selected_image.length; s++) {
                    // console.log(selected_image[s])
                    // UploadImages.update({_id:image},{$set:{approve:"denied"}});
                    // console.log(UploadImages.findOne({_id:image},{$set:{approve:"denied"}}))
                // }; 
                selected_image.pop(image);
                // console.log(selected_image)
                Session.set("selected_image",selected_image)
        }else{
            if(selected_image.length == 6){
            return;
            }
            $(event.currentTarget).parent().find("#uploaded_img").addClass('selectedimg');
            var image =$(event.currentTarget).parent().find("#uploaded_img").attr("name");
            selected_image.push(image);

        // var current_clicked =$(event.currentTarget).parent().find("#uploaded_img").attr("name");

            // UploadImages.update({_id:image},{$set:{approve:"approved"}});

            Session.set("selected_image",selected_image)
        }
        // console.log(selected_image);
    },
    "click #select_img_button": function(event, t){
        $("#image_selector").addClass("hide");
        $("#game").removeClass("hide");
        $("#start").removeClass("hide");

    },
    "click #start": function(event, t){
        $("#game").removeClass("disabled");
        $("#start").addClass("hide");
    },

    "click #image": function(event, t){
    var click_count = count++;
    if (click_count == 3){
        $("#addflag").removeClass("hide");
        $("#removeflag").removeClass("hide");
    };
    var imagee_changed = Session.get("changeimage");
    var imgurl = imagee_changed
    var clickedImage = $(event.currentTarget).attr('src');
    var clickedImageUrl =UploadImages.findOne({url:clickedImage})._id;
    console.log(clickedImageUrl)
    // UploadImages.update({_id:clickedImageUrl},{$inc:{value:1}});
    var res = imagee_changed.sort(function(a,b){return (Math.random()-0.5)});
    // console.log(res)
        $(event.currentTarget).parent().parent().find(".flip").toggleClass("flipped")
        var classfilter = $(event.currentTarget).parent().parent().find(".s")
        for (var i = 0; i < res.length; i++) {
            var s = res[i]
            $(classfilter[i]).attr('src',s)
        };    
    },
    "dblclick #uploaded_img": function(event, t){
        var current_clicked =$(event.currentTarget).parent().find("#uploaded_img").attr("name");
            // $(event.currentTarget).parent().find("#uploaded_img").addClass('hide');
            // UploadImages.update({_id:current_clicked},{$set:{approve:"approved"}});
            // console.log( UploadImages.update({_id:current_clicked},{$set:{approve:"approved"}}))
        UploadImages.remove({_id:current_clicked});
    },
    "click #addflag": function(event, t){
        $("#game").addClass("hide");
        $("#image_selector").removeClass("hide");
     var imgid = Session.get("changeImageId")
        for (var n = 0; n < imgid.length; n++) {
            UploadImages.update({_id:imgid[n]},{$set:{flag:true,approve:"approved"}});
        };
    },
    "click #removeflag": function(event, t){
        $("#game").addClass("hide");
        $("#image_selector").removeClass("hide");
        var imgid = Session.get("changeImageId")
        for (var n = 0; n < imgid.length; n++) {
            UploadImages.update({_id:imgid[n]},{$set:{flag:false,approve:"denied"}});
        }; 
    },
});

Template.upload.rendered = function() {
    $('.datetimepicker').datetimepicker();
}