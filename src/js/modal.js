import refs from "./refs";
import fetchEventById from "./events-service";
import loadMoreEvents from './load-more-events';
import modalEventTpl from "../templates/modalEventTpl";
import { showNotification, closeNotification } from './notification';

refs.galleryList.addEventListener("click", onEventClick);

// открытие модального окна при клике на элемент галереи

function onEventClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "LI") {
    return 
  }
  fetchEventById(e.target.dataset.id)
    .then(event => {
      const eventName = [...event.map(el => el.name)]
      refs.loadMoreBtn.dataset.name = eventName
      refs.loadMoreBtn.addEventListener("click", loadMoreEvents);
      renderMarkupInModal(event)
    })
    .catch(err => {
      showNotification('error', err, 'Try again');
      setTimeout(closeNotification, 2500);
    });
  
  refs.modalOverlay.classList.add("is-open");
  refs.modalCloseBtn.addEventListener('click', onModalCloseBtn);
  refs.body.classList.add("hidden");
}
  
  // функция рендеринга
function renderMarkupInModal(arr) {
    const markup = arr.map(modalEventTpl)
    refs.modalContainer.insertAdjacentHTML("beforeend", markup);
  }


function onModalCloseBtn() {
  refs.modalOverlay.classList.remove("is-open");
  refs.body.classList.remove("hidden");

  refs.modalOverlay.removeEventListener("click", onModalCloseBtn);
  refs.loadMoreBtn.dataset.name = ""
  refs.modalContainer.innerHTML = "";
  // очистка контейнера, чтобы карточка исчезала при закрытии окна
}

// Закрытие по клику на кнопку close и на overlay модального окна
refs.modalOverlay.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches(".modal__btn-close") || target.matches(".modal-overlay")) {
    onModalCloseBtn();
  }
});

// Закрытие при нажатии Escape
document.addEventListener("keydown", function (event) {
  if (event.code !== "Escape") {
    return;
  }
  onModalCloseBtn();
});
