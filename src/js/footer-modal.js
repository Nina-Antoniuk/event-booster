import refs from "./refs.js";
import sprits from "../images/svg/sprits.svg";

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

refs.footerSection.addEventListener("click", modalFooterOpen);
refs.footerModal.addEventListener("click", modalFooterClose);

function modalFooterOpen() {
  refs.footerModal.classList.toggle("is-open");
}

function modalFooterClose(e) {
  if (e.target === e.currentTarget) {
    refs.footerModal.classList.toggle("is-open");
  }
  return;
}
