using Cookbook.Domain.Entities;

namespace Cookbook.Domain.Interfaces;

public interface ICategoryRepository
{
    /// <summary>
    /// Get all categories in a repository
    /// </summary>
    /// <returns>The categories in the repository</returns>
    Task<IEnumerable<Category>> GetAllAsync();
}
