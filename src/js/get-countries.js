import { countries } from './countries';
import refs from './refs';

// refs.chooseCountry.addEventListener('click', openList); 

openCountriesList()

function openCountriesList() {
  return refs.chooseCountry.insertAdjacentHTML('beforeend', createOptionsMarkup())
}

function createOptionsMarkup() {
  const countriesSort = countries.sort((a, b) => (a.name > b.name) ? 1 : -1)
  return countriesSort.map(country => {
    return createMarkup(country)
  }).join('');
}

function createMarkup(country) {
  return `<option value="${country.countryCode}">${country.name}</option>`
}




// for (let key of countriesSort) {
//   let countryOption = document.createElement('option');
//   let countrySelect = document.getElementById('countrySelect');

//   countryOption.innerHTML = key.name;
//   // countrySelect.appendChild(countryOption);

// }

// refs.chooseCountrySvg.onclick = ()=>{
//   refs.chooseCountry.size = refs.chooseCountry.length;
//   refs.chooseCountry.focus();
//   console.log(refs.chooseCountry.length)
//   console.log(refs.chooseCountry.size)
// };

// refs.chooseCountry.onchange = refs.chooseCountry.onclick = refs.chooseCountry.onblur = ()=>{
//   refs.chooseCountry.size = 1;
// };

// let toggleState = false
// function toggle() {
//   refs.chooseCountrySvg.addEventListener('click', () => {

//         // toggleState = !toggleState
//             // return toggleState ? (refs.chooseCountry.size = refs.chooseCountry.length) : (refs.chooseCountry.size = 1)
//             refs.chooseCountry.size = refs.chooseCountry.length;
//             refs.chooseCountry.focus();
//         })
// }
// refs.chooseCountrySvg.onclick = toggle