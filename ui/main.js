var button= document.getElementById('counter');
var counter=0;
button.onclick=function(){
  
  //make a request to counter endpint
  
  
  
  //render the variable in correct span
  counter=counter+1;
  
  
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in the variable
  request.onreadystatechange = function(){
      if(request.readystate == XMLHttpRequest.Done)
      {
          var counter = request.responseText;
         var span=document.getElementById('count');
  span.innerHTML=counter.toString(); 
  }
  };
  request.open('GET','http://mudrakokolakarthikkumar.imad.hasura-app.io/counter',true);
  request.send(null);
};