function getVal(){
        var Search=parseInt(document.getElementById("search").value);
    
               var xhr = new XMLHttpRequest();
console.log("My script has loaded");

$("#submit").click(function() {
  if("#submit"  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
    
  "#submit"("output").innerHTML = data.objects[0].pokemon[Search].name;
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log("#submit");
  }
};
    


 $.ajax("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
    }



$("#submit").click(function() {
  $.ajax({
    url: "http://swapi.co/api/people/1/",
    success: function(result) {
      $("#output").html(result.name);
    }
  });
});