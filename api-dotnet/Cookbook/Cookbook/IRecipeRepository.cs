namespace Cookbook;

public interface IRecipeRepository
{
    Task<IEnumerable<Recipe>> GetRecipesAsync();
}
