import LocationFetch from "./compenents/Fetch.js";
import Utils from "./compenents/Utils.js";

console.log(LocationFetch);

const api_regions = document.querySelector("#region");

const api_departements = document.querySelector("#departements");

const api_communes = document.querySelector("#communes");

async function render() {
  let MyRegion = await LocationFetch.fetch_location(
    "https://geo.api.gouv.fr/regions"
  );
  console.log(MyRegion);
  api_regions.innerHTML = `<option value="">Choissisez une région</option>`;
  if (MyRegion) {
    MyRegion.forEach((elem) => {
      Utils.createMarkup(`option`, elem.nom, api_regions, {
        name: "value",
        value: elem.code,
      });
    });
  }
}

api_regions.addEventListener("change", async function () {
  let MyDepartements = await LocationFetch.fetch_location(
    `https://geo.api.gouv.fr/regions/${api_regions.value}/departements`
  );
  api_departements.innerHTML = `<option value="">Choissisez un département</option>`;
  api_communes.innerHTML = "";
  console.log(MyDepartements);
  if (MyDepartements) {
    MyDepartements.forEach((elem) => {
      Utils.createMarkup(`option`, elem.nom, api_departements, {
        name: "value",
        value: elem.code,
      });
    });
  }
});

api_departements.addEventListener("change", async function () {
  let MyCommunes = await LocationFetch.fetch_location(
    `https://geo.api.gouv.fr/departements/${api_departements.value}/communes`
  );
  api_communes.innerHTML = `<option value="">Choissisez une commune</option>`;
  console.log(MyCommunes);
  if (MyCommunes) {
    MyCommunes.forEach((elem) => {
      Utils.createMarkup(`option`, elem.nom, api_communes, {
        name: "value",
        value: elem.code,
      });
    });
  }
});

api_communes.addEventListener("change", async function () {
  let MyCommune = await LocationFetch.fetch_location(
    ` https://geo.api.gouv.fr/communes/${api_communes.value}`
  );
  const myArticle = document.querySelector("article");
  myArticle.innerHTML = `
  <h1>Ville : ${MyCommune.nom}</h1> 
  <h1>Population : ${MyCommune.population}</h1> 
  <p>Code postal : ${MyCommune.code}</p> 
  `;
});
render();
