(function(){

  let xmlhttp = new XMLHttpRequest();
  // let url = "http://localhost:8000/data/data.json";
  // if you can't run a local server, use the JSON source below
  let url = "https://jsonplaceholder.typicode.com/photos";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myArr = JSON.parse(this.responseText);
      gatherData(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  let demoJSON = document.getElementById("demo");

  function gatherData(arr) {
    let theData = "";
    
    let i;
    for(i = 0; i < arr.length; i++) {
      theData += `<li>${arr.getElementById.id} ${arr.getElementById.title}</li>`;
    }
    demoJSON.innerHTML = theData;
  }

}());
