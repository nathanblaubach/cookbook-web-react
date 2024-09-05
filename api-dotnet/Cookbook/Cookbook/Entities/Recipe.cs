namespace Cookbook.Entities;

public class Recipe
{
    public required long Id { get; set; }
    
    public required string Name { get; set; }

    public required IEnumerable<string> Ingredients { get; set; }
    
    public required IEnumerable<string> Instructions { get; set; }

    public required string Category { get; set; }

    public bool MatchesSearchTermAndCategories(string? searchTerm, IEnumerable<string>? categories)
    {
        return MatchesSearchTerm(searchTerm)
            && MatchesCategoryList(categories);
    }

    public bool MatchesSearchTerm(string? searchTerm)
    {
        return string.IsNullOrWhiteSpace(searchTerm)
            || Name.Contains(searchTerm, StringComparison.InvariantCultureIgnoreCase)
            || Ingredients.Any(ingredient => ingredient.Contains(searchTerm, StringComparison.InvariantCultureIgnoreCase));
    }

    public bool MatchesCategoryList(IEnumerable<string>? categories)
    {
        var categoryList = categories?.ToList();
        return categoryList is null
            || categoryList.Count == 0
            || categoryList.Contains(Category);
    }
}
