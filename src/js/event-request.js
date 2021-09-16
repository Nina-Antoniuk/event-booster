import { debounce } from "debounce";
import { API_KEY, BASE_URL } from './consts'
import refs from './refs';
import Notify from 'simple-notify'

refs.customerInput.addEventListener('input', debounce(onInputChange, 1000))

function onInputChange(e) {
  return fetchEvents(e.target.value, refs.chooseCountry.value)
    .then(data => {
      if(!data._embedded) {
        new Notify({
          status: 'error',
          title: 'Тo match was found!',
          text: 'Try again',
          effect: 'slide',
          type: 3
        })
        return
      }
      console.log('new events', data._embedded.events); //render
      return data._embedded.events
    })
    .catch(console.log)
}


function fetchEvents(keyword, countryCode = '') {
  return fetch(`${BASE_URL}?keyword=${keyword}&locale=${countryCode}&apikey=${API_KEY}`)
    .then(response => response.json())
}



// try{}.catch{}

