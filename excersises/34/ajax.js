   function getVal(){
        var Search=parseInt(document.getElementById("search").value);
    
               var xhr = new XMLHttpRequest();
console.log("My script has loaded");

xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
    
  document.getElementById("output").innerHTML = data.objects[0].pokemon[Search].name;
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
};
    


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
    }