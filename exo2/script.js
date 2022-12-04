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

const buttons = document.querySelectorAll("button");
buttons.forEach((elem) => {
  elem.addEventListener("click", function () {
    if (elem.textContent == "btn-Footer") {
      createMarkup({
        markup_name: "p",
        text: "footer ici",
        parent: document.body,
        attributes: [{ name: "id", value: "btn-footer" }],
      });
    }
    if (elem.textContent == "btn-Header") {
      createMarkup({
        markup_name: "p",
        text: "header ici",
        parent: document.body,
        attributes: [{ name: "id", value: "btn-header" }],
      });
    }
    if (elem.textContent == "btn-Main") {
      createMarkup({
        markup_name: "p",
        text: "main ici",
        parent: document.body,
        attributes: [{ name: "id", value: "btn-header" }],
      });
    }
    elem.remove();
  });
});

Header();
Main();
Footer();
