using Cookbook.Adapters.Recipes;

namespace Cookbook.Tests.Unit.JsonRecipeRepositoryTests;

public class GetRecipeByIdAsyncTests
{
    private readonly FakeJsonRecipeFileReader _recipeFileReader;
    private readonly JsonRecipeRepository _recipeRepository;

    public GetRecipeByIdAsyncTests()
    {
        _recipeFileReader = new FakeJsonRecipeFileReader();
        _recipeRepository = new JsonRecipeRepository(_recipeFileReader);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(3)]
    public async Task ShouldReturnRecipe_WhenRecipeWithIdExists(long recipeId)
    {
        // Act
        var recipe = await _recipeRepository.GetRecipeByIdAsync(recipeId);

        // Assert
        Assert.NotNull(recipe);
        Assert.Equal(recipeId, recipe.Id);
    }

    [Theory]
    [InlineData(-1)]
    [InlineData(4)]
    public async Task ShouldReturnNull_WhenNoRecipeWithIdExists(long recipeId)
    {
        // Act
        var recipe = await _recipeRepository.GetRecipeByIdAsync(recipeId);

        // Assert
        Assert.Null(recipe);
    }
}
