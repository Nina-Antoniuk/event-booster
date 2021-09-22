import aFetchApi from "./asynawait-fetch-api";
import refs from './refs';


refs.loadMoreBtn.addEventListener("click", loadMoreEvents);

async function loadMoreEvents(e) {
  e.preventDefault();
  this.disabled = true;
  this.closest(".backdrop").classList.remove("open"); //modal-overlay?
  await aFetchApi(this.dataset.name, "");
}
