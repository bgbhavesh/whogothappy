// Deps.autorun(function() {
//     if(!Meteor.userId()){
//       Router.go('login');
//     }
// })

 // if($(window).width() > $(window).height()*0.6)
 //    {
 //        $(".container").width($(window).height()*0.6);
 //    }
 //    else
 //    {    
        
 //    }

$(window).bind("orientationchange", function(event){
    // var orientation = window.orientation;
    // var new_orientation = (orientation != 90 && orientation != -180 && orientation b != -90 ) ? 0 : 180 + orientation;
    // $('body').css({
    //     "-webkit-transform": "rotate(" + new_orientation + "deg)"
    // });
	event.preventDefault()
});