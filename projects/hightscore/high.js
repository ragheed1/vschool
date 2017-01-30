var arr =[];

$("#save").click(function(){
    $(".output tr").remove()
    arr.push({
        name :$("#name").val(),
        game :$("#game").val(),
        date :$("#date").val(),
        highScore :$("#high-score").val(),
        
    })
    
    sortScore()
    $("#name").val('');
           $("#game").val('');
              $("#date").val('')
               $("#high-score").val('')
    
})
var sortScore= function(){
    arr.sort(function(a, b) {
    return a.highScore - b.highScore;
  });
  for(var i = 0; i < arr.length; i++) {
        $(".output").append('<tr><td>'+arr[i].name+'</td><td>'+arr[i].game+'</td><td>'+arr[i].date+'</td><td>'+arr[i].highScore+'</td></tr>');
}
}