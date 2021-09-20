import { countries } from './countries';
import refs from './refs';

const countriesBackdrop = document.querySelector('.countries-backdrop-js')
const chooseCountry = document.querySelector('.choose-country-js');
const countrySelect = document.querySelector('#country-select-js')
const countriesList = document.querySelector('.countries-list-js');
const closeListBtn = document.querySelector('.close-list-btn');


chooseCountry.addEventListener('click', showCountriesList);
countrySelect.addEventListener('focus', showCountriesList)
closeListBtn.addEventListener('click', closeCountriesList);

countriesList.addEventListener('change', (e) => {
  countrySelect.value = e.target.value;
  closeCountriesList()
})

createCountriesList();

function showCountriesList() {
  countriesBackdrop.classList.remove('is-hidden');
  
}

function closeCountriesList() {
  event.stopImmediatePropagation()
  countriesBackdrop.classList.add('is-hidden')
}


    
function createCountriesList() {
  countriesList.innerHTML = createListMarkup();
}

function createListMarkup() {
  const countriesSort = countries.sort((a, b) => (a.name > b.name) ? 1 : -1);
 return countriesSort.map((country, index) => {
    return createItemMarkup(country, index)
  }).join('');
}

function createItemMarkup(country) {
  return `<div>
            <input id="${country.countryCode}" class="countries-list__item-radio" type="radio" name="country" value="${country.name}">
            <label for="${country.countryCode}" class="counties-list__item">${country.name} </label>
          </div>`
}