using Cookbook.Interfaces;
using Cookbook.Services;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics.CodeAnalysis;

namespace Cookbook;

[ExcludeFromCodeCoverage]
public static class ServiceRegistration
{
    public static IServiceCollection AddCookbookServices(this IServiceCollection services)
    {
        return services
            .AddScoped<RecipeService>();
    }
}
