let modal39 = document.getElementById("modalpic39");

let img39 = document.getElementById("sumpic39");
let modalImg39 = document.getElementById("img39");
let picinfoText39 = document.getElementById("picinfo39");

img39.onclick = function(){
  modal39.style.display = "block";
  modalImg39.src = this.src;
  picinfoText39.innerHTML = this.alt;
}

let span39 = document.getElementsByClassName("close39")[0];

span39.onclick = function() { 
  modal39.style.display = "none";
}