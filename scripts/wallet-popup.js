var popUp = document.getElementById("popup");
var button = document.getElementById("walletbtn");
var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    popUp.style.display = "block";
  }

span.onclick = function() {
popUp.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }