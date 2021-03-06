function callTime() { 

    // var starttime = new Date().getTime();
    // log("Template.timeShow.events.callTime started",null,arguments,1);
          
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
    // log("Template.timeShow.events.callTime ended",new Date().getTime() - starttime,arguments,1);
}

$(document).ready(function() {
  callTime();
});

setInterval(callTime, 1000);

/*  to set the countdown to 9 and 11 am */
function setTimeForGame(){
    app.target_date = new Date();
    if(app.target_date.getHours() > 9 && app.target_date.getHours() < 12)
    {
        app.target_date.setHours(11);
    }
    else{
        app.target_date.setHours(9);    
    }

    app.target_date.setMinutes(0);
    app.target_date.setSeconds(0);
    // console.log(app.target_date.getHours())
    app.target_date = app.target_date.getTime("");    
}

setTimeForGame();
/*  to set the countdown to 9 and 11 am */

var days, hours, minutes, seconds;
setInterval(function () {
 
    var current_date = new Date().getTime();
    var seconds_left = (app.target_date - current_date) / 1000;

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    if(app.target_date - current_date <0){
        $('#countDown h2').text("00" + ':' + "00" + ':' + "00"  );  
        $('#countDownText').text("You can start the Game"  );  
    }
    else
    {
        $('#countDown h2').text(hours + ':' + minutes + ':' + seconds  );  
        $('#countDownText').text("Game will be start soon"  ); 
    }    
}, 1000);
Template.timeShow.events({
'click .daTe': function (e) {
        // $(".daTe").css("display","none")
        // $(".countDown").css("display","block")
        $(".daTe").slideUp('fast',function(){
            $(".daTe").addClass('hide')
                 .slideDown(0);
          });
        $(".countDown").slideUp(0,function(){
            $(".countDown").removeClass('hide')
                 .slideDown('fast');
          });
    },
  });
Template.countDownShow.events({
    'click .countDown': function () {
        $(".countDown").slideUp('fast',function(){
            $(".countDown").addClass('hide')
                 .slideDown(0);
          });
        $(".daTe").slideUp(0,function(){
            $(".daTe").removeClass('hide')
                 .slideDown('fast');
          }); 
    }
  });