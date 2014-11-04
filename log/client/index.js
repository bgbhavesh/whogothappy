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

 var curYPos = 0,
    curXPos = 0,
    curDown = false;

window.addEventListener('mousemove', function(e){ 
  if(curDown === true){
    window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
  }
});

window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
window.addEventListener('mouseup', function(e){ curDown = false; });
