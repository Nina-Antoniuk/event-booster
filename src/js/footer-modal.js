import refs from "./refs.js";

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
