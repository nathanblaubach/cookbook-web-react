using Cookbook.Entities;
using Cookbook.Interfaces;

namespace Cookbook.Services;

public class RecipeService(IDatabase database) : IRecipeService
{
    public async Task<IEnumerable<Recipe>> GetByParamsAsync(string? searchTerm, IEnumerable<long>? categoryIds)
        => await Task.FromResult(database.Recipes.Where(recipe => recipe.MatchesSearchTermAndCategories(searchTerm, categoryIds)));

    public async Task<Recipe?> GetByIdAsync(long recipeId)
        => await Task.FromResult(database.Recipes.SingleOrDefault(recipe => recipe.Id == recipeId));
}
