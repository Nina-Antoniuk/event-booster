import { API_KEY, BASE_URL } from "./consts";
import renderGalleryMarkup from "./rendergallery";
import { pager } from "./pagination";
import { showNotification, closeNotification } from "./notification";
import { spinner } from "./spinner";

export default async function aFetchApi(querySearch = "", queryCountry = "") {
  const url = `${BASE_URL}?keyword=${querySearch}&countryCode=${queryCountry}&apikey=${API_KEY}`;

  // Add a loading spinner
  spinner.loading();
  try {
    const data = await fetch(url);
    const response = await data.json();

    renderGalleryMarkup(response._embedded.events);

    pager.letsGo({
      keyword: querySearch,
      countryCode: queryCountry,
      pages: response.page.totalPages,
    });

    spinner.loaded();
  } catch (error) {
    pager.hide();

    showNotification("error", "Something went wrong", "Try again");
    setTimeout({ closeNotification }, 2500);

    spinner.loaded();
  }
}
