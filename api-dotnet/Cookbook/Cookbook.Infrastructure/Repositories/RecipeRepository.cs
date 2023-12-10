using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Infrastructure.Repositories;

public class RecipeRepository : IRecipeRepository
{
    private readonly IEnumerable<Recipe> recipes = JsonFileLoader.Load<IEnumerable<Recipe>>("recipes");
    
    /// <inheritdoc />
    public async Task<IEnumerable<Recipe>> GetAllAsync()
        => recipes;
    
    /// <inheritdoc />
    public async Task<Recipe?> GetByIdAsync(long recipeId)
        => recipes.SingleOrDefault(recipe => recipe.Id == recipeId);
}