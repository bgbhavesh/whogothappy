app.startGame = function(){
	startTimer();
	console.log("game Started");
}

var hours =0;
var mins =0;
var seconds =0;



function startTimer(){
  	var timex = setTimeout(function(){
      seconds++;
    if(seconds >59){
			seconds=0;
			mins++;
                       
		    if(mins<10){                     
		      	$("#gametimemins").text('0'+mins+':');}       
			else 
				$("#gametimemins").text(mins+':');
       	}    
    	if(seconds <10) {
			$("#gametimeseconds").text('0'+seconds);} 
		else {
			$("#gametimeseconds").text(seconds);
      	}
      	if(mins >= 10){
				endGame();
		}
		else{
			startTimer();
		}
        
  },1000);
}
function endGame(){
	console.log("game Ended");
	var tempDate = new Date();
	tempDate.setHours(tempDate.getHours()+12);
	app.target_date = tempDate;
}    
