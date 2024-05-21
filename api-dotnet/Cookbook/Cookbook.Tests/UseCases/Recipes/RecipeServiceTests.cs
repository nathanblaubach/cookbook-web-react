using Cookbook.Interfaces;

namespace Cookbook.Tests.UseCases.Recipes;

public class RecipeServiceTests 
{
    private readonly IRecipeService service = CookbookServiceProvider.Get<IRecipeService>();

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("  \n ")]
    public async Task NullOrEmptyCategoriesAndNullOrWhitespaceStringsDoNotLimitResults(string searchTerm)
    {
        // Act and Assert
        Assert.NotEmpty(await service.GetByParamsAsync(searchTerm, null));
        Assert.NotEmpty(await service.GetByParamsAsync(searchTerm, []));
    }
}
