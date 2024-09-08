/**
 * Filter recipes based on the search term.
 * @param {Object[]} recipes
 * @param {string | null | undefined} searchTerm
 * @param {string[] | null | undefined} selectedCategories
 * @returns the filtered recipes
 */
function filterRecipes(recipes, searchTerm, selectedCategories) {
  const normalizedSearchTerm = (searchTerm || "").trim().toLowerCase();
  const normalizedSelectedCategories = selectedCategories || [];
  if (normalizedSearchTerm === "" && normalizedSelectedCategories.length === 0) {
    return recipes;
  }
  return recipes.filter(recipe => 
    (normalizedSearchTerm === "" || searchTermMatchesRecipeNameOrIngredients(recipe, normalizedSearchTerm)) &&
    (normalizedSelectedCategories.length === 0 || normalizedSelectedCategories.includes(recipe.category))
  );
}

function searchTermMatchesRecipeNameOrIngredients(recipe, normalizedSearchTerm) {
  return recipe.name.toLowerCase().includes(normalizedSearchTerm) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(normalizedSearchTerm),
    );
}

if (typeof module !== "undefined") {
  module.exports = {
    filterRecipes,
  };
}
