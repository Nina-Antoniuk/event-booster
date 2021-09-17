import { countries } from './countries';
import {Select} from './select'
import refs from './refs';

// refs.chooseCountry.addEventListener('click', openList); 

// openCountriesList()

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


const select = new Select('#select', {
  placeholder: 'Choose country',
  data: [
    {
      "id": 124,
      "name": "Canada",
      "countryCode": "ca"
    },
    {
      "id": 840,
      "name": "United States",
      "countryCode": "us"
    },
    {
      "id": 40,
      "name": "Austria",
      "countryCode": "at"
    },
    {
      "id": 56,
      "name": "Belgium",
      "countryCode": "be"
    },
    {
      "id": 208,
      "name": "Denmark",
      "countryCode": "dk"
    },
    {
      "id": 246,
      "name": "Finland",
      "countryCode": "fl"
    },
    {
      "id": 250,
      "name": "France",
      "countryCode": "fr"
    },
    {
      "id": 276,
      "name": "Germany",
      "countryCode": "de"
    },
    {
      "id": 578,
      "name": "Norway",
      "countryCode": "no"
    },
    {
      "id": 620,
      "name": "Portugal",
      "countryCode": "pt"
    },
    {
      "id": 724,
      "name": "Spain",
      "countryCode": "es"
    },
    {
      "id": 752,
      "name": "Sweden",
      "countryCode": "se"
    },
    {
      "id": 756,
      "name": "Switzerland",
      "countryCode": "ch"
    },
    {
      "id": 826,
      "name": "United Kingdom",
      "countryCode": ""
    },
    {
      "id": 833,
      "name": "Isle of Man",
      "countryCode": ""
    },
    {
      "id": 70,
      "name": "Bosnia and Herzegovina",
      "countryCode": ""
    },
    {
      "id": 100,
      "name": "Bulgaria",
      "countryCode": "bg"
    },
    {
      "id": 112,
      "name": "Belarus",
      "countryCode": ""
    },
    {
      "id": 191,
      "name": "Croatia",
      "countryCode": "hr"
    },
    {
      "id": 196,
      "name": "Cyprus",
      "countryCode": "cy"
    },
    {
      "id": 203,
      "name": "Czech Republic",
      "countryCode": "cz"
    },
    {
      "id": 233,
      "name": "Estonia",
      "countryCode": "ee"
    },
    {
      "id": 268,
      "name": "Georgia",
      "countryCode": "ge"
    },
    {
      "id": 348,
      "name": "Hungary",
      "countryCode": "hu"
    },
    {
      "id": 428,
      "name": "Latvia",
      "countryCode": "lv"
    },
    {
      "id": 440,
      "name": "Lithuania",
      "countryCode": "lt"
    },
    {
      "id": 499,
      "name": "Montenegro",
      "countryCode": "me"
    },
    {
      "id": 616,
      "name": "Poland",
      "countryCode": "pl"
    },
    {
      "id": 642,
      "name": "Romania",
      "countryCode": "ro"
    },
    {
      "id": 688,
      "name": "Serbia",
      "countryCode": "rs"
    }
  ],
  onSelect(item) {
    console.log('Selected Item', item)
  }
})

window.s = select