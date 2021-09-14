import "./sass/main.scss";
import fetchApi from "./js/fetchApi";
import renderGalleryMarkup from "./js/renderGalleryMarkup";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => renderGalleryMarkup(events))
    .catch((error) => console.log(error));
}
