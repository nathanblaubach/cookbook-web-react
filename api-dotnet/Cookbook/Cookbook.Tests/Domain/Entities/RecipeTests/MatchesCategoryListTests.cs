using Cookbook.Domain.Entities;

namespace Cookbook.Tests.Domain.Entities.RecipeTests;

public class MatchesCategoryListTests
{
    private static Recipe GetBaseRecipe() => new()
    {
        Id = 1234L,
        Name = "Recipe Name",
        Ingredients = [ "Ingredient 1", "Ingredient 2" ],
        Instructions = [ "Instruction 1", "Instruction 2" ],
        CategoryId = 2468L,
    };

    [Fact]
    public void ReturnsMatched_WhenCategoryListIsNullOrEmptyOrContainsRecipeCategoryId()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var whenNull = recipe.MatchesCategoryList(null);
        var whenEmpty = recipe.MatchesCategoryList([]);
        var whenContainsRecipeCategoryId = recipe.MatchesCategoryList([123, 342, 545, 2468]);

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
        var whenDoesNotContainRecipeCategoryId = recipe.MatchesCategoryList([123, 342, 545]);

        // Assert
        Assert.False(whenDoesNotContainRecipeCategoryId);
    }
}
