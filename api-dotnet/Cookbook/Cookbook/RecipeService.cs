namespace Cookbook;

public class RecipeService(IRecipeRepository repository)
{
    public async Task<IEnumerable<Recipe>> GetByParamsAsync(string? searchTerm, IEnumerable<string>? categories)
        => await Task.FromResult(repository.GetRecipes().Where(recipe => recipe.MatchesSearchTermAndCategories(searchTerm, categories)));

    public async Task<Recipe?> GetByIdAsync(long recipeId)
        => await Task.FromResult(repository.GetRecipes().SingleOrDefault(recipe => recipe.Id == recipeId));

    public async Task<IEnumerable<string>> GetAllAsync()
        => await Task.FromResult(repository.GetRecipes().Select(recipe => recipe.Category).Distinct());
}
