using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;
using MediatR;

namespace Cookbook.Api.Queries;

public class GetRecipeById(long recipeId) : IRequest<Recipe?>
{
    public long RecipeId { get; init; } = recipeId;
}

public class GetRecipeByIdHandler(IRecipeRepository recipeRepository) : IRequestHandler<GetRecipeById, Recipe?>
{
    public async Task<Recipe?> Handle(GetRecipeById request, CancellationToken cancellationToken)
    {
        return await recipeRepository.GetByIdAsync(request.RecipeId);
    }
}
