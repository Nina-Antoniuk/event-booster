import { API_KEY, BASE_URL } from "./consts";
import refs from "./refs";
import { pager } from "./pagination";
import renderGalleryMarkup from "./rendergallery";
import { showNotification, closeNotification } from "./notification";
import { spinner } from "./spinner";

refs.searchForm.addEventListener("submit", onInputChange);

function onInputChange(e) {
  e.preventDefault();

  return fetchEvents(refs.customerInput.value, refs.chooseCountry.value)
    .then((data) => {
      spinner.loaded();
      return {
        page: data.page,
        events: data._embedded.events,
      };
    })
    .then((data) => {
      pager.letsGo({
        keyword: refs.customerInput.value,
        countryCode: refs.chooseCountry.value,
        pages: data.page.totalPages,
      });
      return renderGalleryMarkup(data.events);
    })
    .catch((err) => {
      showNotification("error", "Something went wrong", "Try again");
      setTimeout(closeNotification, 2500);
    });
}


// async function fetchEvents(keyword = "", countryCode = "") {
//   const response = await fetch(

function fetchEvents(keyword = "", countryCode = "") {
  spinner.loading();
  return fetch(
    `${BASE_URL}?keyword=${keyword}&countryCode=${countryCode}&apikey=${API_KEY}`
  );
  return await response.json();
}
