function writeTable1()
{
    var data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    var numCols = 1;           
    
    
    $.each(data, function(i) {
      if(!(i%numCols)) tRow = $('<tr>');
               
      let tCell = $('<td>').html(data[i]);
    
      $('#table1').append(tRow.append(tCell));
    });
}
function writeTable2()
{
    $("#table2").append(
        "<table class='table table-hover'><tr><td>My column 1, row 1</td>" +
        "<td>My column 2, row 2</td></tr>" +
        "<tr><td>My column 1, row 2</td>" +
        "<td>My column 2, row 2</td></tr></table>");
}
function writeTable3()
{
    var data = [["City 1", "City 2", "City 3"], //headers
                ["New York", "LA", "Seattle"], 
                ["Paris", "Milan", "Rome"], 
                ["Pittsburg", "Wichita", "Boise"]]
    var cityTable = makeResponsiveTable($("#table3container"), "table3", data);
    
}
function makeResponsiveTable(container, id, data) {
    //$(container).addClass("table-responsive");
    var table = $("<table/>").addClass('table');
    table.addClass("table-hover");
    table.addClass("table-bordered");
    table.addClass("table-striped");
    table.attr("id",id);
    var tbody=$("<tbody/>");
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            var txt = "<span class='glyphicon glyphicon-edit'></span>"+ c;
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").html(txt));
        });
        tbody.append(row);
        
    });
    table.append(tbody);
    return container.append(table);
}