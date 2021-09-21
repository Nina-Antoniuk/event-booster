import { API_KEY, BASE_URL } from "./consts";
import { showNotification, closeNotification } from "./notification";

export default function fetchApi() {
  return fetch(`${BASE_URL}?&apikey=${API_KEY}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      return data._embedded.events;
    })
    .catch((error) => {
      showNotification(
        "error",
        "Please try again!",
        "Oops, somethink went wrong"
      );
      setTimeout(closeNotification, 2000);
    });
}
