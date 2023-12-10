using System.Collections;
using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;
using MediatR;

namespace Cookbook.Api.Queries;

public class GetRecipesBySearchTermAndCategories(string? searchTerm, IEnumerable<long>? categoryIds) : IRequest<IEnumerable<Recipe>>
{
    public string? SearchTerm { get; init; } = searchTerm;
    public IEnumerable<long>? CategoryIds { get; init; } = categoryIds;
}

public class GetRecipesBySearchTermAndCategoriesHandler(IRecipeRepository recipeRepository) : IRequestHandler<GetRecipesBySearchTermAndCategories, IEnumerable<Recipe>>
{
    public async Task<IEnumerable<Recipe>> Handle(GetRecipesBySearchTermAndCategories request, CancellationToken cancellationToken)
    {
        var lowercaseSearchString = request.SearchTerm?.ToLowerInvariant();
        var categoryIdList = request.CategoryIds?.ToList();

        return (await recipeRepository.GetAllAsync())
            .Where(recipe => string.IsNullOrWhiteSpace(lowercaseSearchString) || SearchStringMatchesRecipeOrIngredientName(recipe, lowercaseSearchString))
            .Where(recipe => categoryIdList is null || categoryIdList.Count == 0 || categoryIdList.Contains(recipe.CategoryId));
    }

    private static bool SearchStringMatchesRecipeOrIngredientName(Recipe recipe, string lowercaseSearchString)
        => recipe.Name.ToLowerInvariant().Contains(lowercaseSearchString) ||
           recipe.Ingredients.Any(ingredient => ingredient.ToLowerInvariant().Contains(lowercaseSearchString));
}
