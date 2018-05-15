$(document).ready(function(){
 mainFunction();
 })


function mainFunction(){
  //get data from session storage
  var dataFlight = JSON.parse(window.sessionStorage.getItem("flightData"));

  console.log("Flight:", dataFlight);
   //iterate through the array
     for(var i=0; i < dataFlight.length; i++){
     console.log("enters function");
         $('#table').append(
         //add everything to the table
             '<tr>' +
             '<td>' + dataFlight[i].name + '</td>' +
             '<td>' + dataFlight[i].fuel + '</td>' +
             '<td>' + dataFlight[i].departureAirport + '</td>' +
             '<td>' + dataFlight[i].destinationAirport + '</td>' +
             '<td>' + '<button type="button" name="button['+i+']" id="buttonFly'+i+'" onclick="fly('+i+')">' + 'Fly' + '</button>' + '</td>' +
             '</tr>'
     )};
 }

 //function for flying
function fly(i){
//getting data from session storage
var dataFlight = JSON.parse(window.sessionStorage.getItem("flightData"));
//checking if there is enough fuel to fly
if (dataFlight[i].fuel>=2)
{
//giving valid message, resetting the fuel, saving in the session storage and repopulating the table by calling mainFunction again
alert("Your flight has just been processed!");
dataFlight[i].fuel=dataFlight[i].fuel-2;
window.sessionStorage.setItem("flightData", JSON.stringify(dataFlight));
$('#table tbody').empty();
mainFunction();
}
else
{
//a message to show in case if the fuel is less than necessary for flying
alert("Unfortunately your airplane does not have enough fuel to fly. Please refill!");
}
}