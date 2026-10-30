const URL = "https://dummyjson.com/recipes";

const statusBox = document.getElementById("status");
const message = document.getElementById("message");
const recipesBox = document.getElementById("recipes");

// Display recipe cards
const showRecipes = (recipes) => {
  recipes.forEach((recipe) => {
    let items = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");

    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
      ` <img src="${recipe.image}" alt="${recipe.name}" referrerpolicy="no-referrer"
        onerror="this.onerror=null; this.src='https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp'">

      <div class="info">
        <h3>${recipe.name}</h3>
        <p>Cuisine: ${recipe.cuisine}</p>
        <p>Prep time: ${recipe.prepTimeMinutes || "N/A"} min</p>
      </div>

      <button>Show Ingredients</button>
      <ul class="ingredients">${items}</ul> `
    ;

    let btn = card.querySelector("button");
    let list = card.querySelector(".ingredients");

    // Toggle ingredients visibility
    btn.addEventListener("click", () => {
      let isOpen = list.classList.toggle("show");
      btn.innerText = isOpen ? "Hide Ingredients" : "Show Ingredients";
    });

    recipesBox.appendChild(card);
  });
};

// Fetch recipes from API
const getRecipes = async () => {
  message.innerText = "Loading recipes...";
  message.className = "message show loading";

  try {
    let response = await fetch(URL);
    statusBox.innerText = "HTTP status code: " + response.status;
    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error("Server returned status " + response.status);
    }

    let data = await response.json();
    message.className = "message";
    showRecipes(data.recipes.slice(0, 6));
  } 
  
  catch (err) {
    message.innerText = "Could not load recipes: " + err.message;
    message.className = "message show error";
  }
};

getRecipes();