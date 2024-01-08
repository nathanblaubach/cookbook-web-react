using System.Data;
using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;

namespace Cookbook.Infrastructure.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly IEnumerable<Category> categories;
    
    public CategoryRepository()
    {
        categories = JsonFileLoader.Load<IEnumerable<Category>>("categories")
            ?? throw new DataException("Could not read categories from file");
    }

    /// <inheritdoc />
    public async Task<IEnumerable<Category>> GetAllAsync()
        => categories;
}