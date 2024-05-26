using Cookbook.Entities;

namespace Cookbook.Interfaces;

public interface IRecipeService
{
    Task<IEnumerable<Recipe>> GetByParamsAsync(string? searchTerm, IEnumerable<long>? categoryIds);
    Task<Recipe?> GetByIdAsync(long recipeId);
}
