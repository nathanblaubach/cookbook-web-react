using System.Data;
using System.Text.Json;

namespace Meals.Adapters.Recipes;

public class JsonRecipeRepository(IReader jsonReader) : IRecipeRepository
{
    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    private async Task<IEnumerable<Recipe>> ReadRecipesAsync()
    {
        var jsonRecipes = JsonSerializer.Deserialize<JsonRecipe[]>(jsonReader.Read(), options)
            ?? throw new DataException("Could not read data");
        return await Task.FromResult(jsonRecipes.Select(JsonRecipeToRecipeMapper.Map));
    }

    public async Task<IEnumerable<Recipe>> GetRecipesBySearchTermAndCategoriesAsync(string? searchTerm, IEnumerable<string>? categories)
    {
        var normalizedSearchTerm = string.IsNullOrWhiteSpace(searchTerm) ? string.Empty : searchTerm;
        var activeCategories = categories?.ToList() ?? [];
        var recipes = await ReadRecipesAsync();

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
        var recipes = await ReadRecipesAsync();
        return recipes.SingleOrDefault(recipe => recipe.Id == recipeId);
    }

    public async Task<IEnumerable<string>> GetCategoriesAsync()
    {
        var recipes = await ReadRecipesAsync();
        return recipes.Select(recipe => recipe.Category).Distinct();
    }
}
