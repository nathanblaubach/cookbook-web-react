using Cookbook.Domain.Entities;
using Cookbook.Domain.Exceptions;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Application.Queries;

public class RecipeQueries(IDatabase database) : IRecipeQueries
{
    public async Task<IEnumerable<Recipe>> GetByParamsAsync(string? searchTerm, IEnumerable<long>? categoryIds)
    {
        var recipes = database.Recipes.AsQueryable();

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
        => database.Recipes.SingleOrDefault(recipe => recipe.Id == recipeId) ?? throw new NotFoundException();
}
