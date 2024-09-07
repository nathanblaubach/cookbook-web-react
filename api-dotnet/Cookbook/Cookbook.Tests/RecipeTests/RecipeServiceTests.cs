namespace Cookbook.Tests.RecipeTests;

public class RecipeServiceTests
{
    private readonly RecipeService service = CookbookServiceProvider.Get<RecipeService>();

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
