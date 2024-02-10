using Cookbook.Domain.Interfaces;
using Cookbook.Infrastructure;
using Cookbook.Infrastructure.Repositories;

namespace Cookbook.Tests.Infrastructure.Repositories.RecipeRepositoryTests;

public class GetByIdAsyncTests
{
    private readonly IRecipeRepository _recipeRepository = new RecipeRepository(new Database());
    
    [Theory]
    [InlineData(1)]
    [InlineData(34)]
    [InlineData(59)]
    [InlineData(63)]
    public async Task SuccessfullyLoadsRecipe_WhenItExists(long recipeId)
    {
        // Act
        var recipe = await _recipeRepository.GetByIdAsync(recipeId);
        
        // Assert
        Assert.NotNull(recipe);
        Assert.NotNull(recipe.Name);
        Assert.NotEmpty(recipe.Name);
    }
    
    [Theory]
    [InlineData(-1)]
    [InlineData(600)]
    public async Task DoesNotLoadRecipe_WhenItDoesNotExist(long recipeId)
    {
        // Act
        var recipe = await _recipeRepository.GetByIdAsync(recipeId);
        
        // Assert
        Assert.Null(recipe);
    }
}