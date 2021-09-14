import refs from "./refs";

export default function renderGalleryMarkup(events) {
  const markup = events
    .map(
      ({
        name,
        dates: {
          start: { localDate },
        },
        _embedded: { venues },
        images,
      }) => {
        return `<li class ='menu__item-card'>
  
    <div class='card'>

        <img src='${images[0].url}' alt='${name}' width ='180' height='227' class='card__image' />
      
    </div>

    <div class='card__content'>

      <p class='card__content-item'>${name}</p>

      <p class='card__content-item'>${localDate}</p>

      <p class='card__content-item'>${venues[0].name}</p>
      
    </div>

  </li>`;
      }
    )
    .join("");
  refs.galleryList.innerHTML = markup;
}
