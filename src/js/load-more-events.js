import aFetchApi from "./asynawait-fetch-api";
import refs from './refs';

async function loadMoreEvents(e) {
  e.preventDefault();
  this.disabled = true;
  this.closest(".modal-overlay").classList.remove("is-open");
  refs.body.classList.remove("hidden");
  await aFetchApi(this.dataset.name, "");
  refs.modalContainer.innerHTML = "";
  refs.loadMoreBtn.dataset.name = ""
}
export default loadMoreEvents;
