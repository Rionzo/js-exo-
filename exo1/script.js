window.onload = () => {
  prompt("Voulez-vous voir le contenu de cette page (O/N) ?").toUpperCase() ==
  "O"
    ? (document.querySelector("p").style.visibility = "visible")
    : null;
};
