var names=["omar","haitham","Ahmad","mhammad","hasa","khaled"];

function name(names){
  
 for(var i=0; i<=names.length;i++){
    console.log(names[i]);
 
  } 
  name(names);
}

function call(name){
  
  if(name.lenght %2==0){
  console.log("called"+ name);
    
    
  }
}

function dont(name){
    console.log("dont call"+ name);
  
}
function message(name){
  
    console.log("message"+ name);
}
function attempts(name,call,dont,message){
  
  
  
  
}