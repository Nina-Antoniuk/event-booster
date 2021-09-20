import aFetchApi from "./asynawait-fetch-api";

document
  .querySelector(".modal__btn-more")
  .addEventListener("click", loadMoreEvents);

async function loadMoreEvents(e) {
  e.preventDefault();
  this.disabled = true;
  this.closest(".backdrop").classList.remove("open");
  await aFetchApi(this.dataset.name, "");
}
