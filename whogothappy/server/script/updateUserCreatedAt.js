// Meteor.startup(function(){
//   if(app.debug)
//     return;
//   User.find().forEach(function(user){
//     if(!user.profile.createdAt){
//       User.update(user._id, {$set: {
//         "profile.createdAt": app.getDate()
//       }});
//     }
//   });
// });