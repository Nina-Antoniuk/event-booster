import { API_KEY, END_POINT } from './consts'
import refs from './refs';


// try{}.catch{}
function fetcEvent(countryCode, keyword) {
  return  fetch(`${END_POINT}events.json?countryCode=${countryCode}&keyword=${keyword}&apikey=${API_KEY}`)
  .then(response => response.json())
}

// передати дані в запит
// поставити дебоунс
// поставити прослуховувач подій

fetcEvent()
  .then(data => {
  console.log('data', data)
  })
  .catch(console.log)

