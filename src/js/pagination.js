import { API_KEY, BASE_URL } from "./consts";
import refs from "./refs";
import renderGalleryMarkup from "./rendergallery";
import { spinner } from "./spinner";
import { showNotification, closeNotification } from "./notification";
class Pagination {
  constructor({
    container = ".pagination",
    page = 1,
    pages = 20,
    keyword = "",
    country = "",
    hidden = false,
  } = {}) {
    this.container = document.querySelector(container);
    this.currentPage = page;
    this.totalPages = pages;
    this.querySearch = keyword;
    this.queryCountry = country;

    hidden && this.hide();
    this.bindEvents();
  }

  // Go to the top of the page
  goTop() {
    refs.galleryList.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  // To hide pagination
  hide() {
    this.container.classList.add("is-hidden");
  }

  // To show pagination
  show() {
    this.container.classList.remove("is-hidden");
  }

  // To create pagination items
  render(pages = this.getTotalPages()) {
    this.newTotalPages(pages);
    const { container, currentPage, totalPages } = this;
    let links = ``;

    const ellipsis = `<span class="pagination__link pagination__link--ellipsis">...</span>`;

    if (totalPages <= 7) {
      for (let page = 0; page < pages; page += 1) {
        links += `<a class="pagination__link ${
          page === Number(currentPage) - 1 ? "pagination__link--active" : ""
        }" href="#">${page + 1}</a>`;
      }
    }

    if (Number(currentPage) < 5 && totalPages > 7) {
      for (let page = 0; page < 5; page += 1) {
        links += `<a class="pagination__link ${
          page === Number(currentPage) - 1 ? "pagination__link--active" : ""
        }" href="#">${page + 1}</a>`;
      }
      links += `${ellipsis}<a class="pagination__link" href="#">${totalPages}</a>`;
    }

    if (
      Number(currentPage) >= 5 &&
      Number(currentPage) < Number(totalPages) - 3
    ) {
      links += `<a class="pagination__link" href="#">1</a>${ellipsis}`;

      for (let i = 3; i > 1; i -= 1) {
        links += `<a class="pagination__link" href="#">${
          Number(currentPage) - i + 1
        }</a>`;
      }

      links += `<a class="pagination__link pagination__link--active" href="#">${currentPage}</a>`;

      for (let i = 1; i < 3; i += 1) {
        links += `<a class="pagination__link" href="#">${
          Number(currentPage) + i
        }</a>`;
      }

      links += `${ellipsis}<a class="pagination__link" href="#">${totalPages}</a>`;
    }

    if (
      Number(totalPages) > 7 &&
      Number(currentPage) >= Number(totalPages) - 3
    ) {
      links += `<a class="pagination__link" href="#">1</a>${ellipsis}`;
      for (let page = Number(totalPages) - 5; page < totalPages; page += 1) {
        links += `<a class="pagination__link ${
          page === Number(currentPage) - 1 ? "pagination__link--active" : ""
        }" href="#">${page + 1}</a>`;
      }
    }

    container.innerHTML = links;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getTotalPages() {
    return this.totalPages;
  }

  newCurrentPage(newPage) {
    this.currentPage = newPage;
  }

  newTotalPages(newPages) {
    // API has limitations
    // "errorsCode": "DIS1035",
    // "detail": "API Limits Exceeded: Max paging depth exceeded. (page * size) must be less than 1,000",
    if (newPages > 50) {
      this.totalPages = 50;
      return;
    }

    this.totalPages = newPages;
  }

  newKeyword(keyword) {
    this.querySearch = keyword;
  }

  newCountry(country) {
    this.queryCountry = country;
  }

  // Add an event handler with a bound context
  bindEvents() {
    this.container.addEventListener("click", this.click.bind(this));
  }

  // Click on the link
  click(event) {
    event.preventDefault();
    const target = event.target;
    const activeClass = "pagination__link--active";

    // Checking link clicks
    if (target.nodeName !== "A" || target.classList.contains(activeClass)) {
      return;
    }

    // Removing css class from the active element
    const currentActiveBtn = document.querySelector(`.${activeClass}`);
    currentActiveBtn.classList.remove(activeClass);

    this.newCurrentPage(target.textContent);

    // Add a loading spinner
    spinner.loading();

    // Making css class to new element
    target.classList.add(activeClass);

    // Making the transition to the page
    this.goToPage(target.textContent);
  }

  // to go to a specific page
  async goToPage(page = 1) {
    if (page > this.getTotalPages()) {
      return `Maximum ${this.getTotalPages()} pages`;
    }

    this.newCurrentPage(page);

    await this.getEventsByPagination(page);

    this.goTop();
  }

  // Receive events
  async getEventsByPagination(pageNumber = this.getCurrentPage()) {
    const url = `${BASE_URL}?keyword=${this.querySearch}&countryCode=${
      this.queryCountry
    }&apikey=${API_KEY}&page=${pageNumber - 1}`;

    try {
      // Send a request
      const data = await fetch(url);
      const response = await data.json();

      const pages = response.page.totalPages;
      this.newTotalPages(pages);

      this.render();
      spinner.loaded();

      // Returning an array of events
      renderGalleryMarkup(response._embedded.events);
      return response._embedded.events;
    } catch (error) {
      showNotification("error", "Something went wrong", "Try again");
      setTimeout(closeNotification, 2500);
      spinner.loaded();
    }
  }

  letsGo({ keyword, countryCode, pages } = {}) {
    this.newCurrentPage(1);
    this.newKeyword(keyword);
    this.newCountry(countryCode);

    if (pages < 2) {
      this.hide();
      return;
    }

    this.render(pages);
    this.show();
  }
}

// To do an instance of a Class
export const pager = new Pagination();
