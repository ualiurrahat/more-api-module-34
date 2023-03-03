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
        // console.log(country.capital);
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0]: "no capital"}</h4>
        
        `;
        countriesContainer.appendChild(countryDiv);
    });
}
loadCountries();