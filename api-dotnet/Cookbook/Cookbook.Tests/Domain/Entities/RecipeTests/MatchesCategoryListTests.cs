using Cookbook.Domain.Entities;

namespace Cookbook.Tests;

public class MatchesCategoryListTests
{
    [Fact]
    public void ReturnsMatched_WhenCategoryListIsNull()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesCategoryList(null);

        // Assert
        Assert.True(matched);
    }

    [Fact]
    public void ReturnsMatched_WhenCategoryListIsEmpty()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesCategoryList([]);

        // Assert
        Assert.True(matched);
    }

    

    [Fact]
    public void ReturnsMatched_WhenCategoryListContainsId()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesCategoryList([123, 342, 545, 2468]);

        // Assert
        Assert.True(matched);
    }

    [Fact]
    public void ReturnsNotMatched_WhenCategoryListDoesNotContainId()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesCategoryList([123, 342, 545]);

        // Assert
        Assert.False(matched);
    }

    private static Recipe GetBaseRecipe() => new()
    {
        Id = 1234L,
        Name = "Recipe Name",
        Ingredients = [ "Ingredient 1", "Ingredient 2" ],
        Instructions = [ "Instruction 1", "Instruction 2" ],
        CategoryId = 2468L,
    };
}
