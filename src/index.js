 import './sass/main.scss';
import fetchAPI from './js/fetchAPI'
import markup from './templates/gallery-markup.hbs'

window.addEventListener('DOMContentLoaded', onPageLoad)

function onPageLoad () {

 }


//  const y = fetchAPI()
// const list = document.querySelector('.gallery')

// const x = y.map(markup).join('');
// list.insertAdjacentHTML('beforeend', x);


const list = document.querySelector('.gallery')

 fetchAPI().then(searchResults)

function searchResults(data) {

list.insertAdjacentHTML('beforeend', markup(data))
 
}
