$(document).ready(function() {
    $("#target").submit(function() {
        event.preventDefault();
        if(checkDates()){
	        $.ajax({
	            type: "GET",
	            url: "http://localhost:8080/availability?arriveDate=" + $("#arrive_date").val() + "&departureDate=" + $("#departure_date").val()
	        	}).then(function(data) {
	                $("#search-result").text(data.responseMessage); 
	                $("#search-status").text(data.responseStatusBool);
	             }
	    	);
	    }
    });
    
    $("#clear").click(function(event){
    	$("input[type=date]").val("");
    	$("#search-result").text(""); 
    	event.preventDefault();
    });
});

function checkDates()
{
	var currentTime = new Date();
    var startDt = document.getElementById("arrive_date").value;
    var endDt = document.getElementById("departure_date").value;
    if(startDt || endDt){
    	new Date(startDt)
    	startDt = new Date(startDt);
    	endDt = new Date(endDt);
    	
    }else {
    	alert('Please select arrive and departure dates.');
    	return false;
    }
    if(startDt <= currentTime){
        alert('Arrive date selected is equal to current date or is in the past, please check.');
        return false;
    }
    if( (startDt.getTime() >= endDt.getTime()))
    {
        alert('Arrive date selected cannot be greater or equal than departure date, please check');
        return false;
    }
    return true;
}