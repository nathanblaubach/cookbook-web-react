using Cookbook.Domain.Entities;

namespace Cookbook.Domain.Interfaces;

public interface IDatabase
{
    public IEnumerable<Recipe> Recipes { get; }
    public IEnumerable<Category> Categories { get; }
}
