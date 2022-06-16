let modal15 = document.getElementById("modalpic15");

let img15 = document.getElementById("sumpic15");
let modalImg15 = document.getElementById("img15");
let picinfoText15 = document.getElementById("picinfo15");

img15.onclick = function(){
  modal15.style.display = "block";
  modalImg15.src = this.src;
  picinfoText15.innerHTML = this.alt;
}

let span15 = document.getElementsByClassName("close15")[0];

span15.onclick = function() { 
  modal15.style.display = "none";
}