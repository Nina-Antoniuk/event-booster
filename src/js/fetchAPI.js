import { API_KEY, BASE_URL } from "./consts";
import refs from './refs';
import renderGalleryMarkup from './rendergallery'


export default function fetchApi() {
  return fetch(`${BASE_URL}?&apikey=${API_KEY}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Oops, something went wrong"); //тут не потрібен текст
    })
    .then(data => {
      return data._embedded.events
    })
    .catch(error => console.log("Error:", error)); //замість виводу в консоль зроби нотіфікашку
}
