using Cookbook.Domain.Interfaces;

namespace Cookbook.Tests.UseCases.Recipes;

public class RecipeQueryTests 
{
    private readonly IRecipeQueries recipeQueries = CookbookServiceProvider.Get<IRecipeQueries>();

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("  \n ")]
    public async Task NullOrEmptyCategoriesAndNullOrWhitespaceStringsDoNotLimitResults(string searchTerm)
    {
        // Act and Assert
        Assert.NotEmpty(await recipeQueries.GetByParamsAsync(searchTerm, null));
        Assert.NotEmpty(await recipeQueries.GetByParamsAsync(searchTerm, []));
    }
}
