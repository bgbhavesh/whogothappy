Template.home.events({
	// 'click .clickEvent': function () {
	// 	Session.set("placeId",null);
	// 	Session.set("placeId",this.place_id);
	// 	Session.set("placeName",this.name);
	// }
    'click .move-left': function (e){
        $(".move-left").removeClass('move-left')                    
    },
    'click .move-right': function (e){
        $(".move-right").removeClass('move-right')                    
    },
    'click .left-off-canvas-toggle': function (e){
        $(".off-canvas-wrap").addClass('move-right')                    
    },
    'click .right-off-canvas-toggle': function (e){
       $(".off-canvas-wrap").addClass('move-left')      
    },
    
});

Template.home.place = function(){
	// Session.get("reactivePlace");
	// return app.places;
}

function callTime() {
  var date = new Date();
  var hour = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var period = hour <= 11 ? "AM" : "PM";
  hour = hour % 12 ;

  var dd = date.getDate();
  var mm = date.getMonth();
  var yy = date.getFullYear();

  var day = date.getDay();

  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
  var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (hour<10) {
    hour = '0' + hour  ;
  } 

  if (m<10) {
    m = '0' + m  ;
  }

  if (s<10) {
    s = '0' + s  ;
  }

  $('#dateView').text(dd + '/' + (parseInt(mm)+1) + '/' + yy + " " + dayNames[day]);  
  $('#timeView h2').text(hour + ':' + m + ':' + s + ' ' + period); 
}

$(document).ready(function() {
  callTime();
});

setInterval(callTime, 1000);


var target_date = new Date("dec 22,2014").getTime();
var days, hours, minutes, seconds;
// var countdown = document.getElementById("countdown");
setInterval(function () {
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
 
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    $('#countDown h2').text(hours + ':' + minutes + ':' + seconds  );  
   
 
}, 1000);