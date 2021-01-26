// Get the modal
var soundstripsmodal = document.getElementById("soundstrips-modal");
var stackunderflowmodal = document.getElementById("stackunderflow-modal");
var tmtroublesmodal = document.getElementById("tmtroubles-modal");
var supersunmodal = document.getElementById("supersun-modal");
var meteoridemodal = document.getElementById("meteoride-modal");


// Get the button that opens the modal
var soundstripsbtn = document.getElementById("soundstrips");
var stackunderflowbtn = document.getElementById("stackunderflow");
var tmtroublesbtn = document.getElementById("tmtroubles");
var supersunbtn = document.getElementById("supersun");
var meteoridebtn = document.getElementById("meteoride");


// Get the <span> element that closes the modal
var spanclose = document.getElementsByClassName("close");


let rocket = document.getElementById("rocket");
let rocketicon = document.getElementById("rocket-icon");
document.addEventListener('mousemove', function(e) {
      let rocketRects = rocket.getBoundingClientRect();
      let rocketX = rocketRects.left + rocketRects.width / 2;
      let rocketY = rocketRects.top + rocketRects.height / 2;
      let x = e.pageX;
      let y = e.pageY;
      rocket.style.left = x + 'px';
      rocket.style.top = y + 'px';
      rocketicon.style.transform = "rotate(" + (Math.atan2(y - rocketY, x - rocketX)+0.7) + "rad)";
})


// When the user clicks on the button, open the modal
soundstripsbtn.onclick = function() {soundstripsmodal.style.display = "block";}

stackunderflowbtn.onclick = function() {stackunderflowmodal.style.display = "block";}

tmtroublesbtn.onclick = function() {tmtroublesmodal.style.display = "block";}

supersunbtn.onclick = function() {supersunmodal.style.display = "block";}

meteoridebtn.onclick = function() {meteoridemodal.style.display = "block";}

// When the user clicks on <span> (x), close the modal
spanclose[0].onclick = function() {soundstripsmodal.style.display = "none";}
spanclose[1].onclick = function() {stackunderflowmodal.style.display = "none";}
spanclose[2].onclick = function() {tmtroublesmodal.style.display = "none";}
spanclose[3].onclick = function() {supersunmodal.style.display = "none";}
spanclose[4].onclick = function() {meteoridemodal.style.display = "none";}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
      if (event.target != modal-content) {
            soundstripsmodal.style.display = "none";
      }
      
}

