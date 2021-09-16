import { API_KEY, BASE_URL } from "./consts";
export default class Pagination {
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
    document.querySelector("body").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  // To hide pagination
  hide() {
    this.container.classList.add("is-hidden");
  }

  // To create pagination items
  render(pages = this.getTotalPages()) {
    let { container, currentPage, totalPages } = this;
    let links = ``;

    const ellipsis = `<span class="pagination__link pagination__link--ellipsis">...</span>`;

    this.newTotalPages(pages);

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
    this.totalPages = newPages;
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
    document.querySelector("body").classList.add("loading");

    // Making css class to new element
    target.classList.add(activeClass);

    // Making the transition to the page
    this.goTo(target.textContent);

    this.render();
  }

  // to go to a specific page
  async goTo(page = 1) {
    if (page > this.getTotalPages()) {
      return `Maximum ${this.getTotalPages()} pages`;
    }

    this.newCurrentPage(page);
    this.render();

    await this.getEventsByPagination(page);

    this.goTop();
  }

  // Receive events
  async getEventsByPagination(pageNumber = this.getCurrentPage()) {
    const url = `${BASE_URL}?keyword=${this.querySearch}&countryCode=${
      this.queryCountry
    }&page=${pageNumber - 1}&apikey=${API_KEY}`;

    try {
      // Send a request
      const data = await fetch(url);
      const response = await data.json();

      const pages = response.page.totalPages;
      this.newTotalPages(pages);

      setTimeout(() => {
        document.querySelector("body").classList.remove("loading");
      }, 200);

      // Returning an array of events
      console.log(response._embedded.events);
      return response._embedded.events;
    } catch (error) {
      console.log(error);
    }
  }
}

// To do an instance of a Class
const pager = new Pagination({ pages: 12, keyword: "abba" });

// Call to create 12 pagination items
pager.render(2);

// Throw counter to first page
pager.newCurrentPage(1);

// // Get Front Page Events
pager.goTo(1);
