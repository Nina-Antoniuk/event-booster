export default class Pagination {
  constructor({
    container = '.pagination',
    page = 1,
    pages = 20,
    keyword = '',
    country = '',
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

  hide() {
    this.container.classList.add('is-hidden');
  }

  bindEvents() {
    this.container.addEventListener('click', this.click.bind(this));
  }

  render(pages = this.totalPages) {
    let links = ``;

    for (let page = 0; page < pages; page += 1) {
      links += `<a class="pagination__link ${
        page === 0 ? 'pagination__link--active' : ''
      }" href="#">${page + 1}</a>`;
    }

    this.container.innerHTML = links;
  }

  goStart() {
    this.currentPage = 1;
  }

  click(event) {
    event.preventDefault();
    const target = event.target;
    const activeClass = 'pagination__link--active';

    if (target.nodeName !== 'A' || target.classList.contains(activeClass)) {
      return;
    }

    const currentActiveBtn = document.querySelector(`.${activeClass}`);
    currentActiveBtn.classList.remove(activeClass);

    target.classList.add(activeClass);

    this.goTo(target.textContent);
  }

  async goTo(page = 1) {
    if (page > this.totalPages) {
      return `Maximum ${this.totalPages} pages`;
    }

    this.currentPage = page;
    await this.getEventsByPagination(page);
  }

  async getEventsByPagination(pageNumber = this.currentPage) {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${
      this.querySearch
    }&countryCode=${this.queryCountry}&page=${
      pageNumber - 1
    }&apikey=QVx83fRMIRoVdGVGRMnXNMc8Ghr9B1Dr`;

    try {
      const data = await fetch(url);
      const response = await data.json();

      const pages = response.page.totalPages;
      this.totalPages = pages;

      console.log(response._embedded.events);
      return response._embedded.events;
    } catch (error) {
      console.log(error);
    }
  }
}

const pager = new Pagination({ pages: 12, keyword: 'abba' });

pager.render(12);

// Скинуть счетчик на первую страницу
pager.goStart();

// // Получить мероприятия первой страницы
pager.goTo(1);
