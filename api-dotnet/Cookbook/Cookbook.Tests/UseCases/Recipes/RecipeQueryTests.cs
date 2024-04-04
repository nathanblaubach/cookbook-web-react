using Cookbook.Domain.Interfaces;
using Cookbook.Application.Queries;

namespace Cookbook.Tests;

public class RecipeQueryTests
{
    private readonly IRecipeQueries recipeQueries;

    public RecipeQueryTests()
    {
        recipeQueries = new RecipeQueries(new TestDatabase());
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("  \n ")]
    public async Task NullCategoriesWithNullOrWhitespaceStringsDoNotLimitResults(string searchTerm)
    {
        // Act
        var results = await recipeQueries.GetByParamsAsync(searchTerm, null);

        // Assert
        Assert.NotEmpty(results);
    }
    
    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("  \n ")]
    public async Task EmptyCategoriesWithNullOrWhitespaceStringsDoNotLimitResults(string searchTerm)
    {
        // Act
        var results = await recipeQueries.GetByParamsAsync(searchTerm, []);

        // Assert
        Assert.NotEmpty(results);
    }
}
