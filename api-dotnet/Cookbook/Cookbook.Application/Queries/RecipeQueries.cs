using Cookbook.Application.Interfaces;
using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Application.Queries;

public class RecipeQueries(IRecipeRepository recipeRepository) : IRecipeQueries
{
    public async Task<IEnumerable<Recipe>> GetBySearchTermAndCategoriesAsync(string searchTerm, IEnumerable<long> categoryIds)
    {
        var recipes = (await recipeRepository.GetAllAsync()).AsQueryable();

        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            recipes = recipes.Where(recipe => recipe.MatchesSearchTerm(searchTerm));
        }
        
        if (categoryIds?.Any() == true)
        {
            recipes = recipes.Where(recipe => recipe.MatchesCategoryList(categoryIds));
        }

        return recipes;
    }

    public async Task<Recipe> GetByIdAsync(long recipeId)
        => await recipeRepository.GetByIdAsync(recipeId);
}
