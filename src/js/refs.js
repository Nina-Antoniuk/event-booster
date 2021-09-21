const refs = {
  body: document.querySelector("body"),
  header: document.querySelector(".header"),

  authBtn: document.querySelector(".auth-btn"),
  signInBtn: document.querySelector(".signin-btn"),
  iconAuthOn: document.querySelector(".icon-auth-on"),
  iconSignInOn: document.querySelector(".icon-signIn-on"),
  iconAuthDone: document.querySelector(".icon-auth-done"),
  iconSignInDone: document.querySelector(".icon-signIn-done"),

  formAuth: document.querySelector(".auth"),
  formSignIn: document.querySelector(".signIn"),

  searchForm: document.querySelector("#search-form-js"),
  customerInput: document.querySelector("#customer-input-js"),
  chooseCountry: document.querySelector("#country-select-js"),
  chooseCountrySvg: document.querySelector("#country-select-svg"),

  galleryList: document.querySelector(".gallery"),

  eventsContainer: document.querySelector(".js-events-container"),
  body: document.querySelector("body"),
  eventsItem: document.querySelector(".gallery"),
  modalOverlay: document.querySelector(".js-modal"),
  modalCloseBtn: document.querySelector('button[data-action="close-modal"]'),
  event: document.querySelector(".events__image"),
  eventCard: document.querySelector(".events__link"),
  modal: document.querySelector(".modal"),
  modalContainer: document.querySelector(".modal__event-card"),

  buttonUp: document.querySelector("#buttonScrollUp"),
  footerSection: document.querySelector(".footer__section"),
  footerModal: document.querySelector(".footer__modal"),
};

export default refs;
