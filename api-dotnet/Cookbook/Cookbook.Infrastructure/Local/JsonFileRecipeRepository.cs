namespace Cookbook.Infrastructure.Local;

public class JsonFileRecipeRepository : IRecipeRepository
{
    private readonly FileReader fileReader = new("../Cookbook.Infrastructure/Local/recipes.json");

    public IEnumerable<Recipe> GetRecipes()
    {
        return JsonParser.Parse<JsonRecipe[]>(fileReader.Read())
            .Select(JsonRecipeToRecipeMapper.Map);
    }
}
