Template.camera.helpers({
    "images": function(){
        return UploadImages.find().fetch();
    }
});
Template.camera.events({
    "click #takePicture": function(e, t){
        if(Meteor.isCordova){
            try{
                Camera = navigator.camera;
                // alert(Camera.MediaType.DATA_URL)
                // alert(Camera.EncodingType.JPEG)
                // alert(Camera.Direction.FRONT)
                Camera.getPicture(onPictureReceived
                ,
                function(err){
                    alert(err);
                },
                {
                    // destinationType:    0, // Camera.MediaType.DATA_URL,
                    // encodingType:       0, // Camera.EncodingType.JPEG,
                    cameraDirection:    1, // Camera.Direction.FRONT
                }
                );

            }catch(err){
                alert(err);
            }
        }else{
            // if(app.debug)
                onPictureReceived(fakeImage);
            alert("Cannot take picture from a browser at this moment.");
        }
    }
});

onPictureReceived = function(imgLocation){
    try{

    // alert("I have image "+imgLocation);
    // $("#myPictureData").attr("src", "data:image/jpeg;base64," + imgData);
    // imgLocation = imgLocation.replace("file:///", "content://")
    // $("#myPictureLocation, #myPictureData").attr("src", imgLocation);
       var reader = new FileReader();
       reader.onloadend = function(evt) {
           alert("Read as data URL");
           alert(evt.target.result);
           $("#myPictureLocation, #myPictureData").attr("src", evt.target.result);
        };
        reader.onerror = function(err){
            alert(err)
        }
        reader.readAsDataURL(imgLocation);
    }catch(err){
            alert(err);
        }
}

var fakeImage = "data:image/png;base64,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";