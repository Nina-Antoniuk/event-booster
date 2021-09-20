import { countries } from "./countries";
import { Select } from "./select";

openCountriesList();

function openCountriesList() {
  return refs.chooseCountry.insertAdjacentHTML(
    "beforeend",
    createOptionsMarkup()
  );
}

function createOptionsMarkup() {
  const countriesSort = countries.sort((a, b) => (a.name > b.name ? 1 : -1));
  return countriesSort
    .map((country) => {
      return createItemMarkup(country);
    })
    .join("");
}

function createItemMarkup(country) {
  return `<option value="${country.countryCode}">${country.name}</option>`;
}

// function openCountriesList() {
//   return refs.chooseCountry.insertAdjacentHTML('beforeend', createOptionsMarkup())
// }

// function createOptionsMarkup() {
//   const countriesSort = countries.sort((a, b) => (a.name > b.name) ? 1 : -1)
//   return countriesSort.map(country => {
//     return createMarkup(country)
//   }).join('');
// }

// function createMarkup(country) {
//   return `<option value="${country.countryCode}">${country.name}</option>`
// }

// for (let key of countriesSort) {
//   let countryOption = document.createElement('option');
//   let countrySelect = document.getElementById('countrySelect');

//   countryOption.innerHTML = key.name;
//   // countrySelect.appendChild(countryOption);

// }

const select = new Select("#select", {
  placeholder: "Choose country",
  data: countries,
});

window.s = select;
