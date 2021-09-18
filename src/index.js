import "simple-notify/dist/simple-notify.min.css";
import "./sass/main.scss";
import "./js/get-countries";
import "./js/event-request";
import "./js/auth.js";
// import "./js/footer-modal.js";
import fetchApi from "./js/fetchapi";
import renderGalleryMarkup from "./js/rendergallery";
import Pagination from "./js/pagination";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => renderGalleryMarkup(events))
    .catch((error) => console.log(error));
}
