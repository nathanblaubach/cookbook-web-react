using Cookbook.Entities;

namespace Cookbook.Tests.Entities.RecipeTests;

public class MatchesSearchTermTests
{
    private static Recipe GetBaseRecipe() => new()
    {
        Id = 1234L,
        Name = "Recipe Name",
        Ingredients = [ "Ingredient 1", "Ingredient 2" ],
        Instructions = [ "Instruction 1", "Instruction 2" ],
        CategoryId = 2468L,
    };

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("  ")]
    [InlineData(" \n  ")]
    [InlineData("ipe Na")]
    [InlineData("ipe na")]
    [InlineData("gredient 1")]
    [InlineData("ingred")]
    public void ReturnsMatched_WhenSearchTermIsEmptyOrWhitespaceOrIncludedInRecipeNameOrIngredient(string searchTerm)
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act and Assert
        Assert.True(recipe.MatchesSearchTerm(searchTerm));
    }

    [Theory]
    [InlineData("struc")]
    [InlineData("chocolate")]
    [InlineData("hello")]
    public void ReturnsNotMatched_WhenSearchTermIsNotInName(string searchTerm)
    {
        // Arrange
        var recipe = GetBaseRecipe();

        // Act and Assert
        Assert.False(recipe.MatchesSearchTerm(searchTerm));
    }
}
