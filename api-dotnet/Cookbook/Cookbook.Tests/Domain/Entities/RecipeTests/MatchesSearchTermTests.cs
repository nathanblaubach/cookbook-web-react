using Cookbook.Domain.Entities;

namespace Cookbook.Tests;

public class MatchesSearchTermTests
{
    [Fact]
    public void ThrowsArgumentNullException_WhenSearchTermIsNull()
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act and Assert
        Assert.Throws<ArgumentNullException>(() => recipe.MatchesSearchTerm(null!));
    }

    [Theory]
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

    private static Recipe GetBaseRecipe() => new()
    {
        Id = 1234L,
        Name = "TestRecipe",
        Ingredients = new List<string>(),
        Instructions = new List<string>(),
        CategoryId = 1234L,
    };
}
