import { API_KEY, BASE_URL } from "./consts";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";

let myNotify;

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
      notificationOn("error", "Oops, somethink went wrong");
      setTimeout(notificationOff, 2000);
    });
}

function notificationOn(status, text) {
  return (notify = new Notify({
    status: status,
    title: "Try again",
    text: text,
  }));
}

function notificationOff() {
  myNotify.close();
}
