using Cookbook.Domain.Entities;
using Cookbook.Domain.Interfaces;
using MediatR;

namespace Cookbook.Application.Queries;

public record GetAllCategories : IRequest<IEnumerable<Category>> { }

public class GetAllCategoriesHandler(ICategoryRepository categoryRepository) : IRequestHandler<GetAllCategories, IEnumerable<Category>>
{
    public async Task<IEnumerable<Category>> Handle(GetAllCategories request, CancellationToken cancellationToken)
        => await categoryRepository.GetAllAsync();
}