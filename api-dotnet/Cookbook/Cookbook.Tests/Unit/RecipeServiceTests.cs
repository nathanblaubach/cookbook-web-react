using Cookbook.Tests.Fakes;

namespace Cookbook.Tests.Unit;

public class RecipeServiceTests
{
    private readonly FakeRecipeRepository _recipeRepository;
    private readonly RecipeService _recipeService;

    public RecipeServiceTests()
    {
        _recipeRepository = new FakeRecipeRepository();
        _recipeService = new RecipeService(_recipeRepository);
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
    public async Task GetRecipesBySearchTermAndCategoriesAsync_ShouldReturnAllRecipes_WhenSearchTermAndCategoriesAreInactive(string? searchTerm, IEnumerable<string>? activeCategories)
    {
        // Arrange
        var repositoryRecipes = await _recipeRepository.GetRecipesAsync();

        // Act
        var serviceRecipes = await _recipeService.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, activeCategories);

        // Assert
        var serviceRecipesList = serviceRecipes.ToList();
        Assert.Equal(repositoryRecipes.Count(), serviceRecipesList.Count);
    }

    [Theory]
    [InlineData("chocolate")] // In a recipe name and ingredient names
    [InlineData("alfredo")] // In a recipe name, but no ingredient names
    [InlineData("parsley")] // In no recipe names, but in ingredient names
    public async Task GetRecipesBySearchTermAndCategoriesAsync_ShouldLimitRecipesBySearchTerm_WhenSearchTermExists(string searchTerm)
    {
        // Act
        var serviceRecipes = (await _recipeService.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, null))
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
    public async Task GetRecipesBySearchTermAndCategoriesAsync_ShouldLimitRecipesByActiveCategories_WhenActiveCategoriesExist()
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
            var serviceRecipes = await _recipeService.GetRecipesBySearchTermAndCategoriesAsync(null, activeCategories);

            // Assert
            var serviceRecipesList = serviceRecipes.ToList();
            Assert.NotEmpty(serviceRecipesList);
            Assert.All(serviceRecipesList, recipe => Assert.Contains(recipe.Category, activeCategories));
        }
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(3)]
    public async Task GetRecipeByIdAsync_ShouldReturnRecipe_WhenRecipeWithIdExists(long recipeId)
    {
        // Act
        var recipe = await _recipeService.GetRecipeByIdAsync(recipeId);

        // Assert
        Assert.NotNull(recipe);
        Assert.Equal(recipeId, recipe.Id);
    }

    [Theory]
    [InlineData(-1)]
    [InlineData(4)]
    public async Task GetRecipeByIdAsync_ShouldReturnNull_WhenNoRecipeWithIdExists(long recipeId)
    {
        // Act
        var recipe = await _recipeService.GetRecipeByIdAsync(recipeId);

        // Assert
        Assert.Null(recipe);
    }

    [Fact]
    public async Task GetCategoriesAsync_ShouldReturnAllCategoriesOnce()
    {
        // Arrange
        var repositoryRecipes = await _recipeRepository.GetRecipesAsync();

        // Act
        var categories = await _recipeService.GetCategoriesAsync();

        // Assert
        var categoriesList = categories.ToList();
        Assert.Equal(categoriesList.Count, categoriesList.Distinct().Count());
        Assert.All(repositoryRecipes, recipe => Assert.Contains(recipe.Category, categoriesList));
    }

}
