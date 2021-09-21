import "simple-notify/dist/simple-notify.min.css";
import "./sass/main.scss";
import "./js/auth.js";
import "./js/get-countries";
import fetchApi from "./js/fetchapi";
import renderGalleryMarkup from "./js/rendergallery";
import "./js/get-countries";
import "./js/event-request";
import "./js/load-more-events";
import "./js/button-up";
import { pager } from "./js/pagination";
import sprits from "./images/svg/sprits.svg";
import "./js/footer-modal.js";
import "./js/modal";

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
