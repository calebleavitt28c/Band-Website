function homePage(event) {
    document.getElementById("home").style.display = "block";
    document.getElementById("store").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("log").style.display = "none";
}

function storePage(event) {
    document.getElementById("home").style.display = "none";
    document.getElementById("store").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("log").style.display = "none";
}

function aboutPage(event) {
    document.getElementById("home").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("form").style.display = "none";
    document.getElementById("log").style.display = "none";
}

function vLog(event) {
    document.getElementById("home").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("log").style.display = "block";
}

var i = true;

function addCss() {
    if (i == true) {
        i = false;
        afterParty("party.css");
    }
    else {
        i = true;
        shutdown("party.css");
    }
}

function shutdown(filename) {
    var head = document.head;
    var myFile = document.getElementById("party")

    head.removeChild(myFile);
}

function afterParty(filename) {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = filename;
    link.id = "party";

    head.appendChild(link);
}

function renderTable(visitorLog) {
    var table = document.getElementById("visitorTable");

    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

    for (var i = 0; i < visitorLog.length; i++) {
        var row = `<tr>
                        <td>${visitorLog[i].firstName} ${visitorLog[i].lastName}</td>
                        <td>${visitorLog[i].address} ${visitorLog[i].city}, ${visitorLog[i].state} ${visitorLog[i].zip}</td>
                        <td>${visitorLog[i].cellPhone}</td>
                        <td>${visitorLog[i].email}</td>
                        <td><button class="tableB">Edit</button><button onclick="deleteVisitor()" class="tableB" >Delete</button></td>
                   </tr>`
        table.innerHTML += row;
    }
}
