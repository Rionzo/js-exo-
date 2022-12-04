function createMarkup(dom_element) {
  const markup = document.createElement(dom_element.markup_name);
  markup.textContent = dom_element.text;
  dom_element.parent.appendChild(markup);
  if (
    dom_element.attributes &&
    dom_element.attributes.hasOwnProperty("length")
  ) {
    dom_element.attributes.forEach((attribute) => {
      markup.setAttribute(attribute.name, attribute.value);
    });
  }
  return markup;
}

const btnHeader = createMarkup({
  markup_name: "button",
  text: "btn-Header",
  parent: document.body,
  attributes: [{ name: "id", value: "btn-header" }],
});

const btnMain = createMarkup({
  markup_name: "button",
  text: "btn-Main",
  parent: document.body,
  attributes: [{ name: "id", value: "btn-main" }],
});
const btnFooter = createMarkup({
  markup_name: "button",
  text: "btn-Footer",
  parent: document.body,
  attributes: [{ name: "id", value: "btn-footer" }],
});

function Header() {
  btnHeader.addEventListener("click", function () {
    document.querySelector("button").style.visibility = "hidden";
    this.innerHTML = "<header id='btn-header'><p>header ici</p></header>";
    document.querySelector("header").style.visibility = "visible";
  });
}

function Main() {
  btnMain.addEventListener("click", function () {
    document.querySelector("button").style.visibility = "hidden";
    this.innerHTML = "<main id='btn-main'><p>main ici</p></main>";
    document.querySelector("main").style.visibility = "visible";
  });
}

function Footer() {
  btnFooter.addEventListener("click", function () {
    document.querySelector("button").style.visibility = "hidden";
    this.innerHTML = "<footer id='btn-footer'><p>footer ici</p></footer>";
    document.querySelector("footer").style.visibility = "visible";
  });
}
Header();
Main();
Footer();
