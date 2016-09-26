var button= documentgetElementById('counter');
var counter=0;
button.onclick=function(){
  
  //make a request to counter endpint
  
  //capture the response and store it in the variable
  
  //render the variable in correct span
  counter=counter+1;
  var span=documentgetById('count');
  span.innerHTML=counter.toString();
  
};