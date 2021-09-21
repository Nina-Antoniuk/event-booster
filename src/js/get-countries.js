import { countries } from "./countries";
import refs from './refs';

createCountriesList();

function createCountriesList() {
  return refs.chooseCountry.insertAdjacentHTML(
    "beforeend",
    createSelectMarkup()
  );
}
createCountriesList()
function createSelectMarkup() {
  const countriesSort = countries.sort((a, b) => (a.name > b.name ? 1 : -1));
  return countriesSort
    .map((country) => {
      return createItemMarkup(country);
    })
    .join("");
}


function createItemMarkup(country) {
  return `<button type="button"
            class="select__item"
            data-type="item"
            data-id="${country.countryCode}"
            value="${country.name}">
            ${country.name}
          </button>`;
}

