namespace Cookbook.Infrastructure.Local;

public class JsonFileRecipeRepository : IRecipeRepository
{
    private class JsonRecipe
    {
        public required long Id { get; set; }
        public required string Name { get; set; }
        public required string Category { get; set; }
        public required IEnumerable<string> Ingredients { get; set; }
        public required IEnumerable<string> Instructions { get; set; }
    }

    private class JsonFileRecipeRepositorySchema
    {
        public required IEnumerable<JsonRecipe> Recipes { get; set; }
    }

    private readonly FileReader fileReader = new("../Cookbook.Infrastructure/Local/recipe-repository.json");

    public IEnumerable<Recipe> GetRecipes()
    {
        return JsonParser.Parse<JsonFileRecipeRepositorySchema>(this.fileReader.Read())
            .Recipes
            .Select(recipe => new Recipe
            {
                Id = recipe.Id,
                Name = recipe.Name,
                Category = recipe.Category,
                Ingredients = recipe.Ingredients,
                Instructions = recipe.Instructions
            });
    }
}
