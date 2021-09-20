// Импорт класса и шаблона
import EventService from "./events-service";
import modalEventTpl from "../templates/modalEventTpl";
import refs from "./refs";

const modalEventService = new EventService();

refs.eventsItem.addEventListener("click", onEventClick);

// открытие модального окна при клике на элемент галереи
function onEventClick(e) {
  e.preventDefault();
  // console.log('target name', e.target.nodeName);

  if (e.target.nodeName !== "li") {
    refs.modalOverlay.classList.remove("visually-hidden");
    refs.modalOverlay.classList.add("is-open");
    refs.body.classList.add("overflow-hidden");
    // добавила строки для рендеринга события в модалке

    const eventId = e.target.getAttribute("id");
    // console.log(eventId);
    modalEventService
      .fetchEventById(eventId)
      .then((event) => renderMarkupInModal(event));
  }
  // функция рендеринга
  function renderMarkupInModal(arr) {
    const markup = modalEventTpl(arr);
    refs.modalContainer.insertAdjacentHTML("beforeend", markup);
  }
}

function onModalCloseBtn() {
  refs.modalOverlay.classList.remove("is-open");
  refs.modalOverlay.classList.add("visually-hidden");
  refs.body.classList.remove("overflow-hidden");

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
