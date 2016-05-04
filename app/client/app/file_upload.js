app.cloudinary = {};
app.cloudinary.cloud_name = "hastenf";
app.cloudinary.api_key = "327139278191112";
app.cloudinary.unsigned = "pytzaemo";
app.cloudinary.flag = false;
app.uploadedImg = "";
$.cloudinary.config({cloud_name: app.cloudinary.cloud_name, api_key: app.cloudinary.api_key});

app.cloudinary.imageUpload = function(){
    // console.log("upload")
    $('#file-img').unsigned_cloudinary_upload(app.cloudinary.unsigned,
        { cloud_name: 'hastenf', tags: 'my_gallary_picture' },
        { multiple: false }
    ).bind('cloudinarydone', function(e, data) {
        var image = data.result.secure_url;
        console.log(image);
        var middle = "w_100,h_100,c_fill";
        var new_img_url = null;
        var img_url = image
        new_img_url = img_url.replace("image/fetch/","image/fetch/"+middle+"/");
        img_url = img_url.split("upload/")
        var first = img_url[0] +"upload/";
        var second = "/" +img_url[1].split("/")[1];
        new_img_url = first +middle + second;
        var data = {};
        data.url = new_img_url;
        data.imgType = "happy";
        if(Meteor.userId()){
            data.createdBy = Meteor.userId();
        }
        UploadImages.insert(data)

        // Meteor.users.update({"_id":Meteor.userId()},{$set:{"profile.profilePicture":new_img_url}});
        // app.uploadedImg = new_img_url
        // $("#temp_square_image").attr("src", app.uploadedImg);
        // $("#uploadProgress").css("opacity",1.0).html("100%");
        // app.cloudinary.hideProgress();
    }).bind('cloudinaryprogress', function(e, data) {
        var progress = Math.round((data.loaded * 100.0) / data.total) + '%';
        console.log(progress)
        // $("#uploadProgress").css("opacity",1.0).html(progress);
    }).bind("fileuploadfail",function(e,data){
        console.log("fileuploadfail");
        // $("#uploadProgress").css("opacity",1.0).html("!");
        // app.cloudinary.hideProgress();
    });
}

// app.cloudinary.hideProgress = function(){
//     setTimeout(function(){
//         $("#uploadProgress").css("opacity",0.0).html("");
//     },100)
// }