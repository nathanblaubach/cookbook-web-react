using Cookbook.Entities;

namespace Cookbook.Interfaces;

public interface ICategoryService
{
    Task<IEnumerable<Category>> GetAllAsync();
}
