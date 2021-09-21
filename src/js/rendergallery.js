import refs from "./refs";
import sprits from "../images/svg/sprits.svg";

// refs.galleryList.addEventListener('click', searchCardsLinks)


export default function renderGalleryMarkup(events) {
  refs.galleryList.innerHTML = createGalleryMarkup(events);
}

function createGalleryMarkup(events) {
  return events.map(createGalleryElementMarkup).join("");
}

function createGalleryElementMarkup({
  name,
  id,
  dates: {
    start: { localDate },
  },
  _embedded: { venues },
  images,
}) {
  return `<li class ='gallery__item-card list pseudo' data-modal-open="" data-id="${id}">
            <div class='gallery__image'>
              <img class='gallery__img' src='${images[1].url}' alt='${name}' />
            </div>
            <div class='gallery__meta'>
              <p class='gallery__meta_name gallery_margin'>${name}</p>
              <p class='gallery__meta_date gallery_margin'>${localDate}</p>
              <div class='flex-svg'>
                <div>
                  <svg class='icon'>
                    <use href="${sprits}#icon-location"></use>
                  </svg>
                </div>
                <p class='gallery__meta_place gallery_margin'>${venues[0].name}</p>
              </div>
            </div>
          </li>`;
}
