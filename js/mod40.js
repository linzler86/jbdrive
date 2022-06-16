let modal40 = document.getElementById("modalpic40");

let img40 = document.getElementById("sumpic40");
let modalImg40 = document.getElementById("img40");
let picinfoText40 = document.getElementById("picinfo40");

img40.onclick = function(){
  modal40.style.display = "block";
  modalImg40.src = this.src;
  picinfoText40.innerHTML = this.alt;
}

let span40 = document.getElementsByClassName("close40")[0];

span40.onclick = function() { 
  modal40.style.display = "none";
}