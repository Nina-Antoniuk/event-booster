import { countries } from './countries';
import refs from './refs';
// один раз сходити за країнами
// відмалювати список 1 раз при завантаженні сторінки (прихований)
// при кліці список має з'являтися
// при кліці поза межами списку список повинен закриватись
// 

const chooseCountry = document.querySelector('.coose-country-js'); //div pos: rel;



renderCountriesList();

const countriesList = document.querySelector('.countries-list');

chooseCountry.addEventListener('click', openCountriesList);



function openCountriesList(e) {
  countriesList.classList.add('visible');

  document.addEventListener('click', closeDropdownList) 
}

function closeDropdownList(e) {
  countriesList.classList.remove('visible')
  // if (countriesList.classList.includes(visible)) {
  //   console.log('yes');
  // }
  // if (e.target.nodeName !== 'LI') {
  //   console.log('esc');
  // }
}
    
function renderCountriesList() {
  chooseCountry.insertAdjacentHTML('beforeend', `<ul tabindex="4" class="countries-list list">${createListMarkup()}</ul>`)
}

function createListMarkup() {
  const countriesSort = countries.sort((a, b) => (a.name > b.name) ? 1 : -1);
 return countriesSort.map((country, index) => {
    return createItemMarkup(country, index)
  }).join('');
}

function createItemMarkup(country, index) {
  return `<li tabindex="index + 4" class="counties-list__item">${country.name}</li>`
}