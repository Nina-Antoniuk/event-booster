import "./sass/main.scss";
import fetchApi from "./js/fetchApi";
import renderGalleryMarkup from "./js/renderGalleryMarkup";
import "./js/get-countries";
import Pagination from "./js/pagination";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => renderGalleryMarkup(events))
    .catch((error) => console.log(error));
}
