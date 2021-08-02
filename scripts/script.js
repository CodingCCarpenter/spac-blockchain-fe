//Variables for the Connect Wallet button popup message

var popUp = document.getElementById("popup");
var button = document.getElementById("walletbtn");
var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    popUp.style.display = "block";
  }

span.onclick = function() {
popUp.style.display = "none";
}
//Dropdown menu

function activeMenu() {
    document.getElementById("dropdown").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
    if (!event.target.matches('.image-button')) {
      var dropdowns = document.getElementsByClassName("menu__nav-bar");
      var i;

      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }
