var currentVisitor;


// this function is called when the Log Visit button is clicked
function createVisitor(event) {
    //first make table invisible and make form visible
    document.getElementById("form").style.display = "block";
    document.getElementById("log").style.display = "none";

    //create a new visitor object and place it into a global 
    //called currentVisitor 
    //when submit event is activated on save button the 
    //saveVisitor() function is called
}

function saveVisitor(first, last, theirAddress, theirCity, theirState, theirZip, theirPhone, theirEmail) {
    //grabs values from the form input elements and 
    //places them into the global currentVisitor object
    //then add the object to the array 
    var visitorId = visitorLog.length + 1;

    visitorLog[visitorLog.length] = new visitor(visitorId, first, last, theirAddress, theirCity, theirState, theirZip, theirPhone, theirEmail);

    //last thing is to hide the form and re-render the
    //table to reflect the changes
    renderTable(visitorLog);
    vLog();
}

function cancelForm(event) {
    if (confirm("Are you sure you want to cancel?")) {
        document.getElementById("form").style.display = "none";
        document.getElementById("log").style.display = "block";
    }
}

function deleteVisitor(event) {
    //first confirm with the user they want to delete
    if (confirm("Are you sure you want to delete this visitor?")) {
        visitorLog.splice(event - 1, 1);
    }
    //then locate the person they want to delete using 
    //the id part of the object
    //remove the perosn object from the array 
    
    //re-render the table to reflect the changes
    renderTable(visitorLog);
}

