import fetchApi from "./fetchapi";
import { API_KEY, BASE_URL } from "./consts";

class EventService {
  //Функция для получения промиса с одним объектом события/концерта по его ID
  async fetchEventById(searchId) {
    console.log(this);
    this.eventID = searchId;
    try {
      const response = await fetch(
        `${BASE_URL}?&id=${this.eventID}&apikey=${API_KEY}`
      );
      const data = await response.json();
      return data._embedded.events;
    } catch (error) {
      return console.log(error);
    }
  }
}

export default EventService;
