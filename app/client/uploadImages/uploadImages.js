Template.uploadImages.onRendered(function () {
    console.log("test")
    app.cloudinary.imageUpload();
});

Template.uploadImages.helpers({
    "uploadImg" : function(){
        return UploadImages.find().fetch()
    },
})
