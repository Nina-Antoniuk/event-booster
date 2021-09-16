import './sass/main.scss';
import './js/get-countries';
import Pagination from './js/pagination';
import './js/event-request';

window.addEventListener('DOMContentLoaded', onPageLoad);

function onPageLoad() {
  fetchApi()
    .then(events => renderGalleryMarkup(events))
    .catch(error => console.log(error));
}
