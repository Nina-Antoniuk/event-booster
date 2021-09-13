export default class Pagination {
  constructor({
    container = '.pagination',
    page = 1,
    pages = 11,
    keyword = 'abba',
    country = '',
    hidden = false,
  } = {}) {
    this.container = document.querySelector(container);
    this.currentPage = page;
    this.totalPages = pages;
    this.querySearch = keyword;
    this.queryCountry = country;
    this.events = [];

    hidden && this.hide();
  }

  hide() {
    this.container.classList.add('is-hidden');
  }

  render(pages = this.totalPages - 1) {
    let ren = ``;

    for (let page = 1; page < pages; page += 1) {
      ren +=
        page === 1
          ? `<a class="pagination__link pagination__link--active" href="#">${page}</a>`
          : `<a class="pagination__link" href="#">${page}</a>`;
    }

    this.container.innerHTML = ren;
  }

  goStart() {
    this.currentPage = 1;
  }

  async goTo(page = 1) {
    if (page > this.totalPages) {
      return `Maximum ${this.totalPages} pages`;
    }

    this.currentPage = page;
    await this.getEventsByPagination();
  }

  async getEventsByPagination() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${this.querySearch}&countryCode=${this.queryCountry}&page=${this.currentPage}&apikey=QVx83fRMIRoVdGVGRMnXNMc8Ghr9B1Dr`;

    try {
      const data = await fetch(url);
      const response = await data.json();

      const pages = response.page.totalPages;
      this.totalPages = pages - 1;

      this.render(pages);

      console.log(response._embedded.events);
      return response._embedded.events;
    } catch (error) {
      console.log(error);
    }
  }
}

const pager = new Pagination();

// Скинуть счетчик на первую страницу
pager.goStart();

// Получить мероприятия первой страницы
pager.goTo();

setTimeout(() => {
  // Получить мероприятия второй страницы
  pager.goTo(2);
}, 400);

setTimeout(() => {
  // Получить мероприятия третей страницы
  pager.goTo(3);
}, 400);

setTimeout(() => {
  // Получить мероприятия одиннадцатой страницы
  pager.goTo(11);
}, 500);

setTimeout(() => {
  // Получить мероприятия несуществующей страницы
  pager.goTo(12);
}, 700);
