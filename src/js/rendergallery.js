import refs from "./refs";
import { searchCardsLinks } from "./modal";
import sprits from "../images/svg/sprits.svg";
// import fetchApi from "./fetchAPI";


refs.galleryList.addEventListener('click', searchCardsLinks)


export default function renderGalleryMarkup(events) {
  refs.galleryList.innerHTML = createGalleryMarkup(events);
}


function createGalleryMarkup(events) {
  return  events.map(createGalleryElementMarkup).join("");
}

// винести шаблон окремим файлом

function createGalleryElementMarkup( {
        name,
        dates: {
          start: { localDate },
        },
        _embedded: { venues },
        images,
      } ) {
        return `<li class ='gallery__item-card list'>
                  <a class='set-of-cards__link' href='#backdrop' data-modal-open="">
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
                    </a>
                  </li>`;
    }
