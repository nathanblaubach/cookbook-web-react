namespace Cookbook.Domain.Entities;

public class Recipe : BaseEntity
{
    /// <summary>
    /// The name of the recipe
    /// </summary>
    public required string Name { get; set; }
    
    /// <summary>
    /// The ingredients of the recipe
    /// </summary>
    public required IEnumerable<string> Ingredients { get; set; }
    
    /// <summary>
    /// The instructions of the recipe
    /// </summary>
    public required IEnumerable<string> Instructions { get; set; }
    
    /// <summary>
    /// The Id of the category of the recipe
    /// </summary>
    public required long CategoryId { get; set; }
}