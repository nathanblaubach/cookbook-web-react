using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Infrastructure.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly IEnumerable<Category> categories = JsonFileLoader.Load<IEnumerable<Category>>("categories");
    
    /// <inheritdoc />
    public async Task<IEnumerable<Category>> GetAllAsync()
        => categories;
}