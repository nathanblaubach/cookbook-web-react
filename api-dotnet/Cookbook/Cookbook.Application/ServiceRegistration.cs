using Cookbook.Domain.Interfaces;
using Cookbook.Application.Queries;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics.CodeAnalysis;

namespace Cookbook.Application;

[ExcludeFromCodeCoverage]
public static class ServiceRegistration
{
    public static IServiceCollection AddApplication(this IServiceCollection services) => services
        .AddScoped<ICategoryQueries, CategoryQueries>()
        .AddScoped<IRecipeQueries, RecipeQueries>();
}
