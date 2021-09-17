import Notify from 'simple-notify'
import { API_KEY, BASE_URL } from './consts'
import refs from './refs';
import { pager } from "./pagination";
import renderGalleryMarkup from './renderGalleryMarkup';


let notify

refs.searchForm.addEventListener('submit', onInputChange)

function onInputChange(e) {
  e.preventDefault();

  return fetchEvents(refs.customerInput.value, refs.chooseCountry.value)
    .then(data => {
      return {
        page: data.page,
        events: data._embedded.events
      }
    })
    .then(data => {
      console.log('new data', data.events);
      pager.letsGo({
        keyword: refs.customerInput.value,
        countryCode: refs.chooseCountry.value,
        pages: data.page.totalPages,
      });
      return renderGalleryMarkup(data.events)
    })
    .catch(err => {
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



