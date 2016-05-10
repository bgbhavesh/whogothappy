Template.uploadImages.onRendered(function () {
    console.log("test")
    app.cloudinary.imageUpload();
});
Template.upload.events({
    "click #new": function(event, t){
        // $("#game").removeClass('hide')
    },
})
Template.uploadImages.helpers({
    "uploadImg" : function(){
        // return UploadImages.find({approve:"accepted"})
        // console.log(UploadImages.find({approve:"accepted"}).fetch())
        return UploadImages.find({createdBy:Meteor.userId()}).fetch()
        // if (UploadImages.find({approve:"accepted"})){
        //     return "selected"
        // }else{
        //     return "";
        // }
    },
    "selected_dif" : function(){
        // // return UploadImages.find({approve:"accepted"})
        // // console.log(UploadImages.find({approve:"accepted"}).fetch())
        // // return UploadImages.find({createdBy:Meteor.userId()}).fetch()
        // var selected_img = Session.get("selected_image");
        // for (var i = 0; i < selected_img.length; i++) { 
        // var sels =   UploadImages.find({_id:selected_img[i]},{approve:"accepted"}).fetch()    
        // }
        // console.log(selected_img)
        // if (sels){
        //     return "selectedimg"
        // }else{
        //     console.log("accepted")
        //     return "";
        // }
    },
    "uploadImg_disp" : function(){
        if (Meteor.user())
        {
        	return " ";
        }
        else
        {
        	return "hide"
        }

    },
})
