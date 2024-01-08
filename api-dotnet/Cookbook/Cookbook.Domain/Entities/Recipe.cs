namespace Cookbook.Domain.Entities;

public class Recipe : BaseEntity
{
    public required string Name { get; set; }

    public required IEnumerable<string> Ingredients { get; set; }
    
    public required IEnumerable<string> Instructions { get; set; }

    public required long CategoryId { get; set; }
}
