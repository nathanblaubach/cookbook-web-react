using Cookbook.Domain.Entities;

namespace Cookbook.Tests;

public class MatchesSearchTermTests
{
    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("  ")]
    [InlineData(" \n  ")]
    public void ReturnsMatched_WhenSearchTermIsEmptyOrWhitespace(string searchTerm)
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesSearchTerm(searchTerm);

        // Assert
        Assert.True(matched);
    }

    [Theory]
    [InlineData("ipe Na")]
    [InlineData("ipe na")]
    [InlineData("gredient 1")]
    [InlineData("ingred")]
    public void ReturnsMatched_WhenSearchTermIsInName(string searchTerm)
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesSearchTerm(searchTerm);

        // Assert
        Assert.True(matched);
    }

    [Theory]
    [InlineData("struc")]
    [InlineData("chocolate")]
    [InlineData("hello")]
    public void ReturnsNotMatched_WhenSearchTermIsNotInName(string searchTerm)
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act
        var matched = recipe.MatchesSearchTerm(searchTerm);

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
