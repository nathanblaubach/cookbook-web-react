namespace Cookbook;

public interface IRecipeRepository
{
    IEnumerable<Recipe> GetRecipes();
}
