namespace Cookbook.Adapters.Recipes;

public class JsonRecipe
{
    public required long Id { get; set; }
    public required string Name { get; set; }
    public required string Category { get; set; }
    public required IEnumerable<string> Ingredients { get; set; }
    public required IEnumerable<string> Instructions { get; set; }
}
