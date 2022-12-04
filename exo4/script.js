import LocationFetch from "./compenents/Fetch.js";
import Utils from "./compenents/Utils.js";

console.log(LocationFetch);

const api_regions = document.querySelector("#region");

const api_departements = document.querySelector("#departements");

const api_communes = document.querySelector("#communes");

let MyRegion;

async function render() {
  try {
    MyRegion = await LocationFetch.fetch_location(
      "https://geo.api.gouv.fr/regions"
    );
    console.log(MyRegion);
    if (MyRegion) {
      MyRegion.forEach((elem) => {
        Utils.createMarkup(`option`, `${elem.nom}`, api_regions, {
          id: `${elem.nom}`,
        });
      });
    }
  } catch {}
}

render();
