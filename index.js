function checkRecipe() {
    try {
        const recipeRef = document.querySelector("#nameRecipe");
        const recipeRes = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeRef.value}`);

        recipeRes
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                const meals = data.meals;
                const divRef = document.querySelector("#message");
                if (meals == null) {

                    divRef.innerHTML = "Recipe Not Found";
                    return;
                }

                    divRef.innerHTML = meals.map((meal) => {
                        return `
                    <div>

                        <img 
                            src="${meal.strMealThumb}" 
                            width="250"
                        >

                        <h2>${meal.strMeal}</h2>

                        <p>
                            Category: ${meal.strCategory}
                        </p>

                        <p>
                            Area: ${meal.strArea}
                        </p>

                    </div>
                `;
                    }).join("");
            })
            .catch((err)=>{
            console.log(err);
        });
    }
    catch (err) {
        console.log(err);
        alert("Something Went wrong");
    }
}