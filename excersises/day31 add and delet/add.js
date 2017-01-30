function loadData() {
    $.ajax({
        url: 'http://api.vschool.io/ragheedhaddad/todo/',
        type: 'GET',
        //  data: "name=John&location=Boston",
        success: function (data) {
            console.log("data has been loaded");
            //    $.get( "http://api.vschool.io/bnabulsi/todo/", function( data ) {
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<tr><td>" + data[i].title + "</td><td>" + data[i].description + "</td><td>" + data[i].price + "</td><td>" + data[i].imgUrl + "</td><td>" + data[i].completed + "</td><td><button type='button' class='btn btn-warning' id='btnEdit'>Edit Data</button><button type='button' class='btn btn-danger' id='btnDelete'>Delete Data</button></td></tr>");
            }

            //});
        }
    });
}
var count=0;

$(document).ready(function () {
    $("#btnAdd").click(function () {
        var title = $("#title").val();
        $("#list").append("<li id="+count+"><button onclick='delteItem("+count+")'>X</button>"+title+"</li>");
        $("#title").val("");
        count++;
    });
});

function delteItem(id){
  
   $("#"+id).remove();
    
}