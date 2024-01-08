using Cookbook.Domain.Entities;

namespace Cookbook.Domain.Interfaces;

public interface IRecipeRepository
{
    /// <summary>
    /// Get all recipes in a repository
    /// </summary>
    /// <returns>The recipes in the repository</returns>
    Task<IEnumerable<Recipe>> GetAllAsync();
    
    /// <summary>
    /// Get the recipe with the given id
    /// </summary>
    /// <param name="recipeId">The id of the recipe to get</param>
    /// <returns>The recipe with the given id</returns>
    Task<Recipe> GetByIdAsync(long recipeId);
}