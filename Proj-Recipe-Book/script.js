import recipes from './recipes.mjs';

const container = document.getElementById('recipe-container');
const searchInput = document.getElementById('search');

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
});

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  return '★'.repeat(fullStars) + '⭐'.repeat(5 - fullStars);
}


function recipeCardTemplate(recipe) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />

      <div class="recipe-text">
        <div class="recipe-tags">
          ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>

        <h2 class="recipe-title">${recipe.name}</h2>
        <p class="recipe-rating">${renderStars(recipe.rating)}</p>
        <p class="recipe-description">${recipe.description}</p>
      </div>
    </div>
  `;
}



function renderRecipes(recipelist) {
    container.innerHTML = '';
    if (recipelist.length === 0) {
        container.innerHTML = `<p>No recipes found.</p>`;
        return;
    }
    recipelist.forEach(recipe => {
        container.innerHTML += recipeCardTemplate(recipe);
    });
}

function filterRecipes(query) {
    query = query.trim().toLowerCase();
    if (!query) return recipes;

    return recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });
}

renderRecipes(recipes);

searchInput.addEventListener('input', () => {
    const filtered = filterRecipes(searchInput.value);
    renderRecipes(filtered);
});


