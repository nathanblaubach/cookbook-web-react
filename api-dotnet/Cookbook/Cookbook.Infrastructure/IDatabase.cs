using Cookbook.Domain.Entities;

namespace Cookbook.Infrastructure;

public interface IDatabase
{
    public IEnumerable<Recipe> Recipes { get; }
    public IEnumerable<Category> Categories { get; }
}
