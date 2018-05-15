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
             '<td>' + '<input value="1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataFlight['+i+'].refillAmount" id="refillAmount'+i+'">' + '</td>' +
             '<td>' + '<button type="button" name="button['+i+']" id="buttonRefill'+i+'" onclick="refill('+i+')">' + 'Refill' + '</button>' + '</td>' +
             '</tr>'
     )};
 }

//function for refilling the tank
function refill(i){
//get data from session storage
var dataFlight = JSON.parse(window.sessionStorage.getItem("flightData"));
//outputing valid message about the refill
alert("Your plane has just been refilled!");
//getting the refill amount
var amount = $('#refillAmount'+i+'').val();

dataFlight[i].refillAmount=amount;
//summing, using converter from string to number
dataFlight[i].fuel=+dataFlight[i].fuel+ +dataFlight[i].refillAmount;
//saving in a session storage
window.sessionStorage.setItem("flightData", JSON.stringify(dataFlight));

//clearing the table
$('#table tbody').empty();

//recreating the table by calling the mainFunction
mainFunction();
}