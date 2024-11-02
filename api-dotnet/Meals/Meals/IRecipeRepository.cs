namespace Meals;

public interface IRecipeRepository
{
    Task<IEnumerable<Recipe>> GetRecipesBySearchTermAndCategoriesAsync(string? searchTerm, IEnumerable<string>? categories);
    Task<Recipe?> GetRecipeByIdAsync(long recipeId);
    Task<IEnumerable<string>> GetCategoriesAsync();
}
