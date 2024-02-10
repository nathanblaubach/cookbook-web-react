namespace Cookbook.Domain.Entities;

public class Recipe
{
    public required long Id { get; set; }
    
    public required string Name { get; set; }

    public required IEnumerable<string> Ingredients { get; set; }
    
    public required IEnumerable<string> Instructions { get; set; }

    public required long CategoryId { get; set; }

    /// <summary>
    /// Determines whether the Name or Ingredients of the recipe contain a given search term
    /// </summary>
    /// <remarks>
    /// Case Insensitive
    /// </remarks>
    /// <param name="searchTerm">The term to match</param>
    /// <returns>True if matches or term is empty, false otherwise</returns>
    public bool MatchesSearchTerm(string searchTerm)
    {
        ArgumentNullException.ThrowIfNull(searchTerm);
        var lowercaseSearchString = searchTerm.ToLowerInvariant();
        return string.IsNullOrWhiteSpace(lowercaseSearchString)
            || Name.ToLowerInvariant().Contains(lowercaseSearchString)
            || Ingredients.Any(ingredient => ingredient.ToLowerInvariant().Contains(lowercaseSearchString));
    }

    /// <summary>
    /// Determines whether the CategoryId of the recipe is in a given selection
    /// </summary>
    /// <remarks>Case Insensitive</remarks>
    /// <param name="searchTerm">The term to match</param>
    /// <returns>True if matches or list is empty, false otherwise</returns>
    public bool MatchesCategoryList(IEnumerable<long> categoryIds)
    {
        var categoryIdList = categoryIds?.ToList();
        return categoryIdList is null
            || categoryIdList.Count == 0
            || categoryIdList.Contains(CategoryId);
    }
}
