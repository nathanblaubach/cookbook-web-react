using Cookbook.Domain.Entities;
using Cookbook.Infrastructure;

namespace Cookbook.Tests.Infrastructure.JsonFileLoaderTests;

public static class LoadTests
{
    [Fact]
    public static void SuccessfullyLoadsRecipeFile()
    {
        // Act
        var recipes = JsonFileLoader.Load<IEnumerable<Recipe>>("recipes");
        
        // Assert
        Assert.NotNull(recipes);
        Assert.NotEmpty(recipes);
    }
    
    [Fact]
    public static void SuccessfullyLoadsCategoryFile()
    {
        // Act
        var categories = JsonFileLoader.Load<IEnumerable<Category>>("categories");
        
        // Assert
        Assert.NotNull(categories);
        Assert.NotEmpty(categories);
    }
}
