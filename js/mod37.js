let modal37 = document.getElementById("modalpic37");

let img37 = document.getElementById("sumpic37");
let modalImg37 = document.getElementById("img37");
let picinfoText37 = document.getElementById("picinfo37");

img37.onclick = function(){
  modal37
.style.display = "block";
  modalImg37
.src = this.src;
  picinfoText37
.innerHTML = this.alt;
}

let span37 = document.getElementsByClassName("close37")[0];

span37.onclick = function() { 
  modal37
.style.display = "none";
}