function postData() {
    console.log("posting data...");

    // Get values from html.
    var name = $("#name").val();
    var fuel = $("#fuel").val();
    var departure = $("#departure").val();
    var destination = $("#destination").val();


    // Create JS object with data.
    var newFlight = {
        name : name,
        fuel : fuel,
        departureAirport: departure,
        destinationAirport: destination
    };
    console.log(newFlight);

    // Convert JS object to JSON.
    var validJsonFlight = JSON.stringify(newFlight);
    console.log(validJsonFlight);

    // Post JSON to endpoint.
    $.ajax({
        url:"/api/flight/add",
        type:"post",
        data: validJsonFlight,
        contentType: "application/json",
        success: function(result) {
            // On successful post, reload data to get the added one as well.
            console.log("success post data!");
            getData();
        }
    });
}

function getData() {
    console.log("getting data...");

    // Get the data from endpoint.
    $.ajax({
        url:"/api/flight/",
        type:"get",
        success: function(flights) {
            // On successful get, reload the datatable with new data.
            console.log("This is the data: " + flights);
            $('#flights').DataTable().clear();
            $('#flights').DataTable().rows.add(flights);
            $('#flights').DataTable().columns.adjust().draw();
        }
    });
}

function setup() {
    // Modal submit.
    $("#saveForm").on('submit', function(e) {
        console.log("Submitted new flight form");

        // Post the data from the modal.
        postData();

        // Reset modal to hide and no values.
        $('#newFlightModal').modal('hide');
        $("#name").val("");
        $("#fuel").val("");
        $("#departure").val("");
        $("#destination").val("");
    });

    // Load DataTable with data format.
    $('#flights').DataTable({
        columns: [
            { "data": "name" },
            { "data": "fuel" },
            { "data": "departureAirport" },
            { "data": "destinationAirport" }
        ]
    });

    // Load first data.
    getData();
}