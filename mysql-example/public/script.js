async function init(){
    const url = "http://localhost:3000/api";
    const recipesElement = document.querySelector('#recipes');
    const response = await fetch(url);
    const recipes = await response.json();
    recipesElement.innerHTML = "";
    recipes.forEach(function(recipe) {
        recipesElement.innerHTML += `<div class="card">
        <div class="card-header">${recipe.name}</div>
        <div class="card-body">
            <h5 class="card-title">${recipe.ingredients}</div>
            <p class="card-text">${recipe.bakeTime}</p>
        </div></div>`;
    });

    document.querySelector('#btnSearch').addEventListener('click', function(){
        const searchQuery = document.querySelector('#txtSearch').value;
        const results = recipes.filter(function(recipe){
            return recipe.name.indexOf(searchQuery) > -1
        });
        recipesElement.innerHTML = "";
        results.forEach(function(recipe) {
            recipesElement.innerHTML += `<div class="card">
            <div class="card-header">${recipe.name}</div>
            <div class="card-body">
                <h5 class="card-title">${recipe.ingredients}</div>
                <p class="card-text">${recipe.bakeTime}</p>
            </div></div>`;
        });
    });
}

init();