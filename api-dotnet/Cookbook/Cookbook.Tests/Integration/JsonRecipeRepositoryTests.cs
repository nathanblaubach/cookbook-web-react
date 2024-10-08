using Cookbook.Adapters.Recipes;
using Cookbook.Infrastructure.Local;

namespace Cookbook.Tests.Integration
{
    public class JsonRecipeRepositoryTests
    {
        [Fact]
        public async Task GetRecipesAsync_WhenCalled_ReturnsRecipes()
        {
            // Arrange
            var recipeJsonFilePath = Path.Combine(Directory.GetCurrentDirectory(), "..", "..", "..", "..", "recipes.json");
            var reader = new FileReader(recipeJsonFilePath);
            var repository = new JsonRecipeRepository(reader);

            // Act
            var recipes = await repository.GetRecipesAsync();

            // Assert
            Assert.NotNull(recipes);
            Assert.NotEmpty(recipes);
            Assert.All(recipes, recipe =>
            {
                Assert.NotNull(recipe);
                Assert.NotEmpty(recipe.Name);
                Assert.NotEmpty(recipe.Category);
                Assert.NotEmpty(recipe.Ingredients);
                Assert.NotEmpty(recipe.Instructions);
            });
        }
    }
}