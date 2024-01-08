using System.Data;
using Cookbook.Domain.Entities;
using Cookbook.Domain.Exceptions;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Infrastructure.Repositories;

public class RecipeRepository : IRecipeRepository
{
    private readonly IEnumerable<Recipe> recipes;
    
    public RecipeRepository()
    {
        recipes = JsonFileLoader.Load<IEnumerable<Recipe>>("recipes")
            ?? throw new DataException("Could not read recipes from file");
    }

    /// <inheritdoc />
    public async Task<IEnumerable<Recipe>> GetAllAsync()
        => recipes;
    
    /// <inheritdoc />
    public async Task<Recipe> GetByIdAsync(long recipeId)
        => recipes.SingleOrDefault(recipe => recipe.Id == recipeId) ?? throw new NotFoundException();
}