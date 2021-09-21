import { API_KEY, BASE_URL } from "./consts";

async function fetchEventById(searchId) {
    try {
      const response = await fetch(
        `${BASE_URL}?&id=${searchId}&apikey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data._embedded.events);
      return data._embedded.events;
    } catch (error) {
      return console.log(error);
    }
  }

export default fetchEventById;
