import './sass/main.scss';
import fetchApi from './js/fetchApi'
import markup from './templates/gallery-markup.hbs'

window.addEventListener('DOMContentLoaded', onPageLoad)

function onPageLoad () {

 }


const list = document.querySelector('.gallery')

const renderCard = fetchApi().map(markup).join('');
list.insertAdjacentHTML('beforeend', renderCard);


// const list = document.querySelector('.gallery')

//  fetchApi().then(searchResults).then(console.log)

// function searchResults(data) {

// list.insertAdjacentHTML('beforeend', markup(data))
 
// }
