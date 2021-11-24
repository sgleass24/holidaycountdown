// runClock();
// setInterval("runClock()", 1000);

// function runClock(){
//     var currentDay = new Date();
//     var dateStr = currentDay.toLocaleDateString();
//     var timeStr = currentDay.toLocaleTimeString();

//     document.getElementById("datenow").innerHTML = dateStr + "</br>" + timeStr;

//     var newYear = newDate ("January 1, 2022");
//     var nextYear = currentDay.getFullYear() + 1;
//     newYear.setFullYear(nextYear);
//     var daysLeft = (newYear - currentDay)/(1000*60*60*24);

//     var hrsLeft = (dayLeft - Math.floor(daysLeft))*24;
//     var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
//     var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

//     document.getElementById("days").textContent = Math.floor(daysLeft);
//     document.getElementById("hrs").textContent = Math.floor(hrsLeft);
//     document.getElementById("mins").textContent = Math.floor(minsLeft);
//     document.getElementById("secs").textContent = Math.floor(secssLeft);
// }




var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();


var newYear = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;

 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.getElementById("newyear").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("newyear").innerHTML = "EXPIRED";
  }
}, 1000);
