import { debounce } from "debounce";
import { API_KEY, BASE_URL } from './consts'
import refs from './refs';

refs.customerInput.addEventListener('input', debounce(onInputChange, 1000))

function onInputChange(e) {
  return fetchEvents(e.target.value)
         .then(data => {
           console.log('data', data._embedded.events)
           return data._embedded.events
         })
         .catch(console.log)
}


function fetchEvents(keyword) {
  return  fetch(`${BASE_URL }?keyword=${keyword}&apikey=${API_KEY}`)
    .then(response => response.json())
}

// countryCode=${countryCode}&


// try{}.catch{}
// передати дані в запит
// поставити дебоунс
// поставити прослуховувач подій


// function fetchEvents() {
//   return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Iks6oDIpGdxCIBqWeGHShYrO2fcgxZEd`)
//     .then(data => data.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
