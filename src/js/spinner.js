import refs from "./refs";

class Spinner {
  constructor() {
    this.element = refs.body;
  }

  loading() {
    this.element.classList.add("loading");
    return "loading...";
  }

  loaded() {
    setTimeout(() => {
      this.element.classList.remove("loading");
    }, 1600);
    return "loaded!!!";
  }
}

export const spinner = new Spinner();
