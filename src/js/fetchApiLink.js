// const API_KEY = 'Iks6oDIpGdxCIBqWeGHShYrO2fcgxZEd';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'

// export default function fetchEvents(searchQuery) {
//     return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&${searchQuery}`)
//     .then(response => {
//         if(response.ok) {return response.json()}
//     throw new Error('Oops, something went wrong')
//     })
//     .catch(error => console.log('Error:',error))
    
// }