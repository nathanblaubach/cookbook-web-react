using Cookbook.Application.Interfaces;
using Cookbook.Application.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Application;

public static class ServiceRegistration
{
    public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services) => services
        .AddScoped<ICategoryQueries, CategoryQueries>()
        .AddScoped<IRecipeQueries, RecipeQueries>();
}
