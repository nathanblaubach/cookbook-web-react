namespace Cookbook.Adapters.Recipes;

public class JsonRecipeRepository(IReader fileReader) : IRecipeRepository
{
    public async Task<IEnumerable<Recipe>> GetRecipesAsync()
    {
        var jsonRecipes = JsonParser.Parse<JsonRecipe[]>(fileReader.Read());
        return await Task.FromResult(jsonRecipes.Select(JsonRecipeToRecipeMapper.Map));
    }
}
