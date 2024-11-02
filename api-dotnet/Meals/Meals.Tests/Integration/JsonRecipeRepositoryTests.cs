using Meals.Adapters.Recipes;
using Meals.Infrastructure.Local;

namespace Meals.Tests.Integration
{
    public class JsonRecipeRepositoryTests
    {
        [Fact]
        public async Task GetRecipesAsync_WhenCalled_ReturnsRecipes()
        {
            // Arrange
            var recipeJsonFilePath = Path.Combine(Directory.GetCurrentDirectory(), "..", "..", "..", "..", "recipes.json");
            var repository = new JsonRecipeRepository(new FileReader(recipeJsonFilePath));

            // Act
            var recipes = await repository.GetRecipesBySearchTermAndCategoriesAsync(null, null);

            // Assert
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