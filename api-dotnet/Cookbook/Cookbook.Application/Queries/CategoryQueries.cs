using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Application.Queries;

public class CategoryQueries(IDatabase database) : ICategoryQueries
{
    public async Task<IEnumerable<Category>> GetAllAsync()
        => database.Categories;
}
