using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;
using MediatR;

namespace Cookbook.Application.Queries;

public record GetRecipeById(long RecipeId) : IRequest<Recipe>;

public class GetRecipeByIdHandler(IRecipeRepository recipeRepository) : IRequestHandler<GetRecipeById, Recipe>
{
    public async Task<Recipe> Handle(GetRecipeById request, CancellationToken cancellationToken)
        => await recipeRepository.GetByIdAsync(request.RecipeId);
}
