function loadUser()
{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res =>res.json())
    .then(data =>displayUser(data))
}
function displayUser(data)
{
    console.log(data.results[0]);
    // get name and show it
    const nameElement = document.getElementById("name");
    nameElement.innerText = data.results[0].name.title + " " + data.results[0].first + " " + data.results[0].name.last;
    // get gender and set it to gender
    const genderElement = document.getElementById("gender");
    genderElement.innerText = data.results[0].gender;
    // get locaction city
    const cityElement = document.getElementById("city");
    cityElement.innerText = data.results[0].location.city;

    // get street.
    const streetElement = document.getElementById("street");
    streetElement.innerText = data.results[0].location.street.name +" " +  data.results[0].location.street.number;

    // get image
    const imageElement = document.getElementById("image");
   const link= data.results[0].picture.large
   const imageDiv = document.createElement("div");
   imageDiv.innerHTML = `
   <img src = "${link}">
   `;
   imageElement.appendChild(imageDiv);

}
loadUser();