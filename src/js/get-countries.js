import countries from "./countries";

let countriesSort = countries.sort(( a, b ) => (a.name > b.name) ? 1 : -1)

for (let key of countriesSort) {
  
  let countryOption = document.createElement('option');
  let countrySelect = document.getElementById('countrySelect');

  countryOption.innerHTML = key.name;
  countrySelect.appendChild(countryOption);
}