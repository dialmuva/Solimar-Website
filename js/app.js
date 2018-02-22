$(document).ready(function() {
    $("#target").submit(function() {
        alert("Arrive:" + $("#arrive_date").val());
        alert("Departure:" + $("#departure_date").val());
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/availability?arriveDate=" + $("#arrive_date").val() + "&departureDate=" + $("#departure_date").val()
            //data: $(this).serialize(),
        	}).then(function(data) {
                $("#search-result").append(data.responseMessage);
                $("#search-status").append(data.responseStatusBool);
             }
    	);
    });
    
    $("#clear").click(function(event){
    	alert("cleaning values");
    	$("input[type=date]").val("");
    	event.preventDefault();
    });
});