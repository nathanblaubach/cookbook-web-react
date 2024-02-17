using Cookbook.Application.Interfaces;
using Cookbook.Application.Queries;
using Cookbook.Infrastructure.Repositories;

namespace Cookbook.Tests;

public class GetByParams
{
    private readonly IRecipeQueries queries;

    public GetByParams()
    {
        queries = new RecipeQueries(new RecipeRepository(new TestDatabase()));
    }

    [Fact]
    public async Task EmptyParamsDoNotLimitResults()
    {
        // Arrange
        const string searchTerm = "";
        var categoryIds = new List<long>();

        // Act
        var queryResults = await queries.GetByParamsAsync(searchTerm, categoryIds);

        // Assert
        Assert.NotEmpty(queryResults);
    }
}
