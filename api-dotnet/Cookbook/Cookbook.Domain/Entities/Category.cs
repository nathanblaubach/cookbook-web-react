namespace Cookbook.Domain.Entities;

public class Category : BaseEntity
{
    /// <summary>
    /// The name of the category
    /// </summary>
    public required string Name { get; set; }
}