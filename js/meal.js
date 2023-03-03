const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meal) => {
    // 1.get container element
    const mealContainer = document.getElementById("meal-container");
    // resetting innertHTML to null to show new result for each query
    mealContainer.innerHTML = "";
    meal.forEach(meal => {
        console.log(meal);
        // 2. create child element of meal container for each meal
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("col");
        // 3. set content for child element
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>`;
    // 4. append chiled element with parent container
    mealContainer.appendChild(mealDiv);
    });
}
const searchMeals = () =>{
    // take user search query from search field value
    const searchField =document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    // set search query value to null
    searchField.value = "";
    // now search food according to user search text
    loadMeals(searchText);

    
}
loadMeals('rice');
