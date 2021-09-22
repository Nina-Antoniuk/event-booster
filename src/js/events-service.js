import { API_KEY, BASE_URL } from "./consts";
import { showNotification, closeNotification } from './notification';

async function fetchEventById(searchId) {
    try {
      const response = await fetch(
        `${BASE_URL}?&id=${searchId}&apikey=${API_KEY}`
      );
      const data = await response.json();
      return data._embedded.events;
    } catch (error) {
      showNotification('error', 'Oops.. something went wrong', error);
      setTimeout(closeNotification(), 2500);
    }
  }

export default fetchEventById;
