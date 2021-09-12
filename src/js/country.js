const requestAddress = 'https://app.ticketmaster.com/discovery/v2/events.json?';
const API_KEY = 'Iks6oDIpGdxCIBqWeGHShYrO2fcgxZEd';
const request = `${requestAddress}apikey=${API_KEY}`;
// https://app.ticketmaster.com/discovery/v2/events.json?apikey={apikey}

function fetchEvent(request) {
  return fetch(requestData)
    .then(response => {
      if (response.status === 404) {
        error('Nothing found');
      }
      return response.json();
    })
    .catch(error => console.log('error'));
}
console.log(fetchEvent(request));

export default fetchPicture;
