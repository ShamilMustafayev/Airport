$(document).ready(function(){
 mainFunction();
 })


function mainFunction(){
  //$('#table td').empty();
  var dataFlight = JSON.parse(window.sessionStorage.getItem("flightData"));

  console.log("Flight:", dataFlight);

     for(var i=0; i < dataFlight.length; i++){
     console.log("enters function");
         $('#table').append(
             '<tr>' +
             '<td>' + dataFlight[i].name + '</td>' +
             '<td>' + dataFlight[i].fuel + '</td>' +
             '<td>' + '<input value="1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataFlight['+i+'].refillAmount" id="refillAmount'+i+'">' + '</td>' +
             '<td>' + '<button type="button" name="button['+i+']" id="buttonRefill'+i+'" onclick="refill('+i+')">' + 'Refill' + '</button>' + '</td>' +
             '</tr>'
     )};
 }

function refill(i){
var dataFlight = JSON.parse(window.sessionStorage.getItem("flightData"));
//var temporary = Number(dataFood[i].quantity);
alert("Your plane has just been refilled!");
var amount = $('#refillAmount'+i+'').val();
dataFlight[i].refillAmount=amount;
dataFlight[i].fuel=+dataFlight[i].fuel+ +dataFlight[i].refillAmount;
window.sessionStorage.setItem("flightData", JSON.stringify(dataFlight));
$('#table tbody').empty();
mainFunction();
}