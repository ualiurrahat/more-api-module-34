const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const countriesContainer = document.getElementById("country-container");
    // for(const country of countries)
    // {
    //     console.log(country);
    // }
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0]: "no capital"}</h4>
        <button onclick = "loadCountryDetails('${country.cca2}')">Details</button>
        
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetails = code =>{
    const url = `
    https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data =>showCountryDetails(data[0]))
}

const showCountryDetails = country =>{
    const detailContainer = document.getElementById("country-detail");
    detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    
    `
}
loadCountries();