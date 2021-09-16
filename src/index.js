import 'simple-notify/dist/simple-notify.min.css'
import './sass/main.scss';
import './js/get-countries';
import './js/event-request';
import fetchApi from "./js/fetchApi";
import renderGalleryMarkup from "./js/renderGalleryMarkup";
import Pagination from "./js/pagination";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => renderGalleryMarkup(events))
    .catch((error) => console.log(error));
}
