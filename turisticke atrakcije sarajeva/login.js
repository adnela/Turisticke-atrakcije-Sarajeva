

var regexName = /^[A-Za-z]{3,20}$/; 

function validateName (){
   
   var form=document.getElementById('storyForm');

   if(!regexName.test(form['firstName'].value)){
   	form['firstName'].style.borderColor  = "red";
   	
   }
   else{
     form['firstName'].style.borderColor  = "green"; 
   }
 
} 

function validateLastName (){
   
   var form=document.getElementById('storyForm');

   if(!regexName.test(form['lastName'].value)){
    form['lastName'].style.borderColor  = "red";
    
   }
   else{
     form['lastName'].style.borderColor  = "green"; 
   }
 
}

function phoneCode(){
  var ajax = new XMLHttpRequest();
  var all;
  var code=document.getElementById('countryCode').value;
  code = encodeURIComponent(code);

  var splitCode = code.split(/[()]/);
  if(splitCode=="BA"){
  ajax.onreadystatechange = function() {// Anonimna funkcija
    if (ajax.readyState == 4 && ajax.status == 200){
        all= JSON.parse(ajax.responseText);
        document.getElementById("phone").value = "+"+all[0].callingCodes;
       }
     
  }

  ajax.open("GET", "https://restcountries.eu/rest/v1/alpha?codes="+splitCode, true);
  ajax.send();

  }

}