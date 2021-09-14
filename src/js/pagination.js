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
    this.currentPage = page; // Номер текущей страницы
    this.totalPages = pages; // Количество страниц при поиске
    this.querySearch = keyword; // Ключевое слово для поиска
    this.queryCountry = country; // Код страны для поиска

    hidden && this.hide();
    this.bindEvents();
  }

  // Метод для скрытия пагинации
  hide() {
    this.container.classList.add('is-hidden');
  }

  // Метод для сздания элементов пагинации
  render(pages = this.totalPages) {
    // Записываем новое значения общего количества страниц
    this.totalPages = pages;
    let links = ``;

    // Создаем нужное количество элементов пагинации
    for (let page = 0; page < pages; page += 1) {
      links += `<a class="pagination__link ${
        page === 0 ? 'pagination__link--active' : ''
      }" href="#">${page + 1}</a>`;
    }

    this.container.innerHTML = links;
  }

  // Метод обнуления текущей страницы
  goStart() {
    this.currentPage = 1;
  }

  // Метод для добавления обработчика события с привязанным контексом
  bindEvents() {
    this.container.addEventListener('click', this.click.bind(this));
  }

  // Метод для клика на ссылку
  click(event) {
    event.preventDefault();
    const target = event.target;
    const activeClass = 'pagination__link--active';

    // Проверяем нажатия по ссылке
    if (target.nodeName !== 'A' || target.classList.contains(activeClass)) {
      return;
    }

    // Удаляем класс у активного элемента
    const currentActiveBtn = document.querySelector(`.${activeClass}`);
    currentActiveBtn.classList.remove(activeClass);

    // Добавляем класс к новому элементу
    target.classList.add(activeClass);

    // Делаем переход на страницу
    this.goTo(target.textContent);
  }

  // Метод для перехода на конкретную страницу
  async goTo(page = 1) {
    // Проверка на максимальное количество страниц
    if (page > this.totalPages) {
      return `Maximum ${this.totalPages} pages`;
    }

    // Записываем новое значения текущей страницы
    this.currentPage = page;

    // Делаем новый запрос на мероприятия со значением новой текущей страницы
    await this.getEventsByPagination(page);
  }

  // Метод для получения мероприятий
  async getEventsByPagination(pageNumber = this.currentPage) {
    // Нужно будет оптимизировать
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${
      // ключевое слово поиска
      this.querySearch
    }&countryCode=${
      // страна поиска
      this.queryCountry
    }&page=${
      // номер страницы (отсчет идет с 0 )
      pageNumber - 1
    }&apikey=QVx83fRMIRoVdGVGRMnXNMc8Ghr9B1Dr`;

    try {
      // Отправляем запрос
      const data = await fetch(url);
      const response = await data.json();

      // Записываем новое значения общего количества страниц
      const pages = response.page.totalPages;
      this.totalPages = pages;

      // Возвращаем масив мероприятий
      console.log(response._embedded.events);
      return response._embedded.events;
    } catch (error) {
      console.log(error);
    }
  }
}

// Делам экземпляр класса
const pager = new Pagination({ pages: 12, keyword: 'abba' });

// Вызываем метод для создания 11 элементов пагинации
pager.render(12);

// Скинуть счетчик на первую страницу
pager.goStart();

// // Получить мероприятия первой страницы
pager.goTo(1);
