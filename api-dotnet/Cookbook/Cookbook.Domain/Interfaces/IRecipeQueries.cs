using Cookbook.Domain.Entities;

namespace Cookbook.Domain.Interfaces;

public interface IRecipeQueries
{
    Task<IEnumerable<Recipe>> GetByParamsAsync(string? searchTerm, IEnumerable<long>? categoryIds);
    Task<Recipe> GetByIdAsync(long recipeId);
}
