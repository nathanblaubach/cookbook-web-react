using Cookbook.Adapters.Recipes;

namespace Cookbook.Tests.Unit.JsonRecipeRepositoryTests;

public class GetRecipesBySearchTermAndCategoriesAsyncTests
{
    private readonly FakeJsonRecipeFileReader _recipeFileReader;
    private readonly JsonRecipeRepository _recipeRepository;

    public GetRecipesBySearchTermAndCategoriesAsyncTests()
    {
        _recipeFileReader = new FakeJsonRecipeFileReader();
        _recipeRepository = new JsonRecipeRepository(_recipeFileReader);
    }

    [Theory]
    [InlineData(null, null)]
    [InlineData("", null)]
    [InlineData(" ", null)]
    [InlineData("  ", null)]
    [InlineData(null, new string[0])]
    [InlineData("", new string[0])]
    [InlineData(" ", new string[0])]
    [InlineData("  ", new string[0])]
    public async Task ShouldReturnAllRecipes_WhenSearchTermAndCategoriesAreInactive(string? searchTerm, IEnumerable<string>? activeCategories)
    {
        // Arrange
        var repositoryRecipes = _recipeFileReader.GetRecipes();

        // Act
        var serviceRecipes = await _recipeRepository.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, activeCategories);

        // Assert
        var serviceRecipesList = serviceRecipes.ToList();
        Assert.Equal(repositoryRecipes.Count(), serviceRecipesList.Count);
    }

    [Theory]
    [InlineData("chocolate")] // In a recipe name and ingredient names
    [InlineData("alfredo")] // In a recipe name, but no ingredient names
    [InlineData("parsley")] // In no recipe names, but in ingredient names
    public async Task ShouldLimitRecipesBySearchTerm_WhenSearchTermExists(string searchTerm)
    {
        // Act
        var serviceRecipes = (await _recipeRepository.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, null))
            .ToList();

        // Assert
        Assert.NotEmpty(serviceRecipes);
        Assert.All(serviceRecipes, serviceRecipe =>
        {
            var searchTermLower = searchTerm.ToLower();
            Assert.True(serviceRecipe.Name.Contains(searchTermLower, StringComparison.InvariantCultureIgnoreCase) ||
                        serviceRecipe.Ingredients.Any(ingredient => ingredient.Contains(searchTermLower, StringComparison.InvariantCultureIgnoreCase)));
        });
    }

    [Fact]
    public async Task ShouldLimitRecipesByActiveCategories_WhenActiveCategoriesExist()
    {
        // Arrange
        IEnumerable<IEnumerable<string>> activeCategoriesCases =
        [
            [ "Dessert" ],
            [ "Main Course" ],
            [ "Dessert", "Main Course" ]
        ];

        foreach (var activeCategoriesCase in activeCategoriesCases)
        {
            var activeCategories = activeCategoriesCase.ToList();

            // Act
            var serviceRecipes = await _recipeRepository.GetRecipesBySearchTermAndCategoriesAsync(null, activeCategories);

            // Assert
            var serviceRecipesList = serviceRecipes.ToList();
            Assert.NotEmpty(serviceRecipesList);
            Assert.All(serviceRecipesList, recipe => Assert.Contains(recipe.Category, activeCategories));
        }
    }
}
