const loadMeals=()=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals));
}

const displayMeals=(meals=>{
    // console.log(meals)
// Step 1:full container element
const mealsContrainer=document.getElementById('meal-container')
// (repeat means loop)
    meals.forEach(meal=> {
        console.log(meal);
// step 2: create child for each element(div)
const mealDiv=document.createElement('div');
    mealDiv.classList.add('col');
// step 3: set content of the child element
    mealDiv.innerHTML =`
    <div class="card">
    <img src="${meal.
        strMealThumb
        }" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadMealDetail(${meal.
            idMeal
            })" type="button">More</button>
        </div>
    </div>
    `
// step 4: append child
        mealsContrainer.appendChild(mealDiv);
});
})

const searchMeals=()=>{
    const searchFood=document.getElementById=('search-field').value;
        console.log(searchFood);
}

const loadMealDetail=idMeal=>{
    const url=`www.themealdb.com/api/json/v1/1/lookup.php?i=${
        idMeal
        }`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.long(data.meals[0]))

}
loadMeals('chi');