import "simple-notify/dist/simple-notify.min.css";
import "./sass/main.scss";
import "./js/get-countries";
import "./js/event-request";
import "./js/auth.js";
import "./js/footer-modal.js";
import fetchApi from "./js/fetchapi";
import renderGalleryMarkup from "./js/rendergallery";
import Pagination from "./js/pagination";
import sprits from "./images/svg/sprits.svg";

window.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  fetchApi()
    .then((events) => renderGalleryMarkup(events))
    .catch((error) => console.log(error));
}

$(document).ready(function () {
  const slider = $("#slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
    navText: [
      `<svg class="arrow-left" width="20" height="20"><use class="icon" href="${sprits}#icon-arrow-left"></use></svg>`,
      `<svg class="arrow-right" width="20" height="20"><use class="icon" href="${sprits}#icon-arrow-right"></use></svg>`,
    ],
  });
});
