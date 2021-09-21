// Импорт класса и шаблона
import fetchEventById from "./events-service";
import modalEventTpl from "../templates/modalEventTpl";
import refs from "./refs";
import { showNotification, closeNotification } from './notification';

// const modalEventService = new EventService();

refs.galleryList.addEventListener("click", onEventClick);

// открытие модального окна при клике на элемент галереи

function onEventClick(e) {
  e.preventDefault();//?
  if (e.target.nodeName !== "LI") {
    return 
  }
  fetchEventById(e.target.dataset.id)
    .then(event => {
      console.log(event);
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
