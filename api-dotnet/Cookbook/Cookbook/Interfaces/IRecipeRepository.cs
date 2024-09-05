using Cookbook.Entities;

namespace Cookbook.Interfaces;

public interface IRecipeRepository
{
    IEnumerable<Recipe> GetRecipes();
}
