using System.Diagnostics.CodeAnalysis;
using Cookbook.Domain.Interfaces;
using Cookbook.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class InfrastructureConfiguration
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddSingleton<ICategoryRepository, CategoryRepository>();
        services.AddSingleton<IRecipeRepository, RecipeRepository>();
        return services;
    }
}