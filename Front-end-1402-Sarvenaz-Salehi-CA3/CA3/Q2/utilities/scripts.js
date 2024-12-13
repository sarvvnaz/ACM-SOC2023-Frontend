// Set the date we're counting down to

var countDownDate = new Date("March 25, 2024 23:45:25").getTime();
console.log(countDownDate);

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.querySelector("#days .countdown-num").innerHTML = days;
document.querySelector("#hours .countdown-num").innerHTML = hours;
document.querySelector("#mins .countdown-num").innerHTML = minutes;
document.querySelector("#secs .countdown-num").innerHTML = seconds;

}, 1000);
