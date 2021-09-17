import "simple-notify/dist/simple-notify.min.css";
import "./sass/main.scss";
import "./js/get-countries";
import "./js/event-request";
import fetchApi from "./js/fetchgalleryapi";
import renderGalleryMarkup from "./js/rendergallery";
import Pagination from "./js/pagination";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => renderGalleryMarkup(events))
    .catch((error) => console.log(error));
}
