// import { countries } from './countries';
import sprits from "../images/svg/sprits.svg";

const getTemplate = (data = [], placeholder) => {
  let text = placeholder ?? "Placeholder по умолчанию";

  const countriesSort = data.sort((a, b) => (a.name > b.name ? 1 : -1));
  const items = countriesSort
    .map((item) => {
      return createMarkup(item);
    })
    .join("");
  console.log(data);

  function createMarkup(item) {
    return `
            <li class="select__item" data-type="item" data-id="${item.id}" >${item.name}</li>
        `;
  }
  return `
        <div class="select__input input-search" data-type="input">
            <span data-type="name">${text}</span>
            <svg class="input-icon" id="country-select-svg">
                <use href="${sprits}#icon-select-down" data-type="arrow"></use>
            </svg>
        </div>
        <div class="select__dropdown input-search">
            <ul class="select__list">
                ${items}
            </ul>
        </div>
    `;
};

export class Select {
  constructor(selector, options) {
    this.elem = document.querySelector(selector);
    this.options = options;
    this.selectedId = null;

    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.elem.classList.add("select");
    this.elem.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.elem.addEventListener("click", this.clickHandler);
    this.arrow = this.elem.querySelector('[data-type="arrow"]');
    this.name = this.elem.querySelector('[data-type="name"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "input" || type === "name" || type === "arrow") {
      this.toggle();
    } else if (type === "item") {
      const id = event.target.dataset.id;
      this.select(id);
    }
  }

  get isOpen() {
    return this.elem.classList.contains("open");
  }

  get current() {
    return this.options.data.find(
      (item) => item.id === Number(this.selectedId)
    );
  }

  select(id) {
    this.selectedId = id;
    console.log("id", this.current.name);
    console.log("id", this.selectedId);
    this.name.textContent = this.current.name;
    console.log(this.name.textContent);
    this.elem.querySelectorAll('[data-type="item"]').forEach((el) => {
      el.classList.remove("selected");
    });
    this.elem.querySelector(`[data-id="${id}"]`).classList.add("selected");

    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.elem.classList.add("open");
    this.arrow.removeAttribute("href", `${sprits}#icon-select-down`);
    this.arrow.setAttribute("href", `${sprits}#icon-select-up`);
  }

  close() {
    this.elem.classList.remove("open");
    this.arrow.removeAttribute("href", `${sprits}#icon-select-up`);
    this.arrow.setAttribute("href", `${sprits}#icon-select-down`);
  }

  destroy() {
    this.elem.removeEventListener("click", this.clickHandler);
  }
}
