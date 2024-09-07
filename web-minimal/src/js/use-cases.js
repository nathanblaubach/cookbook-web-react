/**
 * Filter recipes based on the search term.
 * @param {Object[]} recipes
 * @param {string | null | undefined} searchTerm
 * @returns the filtered recipes
 */
function filterRecipes(recipes, searchTerm) {
  const normalizedSearchTerm = (searchTerm || "").trim().toLowerCase();
  if (normalizedSearchTerm === "") {
    return recipes;
  }
  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(normalizedSearchTerm) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(normalizedSearchTerm),
    )
  );
}

if (typeof module !== "undefined") {
  module.exports = {
    filterRecipes,
  };
}
