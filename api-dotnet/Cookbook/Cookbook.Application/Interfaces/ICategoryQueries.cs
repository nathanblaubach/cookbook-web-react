using Cookbook.Domain.Entities;

namespace Cookbook.Application.Interfaces;

public interface ICategoryQueries
{
    Task<IEnumerable<Category>> GetAllAsync();
}
