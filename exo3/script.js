function myMove() {
  var element = document.getElementById("car");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 750) {
      clearInterval(id);
      setTimeout(function () {
        element.remove();
      }, 500);
    } else {
      pos++;
      element.style.left = pos + "px";
    }
  }
}
