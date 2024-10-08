namespace Cookbook.Infrastructure.Local;

public class JsonFileRecipeRepository : IRecipeRepository
{
    private readonly FileReader fileReader = new("../Cookbook.Infrastructure/Local/recipes.json");

    public async Task<IEnumerable<Recipe>> GetRecipesAsync()
    {
        var jsonRecipes = JsonParser.Parse<JsonRecipe[]>(fileReader.Read());
        return await Task.FromResult(jsonRecipes.Select(JsonRecipeToRecipeMapper.Map));
    }
}
