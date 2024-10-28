using Cookbook.Adapters.Recipes;

namespace Cookbook.Tests.Unit.JsonRecipeRepositoryTests;

public class JsonRecipeRepositoryTests
{
    private readonly FakeJsonRecipeFileReader _recipeFileReader;
    private readonly JsonRecipeRepository _recipeRepository;

    public JsonRecipeRepositoryTests()
    {
        _recipeFileReader = new FakeJsonRecipeFileReader();
        _recipeRepository = new JsonRecipeRepository(_recipeFileReader);
    }

    [Fact]
    public async Task ShouldReturnAllCategoriesOnce()
    {
        // Arrange
        var repositoryRecipes = _recipeFileReader.GetRecipes();

        // Act
        var categories = await _recipeRepository.GetCategoriesAsync();

        // Assert
        var categoriesList = categories.ToList();
        Assert.Equal(categoriesList.Count, categoriesList.Distinct().Count());
        Assert.All(repositoryRecipes, recipe => Assert.Contains(recipe.Category, categoriesList));
    }
}
