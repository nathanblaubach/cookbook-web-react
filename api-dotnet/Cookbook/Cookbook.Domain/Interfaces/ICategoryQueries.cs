using Cookbook.Domain.Entities;

namespace Cookbook.Domain.Interfaces;

public interface ICategoryQueries
{
    Task<IEnumerable<Category>> GetAllAsync();
}
