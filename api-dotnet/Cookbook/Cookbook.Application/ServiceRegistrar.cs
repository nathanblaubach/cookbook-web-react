using Cookbook.Domain.Interfaces;
using Cookbook.Application.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Application;

public static class ServiceRegistrar
{
    public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services) => services
        .AddScoped<ICategoryQueries, CategoryQueries>()
        .AddScoped<IRecipeQueries, RecipeQueries>();
}
