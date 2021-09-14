export default function fetchApi() {
  const API_KEY = 'Iks6oDIpGdxCIBqWeGHShYrO2fcgxZEd';
  const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

  return fetch(`${BASE_URL}/events.json?&apikey=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Oops, something went wrong');
    })
    .then(data => {
      return data._embedded.events;
    })
    .catch(error => console.log('Error:', error));
}
