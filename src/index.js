import "simple-notify/dist/simple-notify.min.css";
import "./sass/main.scss";
import "./js/get-countries";
import "./js/event-request";
import fetchApi from "./js/fetchAPI";
import renderGalleryMarkup from "./js/rendergallery";
import { pager } from "./js/pagination";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => {
      renderGalleryMarkup(events);

      pager.letsGo({
        keyword: "",
        countryCode: "",
        pages: 50,
      });
    })
    .catch((error) => console.log(error));
  pager.hide();
}
