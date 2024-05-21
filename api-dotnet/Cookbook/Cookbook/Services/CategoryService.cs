using Cookbook.Entities;
using Cookbook.Interfaces;

namespace Cookbook.Services;

public class CategoryService(IDatabase database) : ICategoryService
{
    public async Task<IEnumerable<Category>> GetAllAsync()
        => await Task.FromResult(database.Categories);
}
