fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
.then(res => res.json())
.then(json => {

    let jsObj = json
    for (let key in jsObj) {

        let countryOption = document.createElement('option');
        let countrySelect = document.getElementById('countrySelect');

        countryOption.innerHTML = key;
        countrySelect.appendChild(countryOption);
    }
})