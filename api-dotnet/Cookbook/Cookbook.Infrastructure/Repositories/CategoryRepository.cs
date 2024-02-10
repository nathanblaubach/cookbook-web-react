using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Infrastructure.Repositories;

public class CategoryRepository(IDatabase database) : ICategoryRepository
{
    /// <inheritdoc />
    public async Task<IEnumerable<Category>> GetAllAsync()
        => database.Categories;
}