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
             '<td>' + dataFlight[i].departureAirport + '</td>' +
             '<td>' + dataFlight[i].destinationAirport + '</td>' +
             '<td>' + '<button type="button" name="button['+i+']" id="buttonFly'+i+'" onclick="fly('+i+')">' + 'Fly' + '</button>' + '</td>' +
             '</tr>'
     )};
 }
function fly(i){
var dataFlight = JSON.parse(window.sessionStorage.getItem("flightData"));
//var temporary = Number(dataFood[i].quantity);
if (dataFlight[i].fuel>2)
{
alert("Your flight has just been processed!");
dataFlight[i].fuel=dataFlight[i].fuel-2;
window.sessionStorage.setItem("flightData", JSON.stringify(dataFlight));
$('#table tbody').empty();
mainFunction();
}
}
// function mainFunction (){
//
//}


//function calculatePrice(){
//var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
//var totalPrice=0;
//if(dataFood !== null){
//for(var i=0; i < dataFood.length; i++){
//if(dataFood[i]!==null){
//totalPrice = totalPrice + (dataFood[i].menuItemPrice*dataFood[i].quantity);}
//}
//}
//if(dataDrink !== null){
//for(var i=0; i < dataDrink.length; i++){
//if(dataDrink[i]!==null){
//totalPrice = totalPrice + (dataDrink[i].drinkPrice*dataDrink[i].quantity);
//console.log(totalPrice);}
//}
//}
//$('#totalPrice').html(totalPrice);
//}
//
//function removeFood(i){
//var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
////var temporary = Number(dataFood[i].quantity);
//if (dataFood[i].quantity>1)
//{
//    dataFood[i].quantity=dataFood[i].quantity-1;
//    calculatePrice();
//    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
//    $('#table tbody').empty();
//    mainFunction();
//}
//else{
//$("#food"+i).remove();
//var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//delete dataFood[i];
//window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
//calculatePrice();
//}
//}
//
//function removeDrink(i){
//var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
//if(dataDrink[i].quantity>1)
//{
//dataDrink[i].quantity=dataDrink[i].quantity-1;
//    calculatePrice();
//    window.sessionStorage.setItem("drinkOrderData", JSON.stringify(dataDrink));
//    $('#table tbody').empty();
//    mainFunction();
//}
//else{
//$("#drink"+i).remove();
//var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
//delete dataDrink[i];
//window.sessionStorage.setItem("drinkOrderData", JSON.stringify(dataDrink));
//calculatePrice();
//}
//}