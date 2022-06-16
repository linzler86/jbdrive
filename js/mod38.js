let modal38 = document.getElementById("modalpic38");

let img38 = document.getElementById("sumpic38");
let modalImg38 = document.getElementById("img38");
let picinfoText38 = document.getElementById("picinfo38");

img38.onclick = function(){
  modal38.style.display = "block";
  modalImg38.src = this.src;
  picinfoText38.innerHTML = this.alt;
}

let span38 = document.getElementsByClassName("close38")[0];

span38.onclick = function() { 
  modal38.style.display = "none";
}