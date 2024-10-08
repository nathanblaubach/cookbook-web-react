namespace Cookbook;

public class RecipeService(IRecipeRepository repository)
{
    public async Task<IEnumerable<Recipe>> GetRecipesBySearchTermAndCategoriesAsync(string? searchTerm, IEnumerable<string>? categories)
    {
        var normalizedSearchTerm = string.IsNullOrWhiteSpace(searchTerm) ? string.Empty : searchTerm;
        var activeCategories = categories?.ToList() ?? [];
        var recipes = await repository.GetRecipesAsync();

        if (normalizedSearchTerm == string.Empty && activeCategories.Count == 0)
        {
            return recipes;
        }

        return recipes.Where(recipe =>
        {
            var matchesSearchTerm = normalizedSearchTerm == string.Empty
                || recipe.Name.Contains(normalizedSearchTerm, StringComparison.InvariantCultureIgnoreCase)
                || recipe.Ingredients.Any(ingredient => ingredient.Contains(normalizedSearchTerm, StringComparison.InvariantCultureIgnoreCase));

            var matchesCategoryList = activeCategories.Count == 0 || activeCategories.Contains(recipe.Category);

            return matchesSearchTerm && matchesCategoryList;
        });
    }

    public async Task<Recipe?> GetRecipeByIdAsync(long recipeId)
    {
        var recipes = await repository.GetRecipesAsync();
        return recipes.SingleOrDefault(recipe => recipe.Id == recipeId);
    }

    public async Task<IEnumerable<string>> GetCategoriesAsync()
    {
        var recipes = await repository.GetRecipesAsync();
        return recipes.Select(recipe => recipe.Category).Distinct();
    }
}
