import Notify from 'simple-notify'
import { API_KEY, BASE_URL } from './consts'
import refs from './refs';
import renderGalleryMarkup from './renderGalleryMarkup';


let notify

refs.searchForm.addEventListener('submit', onInputChange)

function onInputChange(e) {
  e.preventDefault();

  return fetchEvents(refs.customerInput.value, refs.chooseCountry.value)
    .then(data => {
      console.log(refs.customerInput.value, refs.chooseCountry.value);
      return data._embedded.events
    })
    .then(data => {
      console.log('data', data);
      return renderGalleryMarkup(data)
    })
    .catch(err => {
      console.log(err);
      showNotification('error', 'Something went wrong')
      setTimeout(closeNotification, 2500)
    })
}


function fetchEvents(keyword = '', countryCode = '') {
  return fetch(`${BASE_URL}?keyword=${keyword}&countryCode=${countryCode}&apikey=${API_KEY}`)
    .then(response => response.json())
}


function showNotification(status, title) {
  return notify = new Notify({
          status: status,
          title: title,
          text: 'Try again',
          effect: 'slide',
          type: 3
        })
}

function closeNotification() {
  notify.close()
}



