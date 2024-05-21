using Cookbook.Entities;

namespace Cookbook.Interfaces;

public interface IDatabase
{
    public IEnumerable<Recipe> Recipes { get; }
    public IEnumerable<Category> Categories { get; }
}
