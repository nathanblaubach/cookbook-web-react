using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;
using MediatR;

namespace Cookbook.Application.Queries;

public record GetRecipesBySearchTermAndCategories(
    string? SearchTerm, 
    IEnumerable<long>? CategoryIds
) : IRequest<IEnumerable<Recipe>>;

public class GetRecipesBySearchTermAndCategoriesHandler(IRecipeRepository recipeRepository) : IRequestHandler<GetRecipesBySearchTermAndCategories, IEnumerable<Recipe>>
{
    public async Task<IEnumerable<Recipe>> Handle(GetRecipesBySearchTermAndCategories request, CancellationToken cancellationToken)
    {
        var recipes = (await recipeRepository.GetAllAsync()).AsQueryable();

        var lowercaseSearchString = request.SearchTerm?.ToLowerInvariant();
        if (!string.IsNullOrWhiteSpace(lowercaseSearchString))
        {
            recipes = recipes.Where(recipe => SearchStringMatchesRecipeOrIngredientName(recipe, lowercaseSearchString));
        }
        
        var categoryIdList = request.CategoryIds?.ToList();
        if (categoryIdList is not null && categoryIdList.Count > 0)
        {
            recipes = recipes.Where(recipe => categoryIdList.Contains(recipe.CategoryId));
        }

        return recipes;
    }

    private static bool SearchStringMatchesRecipeOrIngredientName(Recipe recipe, string lowercaseSearchString)
        => recipe.Name.ToLowerInvariant().Contains(lowercaseSearchString) ||
           recipe.Ingredients.Any(ingredient => ingredient.ToLowerInvariant().Contains(lowercaseSearchString));
}
