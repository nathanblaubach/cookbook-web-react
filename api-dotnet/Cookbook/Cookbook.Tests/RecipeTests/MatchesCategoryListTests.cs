namespace Cookbook.Tests.RecipeTests;

public class MatchesCategoryListTests
{
    private static Recipe GetBaseRecipe() => new()
    {
        Id = 1234L,
        Name = "Recipe Name",
        Ingredients = ["Ingredient 1", "Ingredient 2"],
        Instructions = ["Instruction 1", "Instruction 2"],
        Category = "Category",
    };

    [Fact]
    public void ReturnsMatched_WhenCategoryListIsNullOrEmptyOrContainsRecipeCategoryId()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var whenNull = recipe.MatchesCategoryList(null);
        var whenEmpty = recipe.MatchesCategoryList([]);
        var whenContainsRecipeCategoryId = recipe.MatchesCategoryList(["Hello", "Goodbye", "Category"]);

        // Assert
        Assert.True(whenNull);
        Assert.True(whenEmpty);
        Assert.True(whenContainsRecipeCategoryId);
    }

    [Fact]
    public void ReturnsNotMatched_WhenCategoryListDoesNotContainId()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var whenDoesNotContainRecipeCategoryId = recipe.MatchesCategoryList(["Hello", "Goodbye"]);

        // Assert
        Assert.False(whenDoesNotContainRecipeCategoryId);
    }
}
