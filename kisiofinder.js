//Get a random number from 0 to size
 var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
 };
 
//Calculate distance between click event and target
 var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
 };
 
//Get a string representing the distance
 var getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Upa³!";
 } else if (distance < 20) {
 return "Gor¹co.";
 } else if (distance < 60) {
 return "Cieplej.";
 } else if (distance < 100) {
 return "Ciep³o.";
 } else if (distance < 200) {
 return "Zimno.";
 } else if (distance < 350) {
 return "Bardzo zimno.";
 } else {
 return "Zima!";
 }
 };
 
 //Set up our variables
 var width = 400;
 var height = 400;
 var clicks = 0;
 var clickLimit = 10;
 
//Create a random target location
 var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
 };
 
//Add a click handler to the img element
 $("#map").click(function (event) {
  clicks++;
  
  //Get distance between click event and target
  var distance = getDistance(event, target);
  //Convert distance to a hint
  var distanceHint = getDistanceHint(distance);
  
  //Update the #distance element with the new hint
  $("#distance").text(distanceHint);
  //Update the #clicksleft with amount of clicks left
  $("#clicksleft").text(clickLimit - clicks)
 
  //If the click was close enough, tell them they won
  if (distance < 8) {
    document.getElementById('map').src='kisiomapa3.png';
    document.getElementById('kisiosong').play();
    setTimeout(function() {
      alert("Znalaz³eœ Izê Kisio w " + clicks + " klikniêæ!");
      window.location.reload();
    },100)
    }
   
  if (clicks == 10) {
    document.getElementById('map').src='kisiomapa2.png';
    setTimeout(function() {
    alert("Nie znalaz³eœ Izy Kisio. Spróbuj jeszcze raz!");
    window.location.reload();
    },100)
    }
 });