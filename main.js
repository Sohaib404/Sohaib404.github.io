// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("soundstrips");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let rocket = document.getElementById("rocket");
document.addEventListener('mousemove', function(e) {
      let rocketRects = rocket.getBoundingClientRect();
      let rocketX = rocketRects.left + rocketRects.width / 2;
      let rocketY = rocketRects.top + rocketRects.height / 2;
      let x = e.pageX;
      let y = e.pageY;
      rocket.style.left = x + 'px';
      rocket.style.top = y + 'px';
      rocket.style.transform = "rotate(" + Math.atan2(y - rocketY, x - rocketX) + "rad)";
})


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
