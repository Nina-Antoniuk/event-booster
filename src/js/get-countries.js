import { countries } from "./countries";
import refs from './refs';

createCountriesList();

function createCountriesList() {
  return refs.chooseCountry.insertAdjacentHTML(
    "beforeend",
    createSelectMarkup()
  );
}

function createSelectMarkup() {
  const countriesSort = countries.sort((a, b) => (a.name > b.name ? 1 : -1));
  return countriesSort.map((country) => {
      return createItemMarkup(country);
    }).join("");
}


function createItemMarkup(country) {
  return `<button type="button"
            class="select__item"
            data-type="item"
            data-id="${country.countryCode}"
            data-value="${country.name}">
            ${country.name}
          </button>`;
}

