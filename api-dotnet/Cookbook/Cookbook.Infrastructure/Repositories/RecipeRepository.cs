using Cookbook.Domain.Entities;
using Cookbook.Domain.Exceptions;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Infrastructure.Repositories;

public class RecipeRepository(IDatabase database) : IRecipeRepository
{
    /// <inheritdoc />
    public async Task<IEnumerable<Recipe>> GetAllAsync()
        => database.Recipes;
    
    /// <inheritdoc />
    public async Task<Recipe> GetByIdAsync(long recipeId)
        => database.Recipes.SingleOrDefault(recipe => recipe.Id == recipeId) ?? throw new NotFoundException();
}