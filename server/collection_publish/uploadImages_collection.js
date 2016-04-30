Meteor.publish("uploadImages", function(id) {
  return UploadImages.find();
})