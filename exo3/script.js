function myMove() {
  var element = document.getElementById("car");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == window.innerWidth) {
      clearInterval(id);
    } else {
      pos++;
      element.style.left = pos + "px";
    }
  }
}
