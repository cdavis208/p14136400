/*
An "Immediately-Invoked Function Expression" (IIFE) contains
all the code. the final brackets () ensure that it executes.

This is good practice because:
- it keeps your variables out of the global namespace
- local references to objects decrease lookup times
- it is a foundation for further code organisation

It is also an "anonymous" function because it has/needs no name.
*/

(function(){

  var myName = document.getElementById("my-name"); 
  var userName = document.getElementById("user-name"); 
  var getName = document.getElementById("get-name");
  var myName2 = document.getElementById("my-name2");
  var userName2 = document.getElementById("user-name2");
  var getName2 = document.getElementById("get-name2");
  var doneColour = document.getElementById("done-colour");
  var changeColour = document.getElementById("change-colour");
  var a = "'";
  var b = "'";


  function PerformGreeting() {
    myName.innerHTML = userName.value;
    myName2.innerHTML = userName2.value;
   
    
    /*
    Without setting the variables first, this would be longer:
    */
    // document.getElementById("my-name").innerHTML =
    // document.getElementById("user-name").value;

    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
  }

  function setColorNew() {
   document.body.style.background = doneColour.value;


   event.preventDefault();
   return false;
  }

  /*
  Event Listeners keep your JavaScript out of your HTML markup -
  most professional developers avoid (e.g.) "onclick" in HTML tags.
  Also, you can attach multiple events to any single element.
  */
  getName.addEventListener("submit", PerformGreeting);
  getName2.addEventListener("submit" , PerformGreeting);
  changeColour.addEventListener("submit", setColorNew());
 

  

  /*
  Uncomment the line below - see what happens when you click
  in the grey area outside the input "submit" button. Why?
  */
  // getName.addEventListener("click", PerformGreeting);

}());

// the final brackets () make the anonymous function execute immediately
