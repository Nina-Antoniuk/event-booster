import refs from "./refs";
import sprits from "../images/svg/sprits.svg";
// import fetchApi from "./fetchAPI";


// export default function renderGalleryMarkup(events) {
//   const markup = events
//     .map(
//       ({
//         name,
//         dates: {
//           start: { localDate },
//         },
//         _embedded: { venues },
//         images,
//       }) => {
//         return `<li class ='gallery__item-card list'>

//         <div class='gallery__image'>
//           <img class='gallery__img' src='${images[1].url}' alt='${name}' />
//         </div>
//         <div class='gallery__meta'>
//           <p class='gallery__meta_name gallery_margin'>${name}</p>
//           <p class='gallery__meta_date gallery_margin'>${localDate}</p>
//           <div class='flex-svg'>
//           <div>
//           <svg class='icon'>
//           <use href="${sprits}#icon-location"></use>
//           </svg>
//           </div>
//           <p class='gallery__meta_place gallery_margin'>${venues[0].name}</p>
//           </div>
//         </div>

//   </li>`;
//       }
//     )
//     .join("");
//   refs.galleryList.innerHTML = markup;
// }


// export default function renderGalleryMarkup({
//   name,
//   dates: {
//     start: { localDate },
//   },
//   _embedded: { venues },
//   images,
// }) {
//   return `<li class ='gallery__item-card list'>

//         <div class='gallery__image'>
//           <img class='gallery__img' src='${images[1].url}' alt='${name}' />
//         </div>
//         <div class='gallery__meta'>
//           <p class='gallery__meta_name gallery_margin'>${name}</p>
//           <p class='gallery__meta_date gallery_margin'>${localDate}</p>
//           <div class='flex-svg'>
//           <div>
//           <svg class='icon'>
//           <use href="${sprits}#icon-location"></use>
//           </svg>
//           </div>
//           <p class='gallery__meta_place gallery_margin'>${venues[0].name}</p>
//           </div>
//         </div>

//   </li>`;
// }

// const result = fetchApi()
//   .map((e) => {
//     return renderGalleryMarkup(e);
//   })
//   .join("");
// refs.galleryList.insertAdjacentHTML("beforeend", result);

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

  </li>`
}