import { API_KEY, BASE_URL } from "./consts";
import refs from "./refs";
import { pager } from "./pagination";
import renderGalleryMarkup from "./rendergallery";
import { showNotification, closeNotification } from "./notification";
import { spinner } from "./spinner";

refs.searchForm.addEventListener('click', checkAuth);
refs.searchForm.addEventListener("submit", request);
refs.selectField.addEventListener('click', openBackdrop);
refs.closeDropdown.addEventListener('click', closeBackdrop);
refs.chooseCountry.addEventListener('click', changeCountry)

function checkAuth() {
  if (refs.customerInput.disabled && refs.selectCountry.disabled) {
    showNotification('warning', 'Attention', 'You need to log in to search for events');
    setTimeout(closeNotification, 2500);
    return
  } 
}

function openBackdrop() {
  if (refs.selectCountry.disabled) {
    return 
  }
  refs.selectField.classList.add('open');
}

function closeBackdrop(e) {
  e.stopImmediatePropagation()
  refs.selectField.classList.remove('open');
}

function changeCountry(e) {
  refs.selectCountry.value = e.target.value;
  refs.selectCountry.dataset.code = e.target.dataset.id;
  closeBackdrop(e);
}


function request(e) {
  e.preventDefault();

  return fetchEvents(refs.customerInput.value, refs.selectCountry.dataset.code)
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
      showNotification("error", "No matches was found", "Try again");
      setTimeout(closeNotification, 2500);
    });
}


function fetchEvents(keyword = "", countryCode = "") {
  spinner.loading();
  return fetch(
    `${BASE_URL}?keyword=${keyword}&countryCode=${countryCode}&apikey=${API_KEY}`
  ).then(data => {
    return data.json();
  });
}
