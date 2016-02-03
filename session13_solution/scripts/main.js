function main() {
    
  // set up a new date object 
  var today = new Date();
  //extract the hour min and seconds and store them in a variable 
  var curr_hour = today.getHours();
  var curr_minute = today.getMinutes();
  var curr_second = today.getSeconds();
  
  var cur_time = curr_hour + ":" + curr_minute + ":" + curr_second;
  console.log(cur_time);    
  // inset id into p element with the id of clock-large
  document.getElementById("clock-large").innerHTML = cur_time;
    
 //get reference to button 
 var myButton =  document.getElementById("startClock");
  myButton.addEventListener("click", startTime);    
    

}

function startTime(){
 console.log("you clicked a button");  
 setInterval(main, 500);
}