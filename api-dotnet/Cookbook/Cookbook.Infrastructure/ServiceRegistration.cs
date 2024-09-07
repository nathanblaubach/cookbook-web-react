using System.Diagnostics.CodeAnalysis;
using Cookbook.Infrastructure.Fake;
using Cookbook.Infrastructure.Local;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class ServiceRegistration
{
    public static IServiceCollection AddFakeInfrastructure(this IServiceCollection services) => services
        .AddSingleton<IRecipeRepository, FakeRecipeRepository>();

    public static IServiceCollection AddLocalInfrastructure(this IServiceCollection services) => services
        .AddScoped<IRecipeRepository, JsonFileRecipeRepository>();
}
