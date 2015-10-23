app.randomNumber = function(snum, bnum){
  var value = Math.floor((Math.random()*bnum)+1);
  if(value >= snum && value <= bnum){
    return value
  }
  else{
    return randomNumber(snum, bnum);
  }
}