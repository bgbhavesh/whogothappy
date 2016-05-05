Template.uploadImages.onRendered(function () {
    console.log("test")
    app.cloudinary.imageUpload();
});

Template.uploadImages.helpers({
    "uploadImg" : function(){
        return UploadImages.find({createdBy:Meteor.userId()}).fetch()
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
