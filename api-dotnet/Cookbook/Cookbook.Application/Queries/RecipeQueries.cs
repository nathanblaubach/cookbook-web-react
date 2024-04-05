using Cookbook.Domain.Entities;
using Cookbook.Domain.Exceptions;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Application.Queries;

public class RecipeQueries(IDatabase database) : IRecipeQueries
{
    public async Task<IEnumerable<Recipe>> GetByParamsAsync(string? searchTerm, IEnumerable<long>? categoryIds)
        => await Task.FromResult(database.Recipes.Where(recipe => recipe.MatchesSearchTermAndCategories(searchTerm, categoryIds)));

    public async Task<Recipe> GetByIdAsync(long recipeId)
        => await Task.FromResult(database.Recipes.SingleOrDefault(recipe => recipe.Id == recipeId)) ?? throw new NotFoundException();
}
